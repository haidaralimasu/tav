import './Cta.css';
import React from 'react';

function Cta({backgroundImage, title, description, wide=true}) {
  return (
    <div className="Cta">
        <img src={backgroundImage} alt={title} className="Cta__background"/>
        <div className="Cta__title">{title}</div>
        <div className={`Cta__description ${wide&&"description_wide"}`}>{description}</div>
    </div>
  );
}

export default Cta;
