import axios from "axios";
import { useState, useEffect } from "react";
import { IEpisode } from "../../../common/types";

const useRetrieveDetails = (podcastId: string | number | symbol | any) => {
  const [isLoadingDetails, setIsLoadingDetails] = useState(true);
  const [data, setData] = useState<IEpisode[]>([]);

  useEffect(() => {
    const source = axios.CancelToken.source()

    const fetchData = async () => {
      const url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
      try {
        // Send a GET request to the iTunes API to retrieve episode details for the given podcast ID
        const response = await axios({
          method: "get",
          url: `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
          withCredentials: false,
          cancelToken: source.token
        });

        // Extract the results from the response data
        const results = JSON.parse(response.data.contents).results;

        // Map the results to a new array
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

        // Update the data state with the new array of IEpisode objects
        setData(newObject);

        // Store the data in local storage for future use
        const storageData = {
          ...storedItems,
          [podcastId]: { detail: newObject, lastFetch: Date.now() },
        };
        localStorage.setItem("storedItems", JSON.stringify(storageData));

        // Set loading status to false
        setIsLoadingDetails(false);
      } catch (error) {
        if (axios.isCancel(error)) console.log("caugth cancel")
        console.error("ERROR: " + error);
      }
    };

    // Retrieve stored items from local storage
    const storedItemsType = localStorage.getItem("storedItems") as string;
    const storedItems = JSON.parse(storedItemsType);

    // Retrieve the stored data for the given podcast ID
    const storedItem = storedItems[podcastId];

    // If there is no stored data or it has been more than a day since the last fetch, fetch the data
    if (!storedItem || Date.now() - storedItem.lastFetch > 86400000) {
     fetchData();

    } else {
      // Otherwise, use the stored data and set loading status to false
      setData(storedItem.detail);
      setIsLoadingDetails(false);
    }

    return () => source.cancel()
  }, []);

  // Return the retrieved data and loading status
  return { data, isLoadingDetails };
};

// Export the custom hook
export default useRetrieveDetails;
