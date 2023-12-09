import {useNavigate, useParams} from 'react-router-dom';
import {NotFound} from './not-found';
import {useAppSelector} from '../../store/hooks/use-app-selector';
import {useAppDispatch} from '../../store/hooks/use-app-dispatch';
import {useEffect} from 'react';
import {fetchFilm} from '../../store/api/api-actions';
import {Loader} from '../parts/loader';
import {ReducerName} from '../../store/reducers/reducer-types';

export function PlayerPage(){
  const {id} = useParams();
  const navigate = useNavigate();
  const isLoading = useAppSelector((state) => state[ReducerName.Film].isLoading);
  const film = useAppSelector((state) => state[ReducerName.Film].selectedFilm);
  const dispatch = useAppDispatch();
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
  return (
    <div className="player">
      <video src={film.videoLink} className="player__video" poster={film.previewImage}></video>

      <button type="button" className="player__exit" onClick={() => navigate(-1)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%;'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
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
