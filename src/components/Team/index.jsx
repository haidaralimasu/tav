import './Team.css';
import React from 'react';

function Team() {
  return (
    <div className="Team">
        <div className="Team__member">
            <img src={require('./james.png')} alt="James NFT" className="Team__member_image"/>
            <div className="Team__member_name">James NFT</div>
        </div>

        <div className="Team__member">
            <img src={require('./crypto.png')} alt="Crypto Otaku" className="Team__member_image"/>
            <div className="Team__member_name">Crypto Otaku</div>
        </div>

        <div className="Team__member">
            <img src={require('./imman.png')} alt="Imman" className="Team__member_image"/>
            <div className="Team__member_name highlighted_member">Imman (artist)</div>
        </div>
    </div>
  );
}

export default Team;
