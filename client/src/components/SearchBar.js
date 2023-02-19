import React from "react";
import { FaSearch } from "react-icons/fa";
import {ReactComponent as ReactLogo}from "../images/Subtract.svg"

const SearchBar = () => {
  return (
    <div className="row">
      <ReactLogo className="logo pt-logo"/>
      <div className="search-bar-group width-100">
      <FaSearch className="search-icon" />
      <input className="search-bar" placeholder="Find parties near you!" />
    </div>
    </div>
    
  );
};

export default SearchBar;
