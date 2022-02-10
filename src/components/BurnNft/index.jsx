import './BurnNft.css';
import React from 'react';

function BurnNft({selectedArt, artList}) {
  return (
    <div className="BurnNft">
        <div className="BurnNft__title">Burn the NFT and Get the Compensation</div>
        <div className="BurnNft__row">
            <img src={artList[1].image} alt={artList[1].id} className="BurnNft__largeImg"/>
            <div className="BurnNft__column">
                <div className="BurnNft__column_title">Selected NFT</div>
                <div className="BurnNft__column_subtitle">You will get 0.01 ETH</div>
                <div className="BurnNft__row">
                    <div>
                        <img src={artList[selectedArt].image} alt={artList[selectedArt].id} className="BurnNft__smallImg"/>
                        <div className="BurnNft__button">Burn</div>
                    </div>
                    <div className="BurnNft__id">TAV #{artList[selectedArt].id}</div>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default BurnNft;
