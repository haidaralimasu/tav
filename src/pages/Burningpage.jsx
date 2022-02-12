import React, { useState } from "react";
import ChooseArt from "../components/ChooseArt";
import MintHero from "../components/MintHero";
import background from "./bg.png";
import art1 from "../components/ChooseArt/art1.png";
import art2 from "../components/ChooseArt/art2.png";
import art3 from "../components/ChooseArt/art3.png";
import art4 from "../components/ChooseArt/art4.png";
import BurnNft from "../components/BurnNft";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChainId, DAppProvider } from "@usedapp/core";

const config = {
  readOnlyChainId: ChainId.Rinkeby,
  readOnlyUrls: {
    [ChainId.Rinkeby]:
      "https://rinkeby.infura.io/v3/70ced43c56d248f18566ebe01e2d9fbe",
  },
  supportedChains: [ChainId.Rinkeby],
};

function Burningpage() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const artList = [
    { id: 11, image: art1 },
    { id: 111, image: art2 },
    { id: 12, image: art3 },
    { id: 999, image: art4 },
  ];
  const [selectedArt, setSelectedArt] = useState(0);
  return (
    <DAppProvider config={config}>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <MintHero />
        <ChooseArt
          artList={artList}
          selectedArt={selectedArt}
          setSelectedArt={setSelectedArt}
        />
        <BurnNft artList={artList} selectedArt={selectedArt} />
        <Footer />
      </div>
    </DAppProvider>
  );
}

export default Burningpage;
