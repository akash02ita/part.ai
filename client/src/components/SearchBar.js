import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="search-bar-group">
      <FaSearch className="search-icon" />
      <input className="search-bar" placeholder="Search for parties" />
    </div>
  );
};

export default SearchBar;
