import { useState, useEffect } from "react";
import axios from "axios";
import { IPodcast } from "../../../common/types";


const useRetrieveData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IPodcast[]>([]);

  useEffect(() => {
    const source = axios.CancelToken.source()

    const fetchData = async () => {
      try {
        // Retrieve data from API
        const response = await axios.get(
          "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
          { cancelToken: source.token }
        );
        const results = response.data.feed.entry;
        // Parse retrieved data and update state
        let podcastsArr: IPodcast[] = [];
        results.forEach((podcast: any) => {
          podcastsArr = [
            ...podcastsArr,
            {
              id: podcast.id.attributes["im:id"],
              title: podcast.title.label,
              author: podcast["im:artist"].label,
              image: podcast["im:image"][1].label,
              description: podcast.summary.label,
            },
          ];
        });
        setData(podcastsArr);
        
        // Store retrieved data in local storage for later use
        localStorage.setItem("apiData", JSON.stringify(podcastsArr));
        localStorage.setItem("lastFetch", `${Date.now()}`);
        setIsLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) console.log("caugth cancel")
        console.error("ERROR: " + error);
      }
    };

    // Check if data has been fetched before and use cached data if possible
    const localSLastFetchType = localStorage.getItem("lastFetch") as string;
    const lastFetch = JSON.parse(localSLastFetchType);
    if (!lastFetch || Date.now() - lastFetch > 86400000) {
      fetchData();
    } else {
      const localSApiDataType = localStorage.getItem("apiData") as string;
      const storedData = JSON.parse(localSApiDataType);
      setData(storedData);
      setIsLoading(false);
    }

    return () => source.cancel()
  }, []);

  return { data, isLoading };
};

export default useRetrieveData;
