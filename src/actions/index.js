//actions/index.js
import axios from "axios";
import { generateQrCode } from "./wallet";
import { addBtcWallet } from "./web3";

export const ADD_WALLET = "ADD_WALLET";
export const FETCHING_NEW_WALLET = "FETCHING_NEW_WALLET";
export const ETH_WALLET = "ETH_WALLET";
export const BTC_QRCODE_URL = "BTC_QRCODE_URL";
export const ETH_QRCODE_URL = "ETH_QRCODE_URL";
export const TOGGLE_WALLET = "TOGGLE_WALLET";

export const btcQrCodeUrl = url => ({
	type: BTC_QRCODE_URL,
	url
});

export const toggleWallet = () => ({
	type: TOGGLE_WALLET
});

export const ethQrCodeUrl = url => ({
	type: ETH_QRCODE_URL,
	url
});

export const fetchingNewWallet = () => ({
	type: FETCHING_NEW_WALLET
});

export const addWallet = ({ address, network, user_id, label }) => ({
	type: ADD_WALLET,
	address,
	label,
	network,
	user_id
});

/**
 * Pass in Ethereum wallet created by web3
 *
 * @param address
 * @param	privateKey
 	},
 */

export const addEthWallet = ({ address, privateKey }) => ({
	type: ETH_WALLET,
	address,
	privateKey
});

export const requestNewWallet = () => async (dispatch, getState) => {
	try {
		dispatch(fetchingNewWallet());
		const {
			data: { data }
		} = await axios.get(`http://localhost:3001/createWallet`);
		setTimeout(() => {
			// add data to redux
			dispatch(addWallet(data));
			// add wallet to blockchain
			// dispatch(addBtcWallet(data.address));
			// add qrcode to redux
			dispatch(generateQrCode(data));
		}, 2000);
	} catch (err) {
		alert(err);
	}
};
