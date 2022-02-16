import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { search } from "./font/FontGlobal";

const SearchCountry: React.FC = () => {
  return (
    <form>
      <input
        className="newTodo-input"
        type="text"
        placeholder="Search Country..."
      />
      <button type="submit">
        <FontAwesomeIcon icon={search} />
      </button>
    </form>
  );
};

export default SearchCountry;
