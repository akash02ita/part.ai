import JSONdata from '../data/data.json'
import Card from './Card';
import SearchBar from "./SearchBar";

const Search = () => {
  const data = JSONdata;
  const renderData = () => {
    const cards = Object.entries(data).map(([name, values], id) => {
      // const {theme, description, bannerURL, address, attending, start, end} = values
      return <Card key={id} name={name} values={values} />;
    });

    return cards;
  };

  return (
    <div className="main">
      <SearchBar />
      <h1 className="title">Home</h1>

      {renderData()}
    </div>
  );
};

export default Search;