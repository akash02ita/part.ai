import JSONdata from '../data/data.json'
import Card from './Card';


const Search = () => {
    const data = JSONdata;
    
    const renderData = () => {
        const cards = Object.entries(data).map( ([name, values], id) => {
            // const {theme, description, bannerURL, address, attending, start, end} = values
            return <Card key={id} name={name} values={values}/>
        });

        return cards;
    }

    return (
        <>
            {renderData()}
        </>
    );
}

export default Search;