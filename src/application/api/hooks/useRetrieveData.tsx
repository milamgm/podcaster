import { useState, useEffect } from "react";
import axios from "axios";
import { IPodcast } from "../../../common/types";

const useRetrieveData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IPodcast[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
        );
        const results = response.data.feed.entry;
        console.log(results);
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
        localStorage.setItem("apiData", JSON.stringify(podcastsArr));
        localStorage.setItem("lastFetch", `${Date.now()}`);
        setIsLoading(false);
      } catch (error) {
        console.error("ERROR: " + error);
      }
    };
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
  }, []);

  return { data, isLoading };
};

export default useRetrieveData;
