import JSONdata from '../data/data.json'
import Geocode from "react-geocode";
import { useParams } from 'react-router-dom';
import Card from './Card';

const apiKey = process.env.REACT_APP_YOUR_GMAPS_KEY;
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(apiKey);
Geocode.enableDebug();

const Event = () => {
    const data = JSONdata;
    // extract event-name from urs parama
    const { name } = useParams();
    // fetch all values
    const values = data[name];
    const { theme, description, bannerURL, address, attending, start, end } = values;

    const renderMap = () => {
        // return map at given coord
        return <iframe
            width="300" // manual size here can be modified
            height="225" // manual size here can be modifed
            style={{border:0}}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/${"place"}?key=${apiKey}&q=${address}`}>
        </iframe>
    }

    const renderAttendance = () => {
        const renderedAttending = attending.map(((name, id) => <div key={id}>{name}</div>));
        return <div> {renderedAttending} </div>
    }

    return (
        <>
            <h1> Details </h1>
            {/* <div className='card' style={{backgroundImage: `url(${bannerURL})`}}></div> */}
            <Card name={name} values={values} />
            <div>Description: {description}</div>
            <div>Theme: {theme}</div>
            <div className='event-address'>{address}</div>
            {renderMap()}
            <h3>Who's attending</h3>
            {renderAttendance()}

            <button>JOIN</button>
        </>
    );
}

export default Event;