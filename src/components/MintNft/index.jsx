import './MintNft.css';
import React from 'react';

function MintNft() {
  return (
    <div className="MintNft">
        <div className="MintNft__title">
            Mint your Isekai and<br/>start your journey
        </div>
        <em className="MintNft__subtitle">Price per mint 0.09</em>
        <div className="MintNft__button_row">
            <div className="MintNft__button">1</div>
            <div className="MintNft__button">2</div>
            <div className="MintNft__button">3</div>
            <div className="MintNft__button">4</div>
            <div className="MintNft__button">5</div>
        </div>
        <div className="MintNft__button MintNft__button_white">MINT</div>
    </div>
  );
}

export default MintNft;
