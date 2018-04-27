// actions/web3.js

// import WalletContract from "../contracts/Wallet.json";
// import AngelToken from "../contracts/AngelToken.json";
// const web3js = window.web3js;

export const WEB3_INITIALIZED = "WEB3_INITIALIZED";
export const WALLET_DEPLOYED = "WALLET_DEPLOYED";
export const SET_CONTRACTS = "SET_CONTRACTS";

export const web3Initialized = payload => ({
	type: WEB3_INITIALIZED,
	payload
});

export const setContracts = payload => ({
	type: SET_CONTRACTS,
	payload
});

export const walletDeployed = payload => ({
	type: WALLET_DEPLOYED,
	payload
});

export const initializeWeb3 = () => async dispatch => {
	try {
		const accounts = await window.web3js.eth.getAccounts();
		dispatch(web3Initialized({ accounts }));
	} catch (err) {
		console.log(err);
	}
};

export const getBtcWallet = () => async (dispatch, getState) => {
	try {
		const web3js = window.web3js;
		const wallet = window.WalletContract;
		// console.log(web3js.eth.accounts[0]);
	} catch (err) {
		console.log(err);
	}
};

export const getAngelBalance = () => async (dispatch, getState) => {
	try {
		const balance = await window.AngelToken.methods
			.balanceOf(getState().web3.account)
			.call();
		console.log(balance);
	} catch (err) {
		console.log(err);
	}
};

export const addBtcWallet = address => (dispatch, getState) => {
	window.WalletContract.methods;
};
