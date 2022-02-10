import React from 'react';
import MintNft from '../components/MintNft';
import background from './bg.png';

function Mintpage() {
  return (
    <div>
      <img src={background} style={{position: 'absolute', width: "100vw", top: 0, left: 0, zIndex: -1, height: "175vh"}}/>
      <MintNft/>
    </div>
  );
}

export default Mintpage;
