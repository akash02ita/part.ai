import JSONdata from '../data/data.json'
import Card from './Card';
import SearchBar from "./SearchBar";

const Search = () => {
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
      <h1 className="title">Home</h1>
      <h2 className="title">Up And Coming</h2>
      {renderData()}
    </div>
  );
};

export default Search;