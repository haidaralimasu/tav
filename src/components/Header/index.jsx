import './Header.css';
import React from 'react';
import OpenseaLogo from './opensea.svg';
import DiscordLogo from './discord.svg';
import YoutubeLogo from './youtube.png';
import TwitterLogo from './twitter.svg';

function Header() {
  return (
    <div className="Header">
        <div className="Header__left">
            <div className="Header__item">Home</div>
            <div className="Header__item Header__item_active">Project1</div>
            <div className="Header__item">Project2</div>
        </div>
        <div className="Header__right">
          <img src={OpenseaLogo} alt="OpenSea" class="Header__item_logo"/>
          <img src={DiscordLogo} alt="Discord" class="Header__item_logo" style={{width: "40px", height: "40px", padding: "5px"}}/>
          <img src={YoutubeLogo} alt="Youtube" class="Header__item_logo_transparent"/>
          <img src={TwitterLogo} alt="Twitter" class="Header__item_logo" style={{width: "40px", height: "40px", padding: "5px"}}/>
          
        </div>
    </div>
  );
}

export default Header;