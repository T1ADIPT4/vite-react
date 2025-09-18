import config from './meechain.json'

const urlParams = new URLSearchParams(window.location.search);
const networkKey = urlParams.get("network") || "ethereum";
const config = networks[networkKey];

function loadQuests(networkConfig) {
  return networkConfig.quests.map((questId) => fetchQuestDefinition(questId));
  query param (?network=polygon
}

const progressKey = `${userId}:${networkKey}`;
saveProgress(progressKey, { questId: "mint-nft", status: "completed" });

<select onChange={(e) => switchNetwork(e.target.value)}>
  <option value="ethereum">Ethereum</option>
  <option value="polygon">Polygon</option>
  <option value="arbitrum">Arbitrum</option>
</select>

export const getMeechainConfig = () => config
