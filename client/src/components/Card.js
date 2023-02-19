import React from 'react'


const Card = (props) => {
  const name = props.name;
  const {
    theme,
    description,
    bannerURL,
    address,
    date,
    attending,
    start,
    end,
  } = props.values;
  return (
    <div className="card" style={{ backgroundImage: `url(${bannerURL})` }}>
      <h1 className="card-name">{name}</h1>
      <div className="card-details">
        <h1 className="m-0">
          {date}, {start}-{end}
        </h1>
        <h2 className="m-0">{attending.length}</h2>
      </div>
    </div>
  );
}

export default Card