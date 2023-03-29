import { AudioPlayer } from "../../../../common/utilities";
import { useLocation } from "react-router-dom";
import DOMPurify from "dompurify";
import "./Episode.scss";

const Episode = () => {
  const location = useLocation();
  const episode = location.state?.data;
  console.log(episode);

  return (
    <div className="episode">
      <div className="episode_card">
        <h3 className="title">{episode.trackName}</h3>
        <div
          className="description"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(episode.description),
          }}
        />
        <hr />
        <AudioPlayer url={episode.episodeUrl} />
      </div>
    </div>
  );
};

export default Episode;
