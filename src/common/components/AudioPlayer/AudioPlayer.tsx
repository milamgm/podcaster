import "./AudioPlayer.scss";

interface Props {
  url: string;
}

const AudioPlayer = ({ url }: Props) => {
  return (
    <div className="audioPlayer">
      <audio id="audio" src={url} controls></audio>
    </div>
  );
};

export default AudioPlayer;
