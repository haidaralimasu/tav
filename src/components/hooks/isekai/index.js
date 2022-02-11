import { ethers } from "ethers";
import { useContractCall } from "@usedapp/core";
import iskabi from "../../../contract/isekai/Isekai.json";
import { isekaiAddress } from "../../../contract/isekai";
import { formatUnits } from "ethers/lib/utils";

const nftInterface = new ethers.utils.Interface(iskabi);

export function useTotalSupply() {
  const [totalSupply] =
    useContractCall({
      abi: nftInterface,
      address: isekaiAddress,
      method: "totalSupply",
      args: [],
    }) ?? [];
  const formatedTotoalSupply = totalSupply ? totalSupply.toNumber() : 0;
  return formatedTotoalSupply;
}

export function useMaxSupply() {
  const [maxSupply] =
    useContractCall({
      abi: nftInterface,
      address: isekaiAddress,
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
      address: isekaiAddress,
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
      address: isekaiAddress,
      method: "cost",
      args: [],
    }) ?? [];
  return cost;
}
