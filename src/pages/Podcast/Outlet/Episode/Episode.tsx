import { AudioPlayer } from "../../../../common/utilities";
import "./Episode.scss";

const Episode = () => {
  return (
    <div className="episode">
      <div className="episode_card">
        <h3 className="title">Wilco</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quia atque et explicabo numquam nam tempora, eaque laboriosam natus id
          quae ratione, animi tenetur nihil nobis, vero a fuga sapiente?
        </p>
        <hr />
        <AudioPlayer />
      </div>
    </div>
  );
};

export default Episode;
