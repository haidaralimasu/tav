import "./MintHero.css";
import React, { useState } from "react";
import {
  useCost,
  useWeiCost,
  useWalletOfOwner,
  useTotalSupply,
  useMaxSupply,
  useOnlyWhitelisted,
  useIsWhitelisted,
  useNftPerAddressLimit,
  useAddressMintedBalance,
} from "../hooks/tav";
import { tavAddress } from "../../contract/tav";
import tavabi from "../../contract/tav/TAV.json";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import { notifyMintSuccess, notifyError, notifyNetworkR } from "../../toast";

const nftInterface = new ethers.utils.Interface(tavabi);

function MintHero() {
  const { account, activateBrowserWallet } = useEthers();
  const totalSupply = useTotalSupply();
  const maxSupply = useMaxSupply();
  const cost = useCost();
  const weiCost = useWeiCost();
  const limit = useNftPerAddressLimit();
  const balance = useAddressMintedBalance(account);
  const onlyWhitelisted = useOnlyWhitelisted();
  const isWhitelisted = useIsWhitelisted(account);
  const wallet = useWalletOfOwner(account);
  const [minting, setMinting] = useState(false);

  // console.log(limit);

  const onError = () => {
    notifyNetworkR();
  };

  // console.log(wallet);
  async function handleMint() {
    try {
      setMinting(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      /* next, create the item */
      let nftcontract = new ethers.Contract(tavAddress, nftInterface, signer);
      let transaction = await nftcontract.mint(1, {
        value: weiCost,
      });
      await transaction.wait();
      setMinting(false);

      notifyMintSuccess();
    } catch (error) {
      notifyError();
      console.log(error);
      setMinting(false);
    }
  }

  return (
    <div className="MintHero">
      {isWhitelisted ? (
        <div className="MintHero__title">
          Congrationaltions you are whitlisted click below to mint
        </div>
      ) : null}
      <div className="MintHero__title">
        {totalSupply} / {maxSupply}
      </div>
      <div className="MintHero__description">Price per TAV {cost}</div>
      {account ? (
        <div
          style={{ color: "black", textDecoration: "none", cursor: "pointer" }}
        >
          <>
            {onlyWhitelisted ? (
              <>
                {isWhitelisted ? (
                  <>
                    {balance < limit ? (
                      <div
                        onClick={() => handleMint()}
                        className="MintHero__button"
                      >
                        {minting ? "Please Wait" : "MINT TAV"}
                      </div>
                    ) : (
                      <div className="MintHero__button">
                        You cannot mint more than one
                      </div>
                    )}
                  </>
                ) : (
                  <div className="MintHero__button">
                    You are not whitelisted
                  </div>
                )}
              </>
            ) : (
              <div onClick={() => handleMint()} className="MintHero__button">
                {minting ? "Please Wait" : "MINT TAV"}
              </div>
            )}
          </>
        </div>
      ) : (
        <div
          onClick={() => activateBrowserWallet(onError)}
          style={{ color: "black", textDecoration: "none", cursor: "pointer" }}
        >
          <div className="MintHero__button">Connect</div>
        </div>
      )}
      <div className="MintHero__description">
        TAV is an expermintal project on ether testnet ask for a whitelist on
        discord.
      </div>
    </div>
  );
}

export default MintHero;
