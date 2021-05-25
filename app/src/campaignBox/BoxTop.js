import React from 'react';

const BoxTop = ( {photo, name, rate} ) => {
  return (
    <div className="boxTop">
      <img className="campaignIcon" src={photo}></img>
      <div className="campaignInfo">
        <div><span className="campTitle">{name}</span></div>
        <div className="campRate"><span className="campRateB">{rate}</span> per install</div>
      </div>
    </div>
  )
}


export default BoxTop;