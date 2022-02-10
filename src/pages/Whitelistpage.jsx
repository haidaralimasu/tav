import React from 'react';
import Whitelist from '../components/Whitelist';
import background from './bg.png';

function Whitelistpage() {
  return (
    <div>
      <img src={background} style={{position: 'absolute', width: "100vw", top: 0, left: 0, zIndex: -1, height: "160vh"}}/>
      <Whitelist/>
    </div>
  );
}

export default Whitelistpage;
