import { useState, useEffect } from "react";
import axios from "axios";

const useRetrieveDetails = (podcastId : string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

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
        setData(results);
        const storageData = {
          ...storedItems,
          [podcastId]: {detail: results,
          lastFetch: Date.now()}
        }
        localStorage.setItem(
          "storedItems",
          JSON.stringify(storageData)
        );
        setIsLoading(false);
      } catch (error) {
        console.error("ERROR: " + error);
      }
    };
    const storedItems = JSON.parse(
      localStorage.getItem("storedItems")
    );
    const storedItem = storedItems?.podcastId

    if (!storedItem || Date.now() - storedItem.lastFetch > 86400000) {
      fetchData();
    } else {
      setData(storedItem.detail);
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading };
};

export default useRetrieveDetails;

/* import { useState, useEffect } from "react";
import axios from "axios";

const useRetrieveDetails = (podcastId) => {
  const [isLoading, setIsLoading] = useState(
    localStorage.getItem(`${podcastId}DetailFetch`) ||
      localStorage.getItem(`${podcastId}DetailLastFetch`)
      ? false
      : true
  );

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(`${podcastId}DetailFetch`)) || null
  );
  const [lastFetch, setLastFetch] = useState(
    JSON.parse(localStorage.getItem(`${podcastId}DetailLastFetch`)) || null
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      axios({
        method: "get",
        url: `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
        withCredentials: false,
        params: {
          access_token: "https://allorigins.win",
        },
      })
        .then((response) => {
          const results = response.data.results;
          localStorage.setItem(
            `${podcastId}DetailFetch`,
            JSON.stringify(results)
          );
          localStorage.setItem(`${podcastId}DetailLastFetch`, Date.now());
          setData(results);
          setLastFetch(Date.now());
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log("ERROR: " + error);
          setError(true);
          return Promise.reject(error);
        });
    };

    if (!data || !lastFetch || Date.now() - lastFetch > 86400000) {
      fetchData();
    }
  }, []);
  console.log(isLoading);
  return data;
};

export default useRetrieveDetails;
 */
