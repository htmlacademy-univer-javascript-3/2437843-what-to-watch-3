
type VideoProps = {
  src: string;
  autoPlay?: boolean;
  muted?: boolean;
  width: number;
  height: number;
  poster: string;
  onClick?: () => void;
}
export function Video(props: VideoProps){
  return (
    <video {...props}/>
  );
}
