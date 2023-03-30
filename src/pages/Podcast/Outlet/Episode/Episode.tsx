import { AudioPlayer, useRetrieveDetails } from "../../../../common/utilities";
import { useLocation } from "react-router-dom";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import "./Episode.scss";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../../application/context/AppContext";
import { IEpisode } from "../../../../common/types";

const Episode = () => {
  const { podcastId, episodeId } = useParams();
  const { setLoading } = useAppContext();
  const { data, isLoadingDetails } = useRetrieveDetails(podcastId);
  const [episodeData, setEpisodeData] = useState<IEpisode>();

  useEffect(() => {
    //Filter podcasts array and update the episode data state
    if (data) {
      const filteredEpisode = data.find(
        (episode: IEpisode) => episode.trackId == episodeId
      );
      setEpisodeData(filteredEpisode);
    }
  }, [podcastId, episodeId, data]);

  useEffect(() => {
    setLoading(isLoadingDetails);
  }, [isLoadingDetails]);

  return (
    <div className="episode">
      {episodeData && (
        <div className="episode_card">
          <h3 className="title">{episodeData.trackName}</h3>
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(episodeData.description),
            }}
          />
          <hr />
          <AudioPlayer url={episodeData.episodeUrl} />
        </div>
      )}
    </div>
  );
};

export default Episode;
