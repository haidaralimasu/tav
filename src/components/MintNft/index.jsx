import "./MintNft.css";
import React, { useState } from "react";
import { useEthers } from "@usedapp/core";
import {
  useCost,
  useTotalSupply,
  useMaxSupply,
  useWeiCost,
} from "../../components/hooks/isekai";
import { notifyError, notifyNetwork, notifyMintSuccess } from "../../toast";
import { ethers } from "ethers";
import { isekaiAddress } from "../../contract/isekai";
import isekaiabi from "../../contract/isekai/Isekai.json";

const nftInterface = new ethers.utils.Interface(isekaiabi);

function MintNft() {
  const [amount, setAmount] = useState(1);
  const [minting, setMinting] = useState(false);
  const { account, activateBrowserWallet, chainId } = useEthers();
  const weiCost = useWeiCost();
  const cost = useCost();
  const totalSupply = useTotalSupply();
  const maxSupply = useMaxSupply();

  const setMint = (_amount) => {
    setAmount(_amount);
  };

  const onError = () => {
    notifyNetwork();
  };

  async function handleMint() {
    try {
      setMinting(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const txCost = Number(weiCost) * amount;
      /* next, create the item */
      let nftcontract = new ethers.Contract(
        isekaiAddress,
        nftInterface,
        signer
      );
      let transaction = await nftcontract.mint(account, amount, {
        value: txCost.toString(),
      });
      await transaction.wait();
      setMinting(false);
      setAmount(1);
      notifyMintSuccess();
    } catch (error) {
      notifyError();
      setAmount(1);
      console.log(error);
      setMinting(false);
    }
  }

  console.log(account);

  return (
    <div className="MintNft">
      <div className="MintNft__title">
        Mint your Isekai and
        <br />
        start your journey
      </div>
      <h1 style={{ color: "white" }}>
        {totalSupply}/{maxSupply}
      </h1>
      <em className="MintNft__subtitle">
        Price per {cost} {ethers.constants.EtherSymbol}
      </em>

      {chainId !== 1 ? (
        <em className="MintNft__subtitle">
          Please Connect to Ethereum Mainnet
        </em>
      ) : null}

      <div className="MintNft__button_row">
        <div onClick={() => setMint(1)} className="MintNft__button">
          1
        </div>
        <div onClick={() => setMint(2)} className="MintNft__button">
          2
        </div>
        <div onClick={() => setMint(3)} className="MintNft__button">
          3
        </div>
        <div onClick={() => setMint(4)} className="MintNft__button">
          4
        </div>
        <div onClick={() => setMint(5)} className="MintNft__button">
          5
        </div>
      </div>

      {account ? (
        <div
          onClick={() => handleMint()}
          className="MintNft__button MintNft__button_white"
        >
          {minting ? "Please Wait" : `Mint ${amount} ISK`}
        </div>
      ) : (
        <div
          onClick={() => activateBrowserWallet(onError)}
          className="MintNft__button MintNft__button_white"
        >
          Connect
        </div>
      )}
    </div>
  );
}

export default MintNft;
