import './Info.css';
import React from 'react';
import InfoImage from './info_image.png';
import RarityLogo from './rarity.png';

function Info({title, image, children, sideTitle=false}) {
  return (
    <div className="Info">
        {!sideTitle&&<div className="Info__title title__center">{title}</div>}
        <div className="Info__row">
            <img src={image} alt={title} className={sideTitle?"Info__image_2":""}/>
            <div className="Info__content">
              {sideTitle && <div className="Info__title" >{title}</div>}
              {children}
            </div>
        </div>
    </div>
  );
}

export default Info;
