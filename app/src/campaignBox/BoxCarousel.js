import React from 'react';
import CarouselItem from './CarouselItem.js'
import Carousel, { slidesToShowPlugin, offset } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const BoxCarousel = ({ media }) => {
  const mediaItems = media.map(item => <CarouselItem item={item}/>)

  return (
    <Carousel plugins={['arrows',{
      resolve: slidesToShowPlugin,
      options: {
       numberOfSlides: 2
      }
    }, ]}>
      {mediaItems}
    </Carousel>
  )
};

export default BoxCarousel;