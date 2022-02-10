import Hero from '../components/Hero';
import Info from '../components/Info';
import Video from '../components/Video';
import Cta from '../components/Cta';
import InfoImage from '../components/Info/info_image.png';
import InfoImage2 from '../components/Info/info_image_2.png';
import RarityLogo from '../components/Info/rarity.png';
import CtaBg1 from '../components/Cta/background1.png';
import CtaBg2 from '../components/Cta/background2.png';
import Team from '../components/Team';
import Header from '../components/Header'
import Footer from '../components/Footer'

import React, {useState} from 'react';

function Homepage() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
        <Hero/>
        <Info title="Isekai (ISK)" image={InfoImage}>
        <p>Isekai is a collection of artwork consisting of Japanese anime characters, of which each represents an Isekai Protagonist/Antagonist, Isekai artworks are influenced by famous anime beloved by millions like Attack on Titans, Demon Slayer, HXH & many more.</p>
        <p>The collection is on Ethereum main chain & less than 5000 NFT can ever be produced, almost 200 different treats have been created in order to create a comprehensive rarity ranking, & you are able to check your NFT ranking through famous websites like Rarity Sniper.</p>
        <p>Isekai have four main DNA which are Human, Martian, Ice Zombie & Mao (Devils). In addition to the unique art, there is a crypto chess game where Isekai can have additional utilities.</p>
        <div className="Info__cta_row">
            <img src={RarityLogo} alt="Rarity" className="Info__cta_img"/>
            Rarity Sniper
        </div>
        <a href="https://raritysniper.com/isekai-by-prestige-lab">https://raritysniper.com/isekai-by-prestige-lab</a>
        </Info>
        <Video/>
        <Cta title="Teenage Superhero" backgroundImage={CtaBg1} description="A free airdropped NFT for the prestige community on the polygon network, as of now there is no plan to further develop the collection. Nevertheless it remain a cool NFT that may make the owner eligible for future whitelist and airdrop"/>
        <Info title="The art of Value (TAV)" image={InfoImage2} sideTitle={true}>
        <p>While this project is a thank you to many talented artists, it is mainly around a smart contract that will preserve and add to the value of the art.</p>
        <p>Owning art is inherently risky as an investment and chances are the value of that art is more likely to go down than up, especially in a bear market or an extended market cool-off. But not the case with TAV. TAV has a build-in floor price that can only go up. When you pay to mint an artwork you are paying a deposit, that you will get back and more when you decide that you want to cash it out.</p>
        <p>The economy of TAV is designed in a way that makes the reserve fund of each artwork impossible to be reduced.</p>
        </Info>
        <Cta wide title="Prestige Protocol" backgroundImage={CtaBg2} description="An ambitious project, it is a plan to create an NFT ecosystem that is based on real life use case and with a valuation module that is sustainable and unique. As of now, we do not have an official whitepaper for the protocol"/>
        <Team />
        <Footer/>
    </div>
  );
}

export default Homepage;
