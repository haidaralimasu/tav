import React, {useState} from 'react';
import Whitelist from '../components/Whitelist';
import background from './bg.png';
import Header from '../components/Header'
import Footer from '../components/Footer'
function Whitelistpage() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
      <Whitelist/>
      <Footer/>
    </div>
  );
}

export default Whitelistpage;
