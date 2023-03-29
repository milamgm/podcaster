import { useState, useEffect } from "react";
import axios from "axios";

const useRetrieveData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
        const results = response.data.feed.entry;
        setData(results);
        localStorage.setItem("apiData", JSON.stringify(results));
        localStorage.setItem("lastFetch", Date.now());
        setIsLoading(false);
      } catch (error) {
        console.error("ERROR: " + error);
      }
    };

    const lastFetch = JSON.parse(localStorage.getItem("lastFetch"));
    if (!lastFetch || Date.now() - lastFetch > 86400000) {
      fetchData();
    } else {
      const storedData = JSON.parse(localStorage.getItem("apiData"));
      setData(storedData);
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading };
};

export default useRetrieveData;
