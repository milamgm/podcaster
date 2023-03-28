import { ExtendedItemCard } from "../../common/utilities";
import { Outlet } from "react-router-dom";
import "./Podcast.scss";

const Podcast = () => {
  return (
    <div className="podcast">
      <ExtendedItemCard />
      <div className="info">
        <Outlet />
      </div>
    </div>
  );
};

export default Podcast;
