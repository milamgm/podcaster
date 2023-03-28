import { useEffect, useState } from "react";
import "./SearchField.scss";

const SearchField = () => {
  const [input, setInput] = useState("");

  return (
    <div className="search_field">
      <div className="badge">100</div>
      <div className="input_field">
        <input
          type="text"
          placeholder="Filter podcasts..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchField;
