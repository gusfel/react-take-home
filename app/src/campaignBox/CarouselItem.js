import React from 'react';

const CarouselItem = ({ item }) => {
  return (
    <div>
      <div>
        <img className="carImg" src={item.cover_photo_url}></img>
      </div>
      <div>
        <div>
          <i class="fas fa-link"></i>
        </div>
        <div>
          <i class="fas fa-download"></i>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem;