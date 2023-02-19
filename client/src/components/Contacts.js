import JSONdata from "../data/data.json";
import Card from "./Card";
import SearchBar from "./SearchBar";
import logo from "../images/UofCLogo.png";

const Search = () => {
  const data = JSONdata;
  const renderData = () => {
    const cards = data.data.map((values, id) => {
      // const {theme, description, bannerURL, address, attending, start, end} = values
      return <Card key={id + "data"} values={values} />;
    });

    return cards;
  };

  return (
    <div className="main">
      <SearchBar />
      <h1 className="title">Contacts</h1>
      <div className="row contact-details">
        <img className="logo" src={logo} alt="Logo" />
        <div className="circle ryan-pang" key={0}>
          <div className="initial"></div>
        </div>

        <h4 className="margin-0">Ryan is attending this party</h4>
      </div>
      <Card key={0 + "data"} values={data.data[0]} />
      <h5 className="margin-0 contact-details-2">
        Steven +3 other contacts are also attending this party
      </h5>

      <Card key={1 + "data"} values={data.data[1]} />
    </div>
  );
};

export default Search;
