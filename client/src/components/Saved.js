import JSONdata from "../data/data.json";
import Card from "./Card";
import SearchBar from "./SearchBar";
import logo from "../images/UofCLogo.png";

const Saved = () => {
  const data = JSONdata;
  const renderData = () => {
    const cards = data.data.map((values, id) => {
      // const {theme, description, bannerURL, address, attending, start, end} = values
      console.log(values);
      return <Card key={id + "data"} values={values} />;
    });

    return cards;
  };

  return (
    <div className="main">
      <SearchBar />
      <h1 className="title">Saved</h1>
      <div className="row">
        <img className="logo" src={logo} alt="Logo" />
        <h2 className="title margin-0">University of Calgary</h2>
      </div>
      <h3 className="title margin-0 center">Up & Coming</h3>
      <Card key={0 + "data"} values={data.data[1]} />

      <h3 className="title margin-0 center">Feb 24, 2023</h3>
      <Card key={0 + "data"} values={data.data[0]} />
    </div>
  );
};

export default Saved;
