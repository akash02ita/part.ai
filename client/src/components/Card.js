import React from 'react'


const Card = (props) => {
  const name = props.name;
  const { theme, description, bannerURL, address, attending, start, end } = props.values;
  return (
    <div className="card" style={{backgroundImage: `url(${bannerURL})`}}>
      <div>Event name: {name}</div>

      {/* <img src={bannerURL} /> */}

      <div>Address: {address}</div>
      <div>{attending.length}</div>

      <div>
        <div> Starts {start} </div>
        <div> Ends {start} </div>
      </div>
    </div>
  )
}

export default Card