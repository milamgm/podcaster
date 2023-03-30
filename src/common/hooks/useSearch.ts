import { useEffect, useState } from "react";
import { useAppContext } from "../../application/context/AppContext";
import { IPodcast } from "../types";

const useSearch = (query: string) => {
  const { podcastsFetch } = useAppContext();
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  // Filters podcasts based on a query
  useEffect(() => {
    const results = podcastsFetch?.filter((entry: IPodcast) => {
      return (
        entry.title.toLowerCase().includes(query.toLowerCase()) ||
        entry.description.toLowerCase().includes(query.toLowerCase())
      );
    }) || null;
    setFilteredPodcasts(results);
  }, [query]);

  return filteredPodcasts;
};

export default useSearch;
