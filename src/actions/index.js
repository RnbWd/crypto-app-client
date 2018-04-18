//actions/index.js
import axios from "axios";
import { generateQrCode } from "./wallet";

export const ADD_WALLET = "ADD_WALLET";
export const FETCHING_NEW_WALLET = "FETCHING_NEW_WALLET";

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

export const requestNewWallet = () => async (dispatch, getState) => {
	try {
		dispatch(fetchingNewWallet());
		const {
			data: { data }
		} = await axios.get(`http://localhost:3001/createWallet`);
		setTimeout(() => {
			dispatch(addWallet(data));
			dispatch(generateQrCode(data));
		}, 2000);
	} catch (err) {
		alert(err);
	}
};
