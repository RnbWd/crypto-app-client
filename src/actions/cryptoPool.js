import CryptoPool from "../contracts/CryptoPool.json";

export const GET_POOL = "GET_POOL";
export const CREATE_POOL = "CREATE_POOL";
export const PLACE_WAGER = "PLACE_WAGER";
export const SET_WAGER = "SET_WAGER";
export const RELEASE_POOL = "RELEASE_POOL";
export const CHANGE_POOL_OWNER = "CHANGE_POOL_OWNER";
export const CHANGE_SHILL_ADDRESS = "CHANGE_SHILL_ADDRESS";
export const CHANGE_POOL_NAME = "CHANGE_POOL_NAME";
export const NEW_POOL_ADDRESS = "NEW_POOL_ADDRESS";

export const newPoolAddress = address => ({
	type: NEW_POOL_ADDRESS,
	address
});

export const getPool = () => async (dispatch, getState) => {
	try {
		const address = getState().walletData.getIn(["ethWallet", "address"]);
		console.log(address);
		const pools = await cpContract.methods.pools(address).call();
		// dispatch({ type: GET_POOLS, pools });
		console.log(pools);
	} catch (err) {
		alert(err);
	}
};

export const createPool = ({ name, wager }) => async (dispatch, getState) => {
	try {
		// get the CryptoPool Contract for methods
		const cryptoPool = cpContract();
		// create new eth wallet for the crypto pool
		const ethWallet = window.web3js.eth.accounts.create();
		console.log(ethWallet.address);
		dispatch(newPoolAddress(ethWallet.address));
		cryptoPool.methods
			.createPool(ethWallet.address, name, wager)
			.send({ from: getState().web3.get("account") })
			.on("transactionHash", function(hash) {
				console.log(hash);
				// ...
			})
			.on("receipt", function(receipt) {
				console.log(receipt);
				// ...
			})
			.on("confirmation", function(confirmationNumber, receipt) {
				console.log(confirmationNumber);
				console.log(receipt);
				// ...
			})
			.on("error", console.error);

		// dispatch({ type: GET_POOLS, pools });
	} catch (err) {
		alert(err);
	}
};

function cpContract() {
	return new window.web3js.eth.Contract(
		CryptoPool.abi,
		"0xaaf852be0792d57a0451d5a5ff5e165e4c86cb2c"
	);
}
