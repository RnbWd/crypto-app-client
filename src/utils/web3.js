import { initializeWeb3, setContracts } from "../actions/web3";
// import AngelToken from "../contracts/AngelToken.json";
// import CryptoPool from "../contracts/CryptoPool.json";
import Web3 from "web3";
import store from "../store";

window.addEventListener("load", function() {
	const web3 = window.web3;

	typeof web3 !== "undefined"
		? (window.web3js = new Web3(web3.currentProvider))
		: (window.web3js = new Web3(
				new web3.providers.HttpProvider("http://127.0.0.1:7545")
		  ));

	// const ATcontract = new window.web3js.eth.Contract(
	// 	AngelToken.abi,
	// 	"0xaaf852be0792d57a0451d5a5ff5e165e4c86cb2c"
	// );
	//
	// const CPcontract = new window.web3js.eth.Contract(
	// 	CryptoPool.abi,
	// 	"0x943fd99eec4c39108eef793c904a1e91df5e388f"
	// );

	// window.CPcontract = CPcontract;
	// save our account number in redux, should probably use an interval timer to check for account change
	store.dispatch(
		initializeWeb3({
			web3js: window.web3js
		})
	);
	// save our contracts in redux, it didn't work with truffle's shitty library, hopefully web3 works alight
	// store.dispatch(
	// 	setContracts({
	// 		WalletContract,
	// 		ATcontract,
	// 		CPcontract
	// 	})
	// );
	console.log("web3js loaded!!");
});

export default () => console.log("loading web3js");
