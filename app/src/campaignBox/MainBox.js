import React from 'react';
import BoxTop from './BoxTop.js'
import BoxCarousel from './BoxCarousel.js'

const MainBox = ({ campaign }) => {
  return (
    <div>
      <BoxTop
        photo={campaign.campaign_icon_url}
        name={campaign.campaign_name}
        rate={campaign.pay_per_install}
      />
      <BoxCarousel media={campaign.medias}/>
    </div>
  )
}

export default MainBox