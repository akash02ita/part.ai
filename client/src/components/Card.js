import React from 'react'


const Card = (props) => {
  const name = props.name;
  const { theme, description, bannerURL, address, attending, start, end } = props.values;
  return (
    <div className="card" style={{ backgroundImage: `url(${bannerURL})` }}>
      <h1>{name}</h1>

      {/* <img src={bannerURL} /> */}

      <div>
        <div>Starts {start} </div>
        <div>Ends {start} </div>
      </div>
      <div>{attending.length}</div>
    </div>
  );
}

export default Card