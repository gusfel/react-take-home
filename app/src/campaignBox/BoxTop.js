import React from 'react';

const BoxTop = ( {photo, name, rate} ) => {
  return (
    <div>
      <img className="campaignIcon" src={photo}></img>
      <span>{name}</span>
      <span>{rate}</span>
    </div>
  )
}


export default BoxTop;