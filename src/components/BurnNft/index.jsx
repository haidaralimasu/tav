import "./BurnNft.css";
import React, { useState } from "react";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import { tavAddress } from "../../contract/tav";
import tavabi from "../../contract/tav/TAV.json";
import { useWalletOfOwner, useCost } from "../hooks/tav";
import { notifyBurnSuccess, notifyError } from "../../toast";

const nftInterface = new ethers.utils.Interface(tavabi);

function BurnNft({ selectedArt, artList }) {
  const { account } = useEthers();
  const [minting, setMinting] = useState(false);
  const wallet = useWalletOfOwner(account);
  const cost = useCost();

  async function handleBurnFixed() {
    try {
      setMinting(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      /* next, create the item */
      let nftcontract = new ethers.Contract(tavAddress, nftInterface, signer);
      let transaction = await nftcontract.burnFixed(wallet);
      await transaction.wait();
      setMinting(false);

      notifyBurnSuccess();
    } catch (error) {
      notifyError();
      console.log(error);
      setMinting(false);
    }
  }

  return (
    <div className="BurnNft">
      <div className="BurnNft__title">
        Burn the NFT and Get the Compensation
      </div>
      <div className="BurnNft__row">
        <img
          src={artList[1].image}
          alt={artList[1].id}
          className="BurnNft__largeImg"
        />
        <div className="BurnNft__column">
          <div className="BurnNft__column_title">Selected NFT</div>
          <div className="BurnNft__column_subtitle">
            You will get {cost} ETH
          </div>
          <div className="BurnNft__row">
            <div>
              <img
                src={artList[selectedArt].image}
                alt={artList[selectedArt].id}
                className="BurnNft__smallImg"
              />
              {wallet > 0 ? (
                <div
                  onClick={() => handleBurnFixed()}
                  className="BurnNft__button"
                >
                  {minting ? "Please Wait" : "Burn"}
                </div>
              ) : (
                <div className="BurnNft__button">You own nothing</div>
              )}
            </div>
            {wallet > 0 ? (
              <div className="BurnNft__id">TAV #{wallet}</div>
            ) : (
              <div className="BurnNft__id">You own nothing</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurnNft;
