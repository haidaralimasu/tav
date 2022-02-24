import './Hero.css';
import React from 'react';
import Background from './background.png';
import ChessIcon from './chessicon.png';
import PlayIcon from './play.png';
import {Link} from 'react-router-dom';

function Hero() {
  return (
    <div className="Hero">
        <img src={Background} className="Hero__background" alt="" />
        <div className="Hero__title_section">
            <div className="Hero__title_border_left" />
            <div className="Hero__title">Start your prestige<br />NFT<br />collection with us</div>
            <div className="Hero__title_border_right" />
        </div>
        <div className="Hero__button_row">
            <div className="Hero__button" style={{marginRight: "20px"}}>
                <img src={ChessIcon} className="Hero__button_icon" alt="Chess" />
                <a href="https://www.teenagehero.fun/" style={{color:"black", textDecoration:"none"}} target="blank" >Play Chess Game</a>
            </div>
            <Link to="/burn" style={{color: "black", textDecoration: "none"}}><div className="Hero__button white_button">
                <img src={PlayIcon} className="Hero__button_icon" alt="Play" style={{width: "17px"}}/>
                Go to App
            </div>
            </Link>
        </div>
    </div>
  );
}

export default Hero;
