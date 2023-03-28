import "./AudioPlayer.scss";

const AudioPlayer = () => {
  return (
    <div className="audioPlayer">
      <audio id="audio" src="./audio/treck1.mp3" controls></audio>
    </div>
  );
};

export default AudioPlayer;
