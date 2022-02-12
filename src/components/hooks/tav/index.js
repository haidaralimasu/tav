import { ethers } from "ethers";
import { useContractCall } from "@usedapp/core";
import { tavAddress } from "../../../contract/tav";
import tavAbi from "../../../contract/tav/TAV.json";
import { formatUnits } from "ethers/lib/utils";

const nftInterface = new ethers.utils.Interface(tavAbi);

export function useTotalSupply() {
  const [totalSupply] =
    useContractCall({
      abi: nftInterface,
      address: tavAddress,
      method: "totalSupply",
      args: [],
    }) ?? [];
  const formatedTotoalSupply = totalSupply ? totalSupply.toNumber() : 0;
  return formatedTotoalSupply;
}

export function useNftPerAddressLimit() {
  const [nftPerAddressLimit] =
    useContractCall({
      abi: nftInterface,
      address: tavAddress,
      method: "nftPerAddressLimit",
      args: [],
    }) ?? [];
  const formatedNftPerAddressLimit = nftPerAddressLimit
    ? nftPerAddressLimit.toNumber()
    : 0;
  return formatedNftPerAddressLimit;
}

export function useMaxSupply() {
  const [maxSupply] =
    useContractCall({
      abi: nftInterface,
      address: tavAddress,
      method: "maxSupply",
      args: [],
    }) ?? [];
  const formatedMaxSupply = maxSupply ? maxSupply.toNumber() : 0;
  return formatedMaxSupply;
}

export function useCost() {
  const [cost] =
    useContractCall({
      abi: nftInterface,
      address: tavAddress,
      method: "cost",
      args: [],
    }) ?? [];
  const formattedCost = cost ? parseFloat(formatUnits(cost, 18)) : 0;
  return formattedCost;
}

export function useWeiCost() {
  const [cost] =
    useContractCall({
      abi: nftInterface,
      address: tavAddress,
      method: "cost",
      args: [],
    }) ?? [];
  return cost;
}

export function useOnlyWhitelisted() {
  const [onlyWhitelisted] =
    useContractCall({
      abi: nftInterface,
      address: tavAddress,
      method: "onlyWhitelisted",
      args: [],
    }) ?? [];
  return onlyWhitelisted;
}

export function useAddressMintedBalance(ownerAddress) {
  const [addressMintedBalance] =
    useContractCall({
      abi: nftInterface,
      address: tavAddress,
      method: "addressMintedBalance",
      args: [ownerAddress],
    }) ?? [];
  const formatedaddressMintedBalance = addressMintedBalance
    ? addressMintedBalance.toNumber()
    : 0;
  return formatedaddressMintedBalance;
}

export function useIsWhitelisted(userAddress) {
  const [isWhitelisted] =
    useContractCall({
      abi: nftInterface,
      address: tavAddress,
      method: "isWhitelisted",
      args: [userAddress],
    }) ?? [];
  return isWhitelisted;
}

export function useWalletOfOwner(userAddress) {
  const [walletOfOwner] =
    useContractCall({
      abi: nftInterface,
      address: tavAddress,
      method: "walletOfOwner",
      args: [userAddress],
    }) ?? [];
  const wallet = walletOfOwner ? walletOfOwner : [0];
  //   return wallet;

  var result = wallet.map(function (x) {
    return parseInt(x, 10);
  });

  return result;
}
