//reducer/index.js
import { combineReducers } from "redux";
import walletData from "./walletData";
import web3 from "./web3";
import cryptoPool from "./cryptoPool";
// initialize with state

const reducer = combineReducers({
	walletData,
	web3,
	cryptoPool
});

export default reducer;
