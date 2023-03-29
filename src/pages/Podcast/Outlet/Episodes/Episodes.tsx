import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  useRetrieveDetails,
  useTimeConverter,
} from "../../../../common/utilities";
import TimeConverter from "./components/TimeConverter";
import "./Episodes.scss";

const Episodes = () => {
  let { podcastId } = useParams();
  const { data, isLoading } = useRetrieveDetails(podcastId);
  const [podcastData, setPodcastData] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setPodcastData(data);
    }
  }, [data, isLoading]);

  return (
    <>
      {!isLoading && (
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
                  podcastData.map((episode) => (
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
                      <td><TimeConverter episode={episode} /></td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {isLoading && <h3>Loading...</h3>}
    </>
  );
};

export default Episodes;