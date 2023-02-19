import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Card = (props) => {
  const navigate = useNavigate();
  const [countColor, setCountColor] = useState([0, 0, 0]);
  const {
    id,
    name,
    theme,
    description,
    bannerURL,
    address,
    date,
    attending,
    start,
    end,
  } = props.values;

  const calcCountColor = (count) => {
    if (count < 20) {
      return [0, 0, 255];
    } else if (count < 50) {
      return [255, 165, 0];
    } else {
      return [255, 83, 73];
    }
  };

  useEffect(() => {
    setCountColor(calcCountColor(attending.length));
  }, [attending]);

  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${bannerURL})` }}
      onClick={() => {
        navigate("/search/" + id);
      }}
    >
      <h1 className="card-name text-shadow">{name}</h1>
      <div className="card-details">
        <h2 className="m-0 text-shadow">
          {date}, {start}-{end}
        </h2>
        <h2
          className="m-0 text-shadow"
          style={{ color: `rgb(${countColor[0]}, 40, ${countColor[2]})` }}
        >
          {attending.length > 50 && <span className="emoji">🔥</span>}
          {attending.length}
        </h2>
      </div>
    </div>
  );
};

export default Card