import JSONdata from '../data/data.json'
import Card from './Card';
import SearchBar from "./SearchBar";
import Bubbles from "./Bubbles";
import logo from "../images/UofCLogo.png";
import axios from "axios";
import { useState, useEffect } from "react";

const Search = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const partyQuery = {
      query: `
      {
        getAllParties{
          id
          name
          description
          address
          startTime
          endTime
          attending
          type
          bannerUrl
        }
      }
      `,
    };

    getParties(partyQuery);
  }, []);

  const getParties = async (partyQuery) => {
    const response = await axios.post(`graphql`, partyQuery);
    const { data } = response.data;
    console.log(data);
    setData(data.getAllParties);
  };

  const [themeFilter, setThemeFilter] = useState(null);
  console.log("Themefilter is ", themeFilter);

  const renderData = () => {
    const filteredCards = themeFilter
      ? data.filter((values) => values.theme == themeFilter)
      : data;
    console.log("Filtered events is ", filteredCards);
    const cards = filteredCards.map((values, id) => {
      // const {theme, description, bannerURL, address, attending, start, end} = values
      // console.log(values);
      return <Card key={id + "data"} values={values} />;
    });

    return cards;
  };

  return (
    <div className="main">
      <SearchBar />
      <h1 className="title">Home</h1>
      <Bubbles updateChoice={(theme) => setThemeFilter(theme)} />
      <div className="row">
        <img className="logo" src={logo} alt="Logo" />
        <h2 className="title margin-0">University of Calgary</h2>
      </div>

      {renderData()}
    </div>
  );
};

export default Search;