import {useNavigate, useParams} from 'react-router-dom';
import {NotFound} from '../../not-found/not-found';
import {useAppSelector} from '../../../store/hooks/use-app-selector';
import {useAppDispatch} from '../../../store/hooks/use-app-dispatch';
import {ChangeEvent, MouseEventHandler, MutableRefObject, useCallback, useEffect, useRef, useState} from 'react';
import {fetchFilm} from '../../../store/api/api-actions';
import {Loader} from '../../loader/loader';
import {ReducerName} from '../../../store/reducers/reducer-types';
import {PlayIcon} from '../../icons/play-icon';
import {PauseIcon} from '../../icons/pause-icon';

export function PlayerPage(){
  const {id} = useParams();
  const navigate = useNavigate();
  const [viewedTime, setViewedTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const isLoading = useAppSelector((state) => state[ReducerName.Film].isLoading);
  const film = useAppSelector((state) => state[ReducerName.Film].selectedFilm);
  const dispatch = useAppDispatch();
  const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const playerScreenRef = useRef() as MutableRefObject<HTMLDivElement>;

  const onStartPlay = useCallback(() => {
    setIsPlaying(true);
  }, []);
  const onPause = useCallback(() => {
    setIsPlaying(false);
  }, []);
  const timeUpdate = useCallback((event: ChangeEvent<HTMLVideoElement>) => {
    setViewedTime(event.target.currentTime);
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilm(id));
    }
  }, [dispatch, id]);


  if (isLoading) {
    return (<Loader/>);
  }
  if (!film || !id){
    return (<NotFound/>);
  }
  function getLeftTime() {
    if (!film) {
      return '00:00:00';
    }
    const timeLeft = film.runTime * 60 - viewedTime;
    const hours = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((timeLeft / 60) % 60).toString().padStart(2, '0');
    const seconds = Math.floor((timeLeft % 60)).toString().padStart(2, '0');
    return (hours !== '00') ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
  }

  const togglePlayer = () => {
    if (!videoRef || !videoRef.current){
      return;
    }
    if (isPlaying){
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const toggleFullscreen: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    if (!document.fullscreenElement){
      if (!playerScreenRef || !playerScreenRef.current){
        return;
      }
      playerScreenRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  const playedPercent = 100 * (viewedTime / (film.runTime * 60));

  return (
    <div className="player" ref={playerScreenRef}>
      <video src={film.videoLink}
        className="player__video"
        poster={film.previewImage}
        onPlay={onStartPlay}
        onPause={onPause}
        onTimeUpdate={timeUpdate}
        ref={videoRef}
      />

      <button type="button" className="player__exit" onClick={() => navigate(-1)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={playedPercent} max="100"></progress>
            <div className="player__toggler" style={{left: `${playedPercent}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getLeftTime()}</div>
        </div>

        <div className="player__controls-row" onClick={togglePlayer}>
          <button type="button" className="player__play">
            {!isPlaying ? <PlayIcon/> : <PauseIcon/>}
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={toggleFullscreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
