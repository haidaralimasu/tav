import React, {useState} from 'react';
import MintNft from '../components/MintNft';
import background from './bg.png';
import Header from '../components/Header'
import Footer from '../components/Footer'


function Mintpage() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
      <MintNft/>
      <Footer/>
    </div>
  );
}

export default Mintpage;
