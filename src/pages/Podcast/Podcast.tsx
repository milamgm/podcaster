import { ExtendedItemCard } from "../../common/utilities";
import { Outlet, useParams } from "react-router-dom";
import "./Podcast.scss";

const Podcast = () => {
  let { podcastId } = useParams();

  return (
    <div className="podcast">
      <ExtendedItemCard podcastId={podcastId} />
      <div className="info">
        <Outlet />
      </div>
    </div>
  );
};

export default Podcast;
