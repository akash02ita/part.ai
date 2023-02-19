import React from 'react'


const Card = ({data}) => {

    const {name} = data;
  return (
    <div className='card'>
        <h1>{name}</h1>
    </div>
  )
}

export default Card