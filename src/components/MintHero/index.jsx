import './MintHero.css';
import React from 'react';
import {Link} from 'react-router-dom';

function MintHero() {
  return (
    <div className="MintHero">
      <div className="MintHero__title">
        Congrationaltions you are whitlisted click below to mint
      </div>
      <Link to="/mint" style={{color: "black", textDecoration: "none"}}><div className="MintHero__button">Mint TAV</div></Link>
      <div className="MintHero__description">TAV is an expermintal project on ether testnet ask for a whitelist on discord.</div>
    </div>
  );
}

export default MintHero;
