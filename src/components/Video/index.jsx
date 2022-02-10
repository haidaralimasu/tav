import './Video.css';
import React from 'react';
import Placeholder from './placeholder.png';

function Video() {
  return (
    <div className="Video">
        <div className="Video__title">You can see the Background <br />story of the Isekai here:</div>
        <img className="Video__placeholder" src={Placeholder} alt="" />
    </div>
  );
}

export default Video;
