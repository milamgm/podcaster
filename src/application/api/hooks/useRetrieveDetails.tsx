import { useState, useEffect } from "react";
import axios from "axios";
import { IEpisode } from "../../../common/types";

const useRetrieveDetails = (podcastId: string | number | symbol | any) => {
  const [isLoadingDetails, setIsLoadingDetails] = useState(true);
  const [data, setData] = useState<IEpisode[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
          withCredentials: false,
          params: {
            access_token: "https://allorigins.win",
          },
        });

        const results = response.data.results;

        let newObject: IEpisode[] = [];
        results.forEach((episode: IEpisode) => {
          newObject = [
            ...newObject,
            {
              trackId: episode.trackId,
              trackName: episode.trackName,
              description: episode.description,
              episodeUrl: episode.episodeUrl,
              trackTimeMillis: episode.trackTimeMillis,
              releaseDate: episode.releaseDate,
            },
          ];
        });
        setData(newObject);
        const storageData = {
          ...storedItems,
          [podcastId]: { detail: newObject, lastFetch: Date.now() },
        };
        localStorage.setItem("storedItems", JSON.stringify(storageData));
        setIsLoadingDetails(false);
      } catch (error) {
        console.error("ERROR: " + error);
      }
    };
    const storedItemsType = localStorage.getItem("storedItems") as string;
    const storedItems = JSON.parse(storedItemsType);
    const storedItem = storedItems?.podcastId;

    if (!storedItem || Date.now() - storedItem.lastFetch > 86400000) {
      fetchData();
    } else {
      setData(storedItem.detail);
      setIsLoadingDetails(false);
    }
  }, []);

  return { data, isLoadingDetails };
};

export default useRetrieveDetails;
