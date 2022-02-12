import "./Header.css";
import React from "react";
import OpenseaLogo from "./opensea.svg";
import DiscordLogo from "./discord.svg";
import YoutubeLogo from "./youtube.png";
import TwitterLogo from "./twitter.svg";
import HamburgerMenu from "react-hamburger-menu";
import DiscordWhite from "./discord_white.svg";
import TwitterWhite from "./twitter_white.svg";
import SlidingPanel from "react-sliding-side-panel";
import { Link } from "react-router-dom";

function Header({ navbarOpen, setNavbarOpen }) {
  return (
    <>
      <HamburgerMenu
        isOpen={navbarOpen}
        menuClicked={() => setNavbarOpen((old) => !old)}
        width={18}
        height={15}
        strokeWidth={3}
        rotate={0}
        color="white"
        borderRadius={0}
        animationDuration={0.5}
        className="Header__hamburger"
      />
      <div className="Header">
        <SlidingPanel type={"left"} isOpen={navbarOpen} size={60}>
          <div className="Sidebar">
            <HamburgerMenu
              isOpen={navbarOpen}
              menuClicked={() => setNavbarOpen((old) => !old)}
              width={18}
              height={15}
              strokeWidth={3}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.5}
              className="Sidebar__hamburger"
            />
            <div className="SidebarItems">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <div className="SidebarItem">Home</div>
              </Link>
              <Link to="/mint" className="SidebarItem">
                Isekai
              </Link>
              <Link to="/burn" className="SidebarItem">
                TAV
              </Link>
              <div className="SidebarItem">
                <img
                  src={OpenseaLogo}
                  alt=""
                  style={{ width: "20px", marginRight: "10px" }}
                />
                OpenSea
              </div>
              <div className="SidebarItem">
                <img
                  src={DiscordWhite}
                  alt=""
                  style={{ width: "20px", marginRight: "10px" }}
                />
                Discord
              </div>
              <div className="SidebarItem">
                <img
                  src={YoutubeLogo}
                  alt=""
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    objectFit: "contain",
                  }}
                />
                Youtube
              </div>
              <div className="SidebarItem">
                <img
                  src={TwitterWhite}
                  alt=""
                  style={{ width: "20px", marginRight: "10px" }}
                />
                Twitter
              </div>
            </div>
          </div>
        </SlidingPanel>

        <div className="Header__left">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <div className="Header__item">Home</div>
          </Link>
          <Link to="/mint" className="Header__item Header__item">
            Isekai
          </Link>
          <Link to="/burn" className="Header__item">
            TAV
          </Link>
        </div>
        <div className="Header__right">
          <a href="https://opensea.io/collection/isekaibyprestige">
            <img
              src={OpenseaLogo}
              alt="OpenSea"
              className="Header__item_logo"
            />
          </a>
          <a href="http://discord.gg/6CcbZpHTng">
            <img
              src={DiscordLogo}
              alt="Discord"
              className="Header__item_logo"
              style={{ width: "40px", height: "40px", padding: "5px" }}
            />
          </a>
          <a href="https://www.youtube.com/channel/UC7LNw1x46FJGkaiew5ptdvg">
            <img
              src={YoutubeLogo}
              alt="Youtube"
              className="Header__item_logo_transparent"
            />
          </a>
          <a href="https://twitter.com/PrestigeDef">
            <img
              src={TwitterLogo}
              alt="Twitter"
              className="Header__item_logo"
              style={{ width: "40px", height: "40px", padding: "5px" }}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
