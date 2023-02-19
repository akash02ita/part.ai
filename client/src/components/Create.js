import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiMapPin5Fill } from "react-icons/ri";

const Create = () => {
  const apiKey = process.env.REACT_APP_YOUR_GMAPS_KEY;
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [url, setUrl] = useState(null);
  const [address, setAddress] = useState(null);
  const [description, setDescription] = useState(null);

  const handleSubmit = () => {
    console.log("params are ", name, start, end, url, address, description);
    if (!name || !date || !start || !end || !url || !address || !description) {
      alert("Ensure all fields are filled!");
      return;
    }

    console.log("data is non-empty");
  };

  return (
    <div className="main">
      <div className="big-card">
        <div className="top-nav">
          <span className="title"> Create Event: </span>
          <span className="back" onClick={() => navigate("/")}>
            &#x3c; Back
          </span>
        </div>
        <div
          className="card create-card"
          style={{
            backgroundImage: `url(https://www.shutterstock.com/image-photo/nice-attractive-stylish-cheerful-cheery-260nw-1436812790.jpg)`,
            height: "150px",
          }}
        >
          <h1>{name}</h1>
        </div>
        <label>
          <input
            className="create-input width-100"
            type="text"
            placeholder="Name of Event"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <div className="map">
          <iframe
            width="100%" // manual size here can be modified
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/${"place"}?key=${apiKey}&q=${address}&zoom=18`}
          ></iframe>
        </div>

        <label>
          <RiMapPin5Fill className="pin-icon pin grey" />
          <input
            className="create-input width-100 input-icon"
            placeholder="Add a Location"
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>

        <label>
          <input
            className="create-input width-100 padding-right"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <div className="row width-100">
          <input
            className="create-input width-100 padding-right"
            type="time"
            onChange={(e) => setStart(e.target.value)}
          />
          <span className="dash">-</span>
          <input
            className="create-input width-100 padding-right"
            type="time"
            onChange={(e) => setEnd(e.target.value)}
          />{" "}
        </div>

        <label>
          <textarea
            placeholder="What are you going to do in your party?"
            className="create-input description"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <div className="button-container">
          <button className="join-button" onClick={() => handleSubmit()}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;