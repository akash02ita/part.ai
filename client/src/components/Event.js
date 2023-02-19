import JSONdata from '../data/data.json'
import Geocode from "react-geocode";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const apiKey = process.env.REACT_APP_YOUR_GMAPS_KEY;
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(apiKey);
Geocode.enableDebug();

const Event = () => {
    const data = JSONdata;
    // extract event-name from urs parama
    const { name } = useParams();
    // fetch all values
    const { theme, description, bannerURL, address, attending, start, end } = data[name];

    const [coord, setCoord] = useState(null);
    useEffect(() => {
        if (!address) {console.log("Address is null skipping it"); return;}
        Geocode.fromAddress(address).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(`Found coordinates for address ${address}:`, lat, lng);
                setCoord([lat, lng]);
            },
            (error) => {
                console.error(error);
                console.log(`NO coordinates for address ${address}:`);
            }
        )
    }, [address])


    const renderMap = () => {
        if (!coord) {
            console.log("Coordinates not found so no map will be rendered");
            return <></>
        }

        // return map at given coord
    }

    return (
        <div> Event component </div>
    );
}

export default Event;