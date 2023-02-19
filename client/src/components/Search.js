import JSONdata from '../data/data.json'
import Card from './Card';
import SearchBar from "./SearchBar";
import Bubbles from "./Bubbles";
import logo from "../images/UofCLogo.png";
import { useState } from 'react';

const Search = () => {
  const data = JSONdata;
  const [themeFilter, setThemeFilter] = useState(null);
  console.log("Themefilter is ", themeFilter);

  const renderData = () => {
    const filteredCards = themeFilter ? data.data.filter(values => values.theme == themeFilter) : data.data;
    console.log("Filtered events is ", filteredCards);
    const cards = filteredCards.map((values, id) => {
      // const {theme, description, bannerURL, address, attending, start, end} = values
      // console.log(values);
      return <Card key={id + "data"} values={values}/>;
    });

    return cards;
  };

  return (
    <div className="main">
      <SearchBar />
      <h1 className="title">Home</h1>
      <Bubbles updateChoice={(theme) => setThemeFilter(theme)}/>
      <div className="row">
        <img className="logo" src={logo} alt="Logo" />
        <h2 className="title margin-0">University of Calgary</h2>
      </div>

      {renderData()}
    </div>
  );
};

export default Search;