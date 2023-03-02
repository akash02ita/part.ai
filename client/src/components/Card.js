import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaEllipsisV } from "react-icons/fa";
import Moment from "react-moment";
import moment from "moment";

const Card = (props) => {
  const navigate = useNavigate();
  const [countColor, setCountColor] = useState([0, 0, 0]);
  const {
    id,
    name,
    theme,
    description,
    bannerUrl,
    address,
    date,
    attending,
    startTime,
    endTime,
  } = props.values;

  const calcCountColor = (count) => {
    if (count < 20) {
      return [255, 255, 255];
    } else if (count < 50) {
      return [255, 165, 0];
    } else {
      return [255, 83, 73];
    }
  };

  const getTimeRange = () => {
    return (
      moment(startTime).local().format("MMM D, h:mm A") +
      "-" +
      moment(endTime).local().format("h:mm A")
    );
  };

  useEffect(() => {
    setCountColor(calcCountColor(attending.length));
  }, [attending]);

  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${bannerUrl})` }}
      onClick={() => {
        navigate("/search/" + id);
      }}
    >
      <div className="row space-between">
        <h1 className="card-name text-shadow">{name}</h1>
        <FaEllipsisV className="elipsis" />
      </div>

      <div className="card-details">
        <h2 className="m-0 text-shadow">{getTimeRange()}</h2>
        <h2
          className="m-0 text-shadow"
          style={{
            color: `rgb(${countColor[0]}, ${countColor[1]}, ${countColor[2]})`,
          }}
        >
          {attending.length > 50 && <span className="emoji">🔥</span>}
          {attending.length}
        </h2>
      </div>
    </div>
  );
};

export default Card