import { useEffect, useState } from "react";
import { useAppContext } from "../../../application/context/AppContext";
import useSearch from "../../hooks/useSearch";
import "./SearchField.scss";

const SearchField = () => {
  const { setDisplayPodcasts } = useAppContext();
  const [query, setQuery] = useState("");
  const filteredPodcasts = useSearch(query);
  const podcastsQty = filteredPodcasts.length
  useEffect(()=> {
    setDisplayPodcasts(filteredPodcasts)
  },[filteredPodcasts])
  
  return (
    <div className="search_field">
      <div className="badge">{podcastsQty}</div>
      <div className="input_field">
        <input
          type="text"
          placeholder="Filter podcasts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchField;
