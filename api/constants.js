const SHOP_DATA = require("./Shop.json");

//97 = Binance Testnet ID (This is just an example)
const NETWORK_ID = 89; //change the deployed network id here

const SHOP_ABI = SHOP_DATA.abi; // Get the contract's ABI

SHOP_ADDRESS = SHOP_DATA.networks[NETWORK_ID].address; //Get the contract's address

module.exports = {
  SHOP_ABI,
  SHOP_ADDRESS,
};
