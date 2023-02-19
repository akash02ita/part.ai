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

    return (
        <>
            <div> Event component </div>
            {renderMap()}
        </>
    );
}

export default Event;