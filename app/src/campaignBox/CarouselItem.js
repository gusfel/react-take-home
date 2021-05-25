import React from 'react';

const CarouselItem = ({ item }) => {
  return (
    <div >
      <div className="carouselImage">
        {item.media_type === 'video' ?
        <div className="videoIcon">
          <i className="fas fa-play"></i>
        </div>
        :<></>}
        <div>
          <img alt="" className="carImg" src={item.cover_photo_url}></img>
        </div>
      </div>
      <div className="carLinks">
        <div className="link" onClick={() => {navigator.clipboard.writeText(item.tracking_link)}}>
          <i className="fas fa-link"></i>
        </div>
        <div className="download">
          <a href={item.download_url} download>
            <i className="download fas fa-download"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem;