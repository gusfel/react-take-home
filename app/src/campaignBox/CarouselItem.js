import React from 'react';

const CarouselItem = ({ media }) => {
  return (
    <div>
      <div>
        <img className="carImg" src={media.cover_photo_url}></img>
      </div>
      <div></div>
    </div>
  )
}

export default CarouselItem;