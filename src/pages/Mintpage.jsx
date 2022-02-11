import React, { useState } from "react";
import MintNft from "../components/MintNft";
import background from "./bg.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChainId, DAppProvider } from "@usedapp/core";

const config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]:
      "https://mainnet.infura.io/v3/70ced43c56d248f18566ebe01e2d9fbe",
  },
  supportedChains: [ChainId.Mainnet],
};

function Mintpage() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <DAppProvider config={config}>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <MintNft />
        <Footer />
      </div>
    </DAppProvider>
  );
}

export default Mintpage;
