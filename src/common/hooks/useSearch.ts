import { useEffect, useState } from "react";
import { useAppContext } from "../../application/context/AppContext";

const useSearch = (query: string) => {
  const { podcastsFetch } = useAppContext();
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  useEffect(() => {
    const results = podcastsFetch?.filter((entry: any) => {
      return (
        entry.title.label.toLowerCase().includes(query.toLowerCase()) ||
        entry.summary.label.toLowerCase().includes(query.toLowerCase())
      );
    }) || null;
    setFilteredPodcasts(results);
  }, [query]);

  return filteredPodcasts;
};

export default useSearch;
