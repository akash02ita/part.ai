import JSONdata from '../data/data.json'
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_YOUR_GMAPS_KEY;

const Event = () => {
  // extract event-name from urs parama
  const { id } = useParams();

  const [data, setData] = useState({});

  const getParty = async (partyQuery) => {
    const response = await axios.post(`/graphql`, partyQuery);
    const { data } = response.data;
    console.log(data);
    setData(data.getParty);
  };

  useEffect(() => {
    const partyQuery = {
      query: `
      {
        getParty(id: "${id}"){
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
    getParty(partyQuery);
  }, []);

  // fetch all values
  const {
    name,
    theme,
    description,
    bannerUrl,
    address,
    attending,
    startTime,
    endTime,
  } = data;

  const navigate = useNavigate();

  const renderMap = () => {
    // return map at given coord
    return (
      <iframe
        width="100%" // manual size here can be modified
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/${"place"}?key=${apiKey}&q=${address}&zoom=18`}
      ></iframe>
    );
  };

  const renderAttendance = () => {
    if (attending.length < 3) return <div></div>;
    const renderedAttending = attending.slice(0, 3).map((name, id) => (
      <div className="attending-group">
        <div className="circle" key={"cir" + id}>
          <div className="initial">{name[0]}</div>
        </div>
        <div className="attending-name">{name}</div>
      </div>
    ));
    return renderedAttending;
  };

  return (
    <div className="main">
      <div className="big-card">
        <div className="top-nav">
          <span className="title"> Details: </span>
          <span className="back" onClick={() => navigate("/")}>
            &#x3c; Back
          </span>
        </div>

        <div
          className="card"
          style={{ backgroundImage: `url(${bannerUrl})`, height: "90px" }}
        >
          <h1>{name}</h1>
        </div>
        <p>Theme: {theme}</p>
        <p>Description: {description}</p>

        <p className="event-address">
          <span className="pin">
            <FaMapMarkerAlt />
          </span>
          {address}
        </p>
        <p className="map">{renderMap()}</p>

        <h3>Who's attending:</h3>
        <div className="attending">
          {/* {renderAttendance()} */}
          <div className="circle plus" key={id}>
            {/* <div className="initial">+{+attending.length - 3}</div> */}
          </div>
        </div>
        <div className="button-container">
          <button className="join-button" onClick={() => navigate("/saved")}>
            JOIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;