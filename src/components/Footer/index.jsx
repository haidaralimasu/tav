import './Footer.css';
import React from 'react';
import logo from './logo.png';
import background from './background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import youtube from './youtube.svg';

function Footer() {
  return (
    <div className="Footer">
        <img src={background} alt="Footer Background" className="Footer__background"/>
        <img src={logo} alt="Prestige Logo" className="Footer__logo"/>
        <div className="Footer__row">
            <div className="Footer__column">
                <div className="Footer__column_title">OUR <span className="Footer__highlighted_text">LINKS</span></div>
                <div className="Footer__column_item" style={{marginLeft: "10px"}}>Home</div>
                <div className="Footer__column_item" style={{marginLeft: "10px"}}>Project1</div>
                <div className="Footer__column_item" style={{marginLeft: "10px"}}>Project2</div>
            </div>
            <div className="Footer__column">
                <div className="Footer__column_title">CONTACT <span className="Footer__highlighted_text">US</span></div>
                <div className="Footer__column_item"><FontAwesomeIcon icon={faLocationDot} /> <span className="Footer__column_item_text">161222 Collins Street West Victoria <br />8265 Australia</span></div>
                <div className="Footer__column_item"><FontAwesomeIcon icon={faPhone} /> <span className="Footer__column_item_text">+7 (495) 737-01-01</span></div>
                <div className="Footer__column_item"><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:hello.me@nft.com" className="Footer__column_item_text">hello.me@nft.com</a></div>

            </div>
            <div className="Footer__column">
                <div className="Footer__column_title">GET <span className="Footer__highlighted_text">IN TOUCH</span></div>
                <div className="Footer__column_item"><img src={facebook} alt="Facebook" className="Footer__icon"/> <span className="Footer__column_item_text">Facebook</span></div>
                <div className="Footer__column_item"><img src={twitter} alt="Twitter" className="Footer__icon"/> <span className="Footer__column_item_text">Twitter</span></div>
                <div className="Footer__column_item"><img src={youtube} alt="Youtube" className="Footer__icon"/> <span className="Footer__column_item_text">Youtube</span></div>
            </div>
        </div>
        <div className="Footer__copyright">
            Copyright © 2022. All Right Reserved.
        </div>
    </div>
  );
}

export default Footer;
