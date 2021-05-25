import React from 'react';
import CarouselItem from './CarouselItem.js'

const Carousel = ({ media }) => {
  const mediaItems = media.map(item => <CarouselItem item={item}/>)

  return (
    <div>
      {mediaItems}
    </div>
  )
};

export default Carousel;