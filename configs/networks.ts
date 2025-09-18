import { networks } from './configs/networks'

const saveProgress = (key, value) => localStorage.setItem(key, v)
const urlParams = new URLSearchParams(window.location.search);
const networkKey = urlParams.get('network') || 'ethereum';
const networkConfig = networks[networkKey];
const provider = new ethers.providers.JsonRpcProvider(networkConfig.rpc);
const contract = new ethers.Contract(networkConfig.contract, abi, provider);
const userId = urlParams.get('user') || '';
const progressKey = `${userId}:${networkKey}:${$('#stepKey').text()}`;
