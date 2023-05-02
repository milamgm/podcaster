import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../../../../application/context/AppContext";
import { IEpisode } from "../../../../common/types";
import {
  useRetrieveDetails
} from "../../../../common/utilities";
import TimeConverter from "./components/TimeConverter";
import "./Episodes.scss";

const Episodes = () => {
  let { podcastId } = useParams();
  const { setLoading } = useAppContext();
  const { data, isLoadingDetails } = useRetrieveDetails(podcastId);
  const [podcastData, setPodcastData] = useState<IEpisode[]>([]);

  useEffect(() => {
    if (!isLoadingDetails) {
      setPodcastData(data);
    }
  }, [data, isLoadingDetails]);

  //Sets main loading state with isLoadingDetails value
  useEffect(() => {
    setLoading(isLoadingDetails);
  }, [isLoadingDetails]);

  return (
    <>
      {!isLoadingDetails && (
        <div className="episodes">
          <div className="counter_card">
            Episodes: {podcastData && podcastData.length}
          </div>
          <div className="items_list">
            <table>
              <thead>
                <tr>
                  <th className="title_column">Title</th>
                  <th>Date</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {podcastData &&
                  podcastData.map((episode: IEpisode) => (
                    <tr key={episode.trackId}>
                      <td>
                        <Link
                          to={`episode/${episode.trackId}`}
                          state={{ data: episode }}
                        >
                          {episode.trackName}
                        </Link>
                      </td>
                      <td>
                        {new Intl.DateTimeFormat("en-GB").format(
                          new Date(episode.releaseDate)
                        )}
                      </td>
                      <td>
                        <TimeConverter episode={episode} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {isLoadingDetails && <h3>Loading...</h3>}
    </>
  );
};

export default Episodes;
