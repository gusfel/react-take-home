import React from 'react';
import CarouselItem from '/.CarouselItem.js'

const Carousel = ({ media }) => {
  const mediaItems = media.map(image => <CarouselItem image={image}/>)
  return (
    <div>
      {mediaItems}
    </div>
  )
};

export default Carousel;