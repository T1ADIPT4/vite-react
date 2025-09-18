import config from './meechain.json'

const urlParams = new URLSearchParams(window.location.search);
const networkKey = urlParams.get("network") || "ethereum";
const config = networks[networkKey];

export const getMeechainConfig = () => config
