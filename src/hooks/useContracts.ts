// src/hooks/useContracts.ts
import { ethers } from "ethers";
import deployed from "../config/deployed.json";
import MeeTokenABI from "../abi/MeeToken.json";
import BadgeNFTABI from "../abi/BadgeNFT.json";
import QuestManagerABI from "../abi/QuestManager.json";

export const useContracts = () => {
  const network = "polygon"; // หรือโหลดจาก useNetwork()
  const provider = new ethers.providers.JsonRpcProvider(import.meta.env.NEXT_PUBLIC_RPC_URL);

  const meeToken = new ethers.Contract(
    deployed[network].MeeToken,
    MeeTokenABI,
    provider
  );

  const badgeNFT = new ethers.Contract(
    deployed[network].BadgeNFT,
    BadgeNFTABI,
    provider
  );

  const questManager = new ethers.Contract(
    deployed[network].QuestManager,
    QuestManagerABI,
    provider
  );

  return { meeToken, badgeNFT, questManager };
};
