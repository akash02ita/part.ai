import JSONdata from '../data/data.json'
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const apiKey = process.env.REACT_APP_YOUR_GMAPS_KEY;

const Event = () => {
  const data = JSONdata;
  // extract event-name from urs parama
  const { id } = useParams();
  // fetch all values
  const values = data.data[id];
  const {
    name,
    theme,
    description,
    bannerURL,
    address,
    attending,
    start,
    end,
  } = values;

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
          style={{ backgroundImage: `url(${bannerURL})`, height: "90px" }}
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
          {renderAttendance()}
          <div className="circle plus" key={id}>
            <div className="initial">+{+attending.length - 3}</div>
          </div>
        </div>
        <div className="button-container">
          <button className="join-button" onClick={()=>navigate("/saved")}>JOIN</button>
        </div>
      </div>
    </div>
  );
};

export default Event;