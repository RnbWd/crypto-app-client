// reducer/wallet.js
import {
	ADD_WALLET,
	FETCHING_NEW_WALLET,
	ETH_WALLET,
	BTC_QRCODE_URL,
	ETH_QRCODE_URL,
	TOGGLE_WALLET
} from "../actions";
import { fromJS } from "immutable";

const initialState = fromJS({
	isFetching: false,
	btcWallet: {
		address: "",
		label: "",
		network: "",
		user_id: ""
	},
	ethWallet: {
		address: "",
		privateKey: ""
	},
	btcQrCode: "",
	ethQrCode: "",
	display: false
});

function walletData(state = initialState, action) {
	switch (action.type) {
		case FETCHING_NEW_WALLET:
			return state.set("isFetching", true);
		case ADD_WALLET:
			return state
				.set("isFetching", false)
				.setIn(["btcWallet", "address"], action.address)
				.setIn(["btcWallet", "label"], action.label)
				.setIn(["btcWallet", "user_id"], action.user_id)
				.setIn(["btcWallet", "network"], action.network);
		case ETH_WALLET:
			return state
				.setIn(["ethWallet", "address"], action.address)
				.setIn(["ethWallet", "privateKey"], action.privateKey);
		case BTC_QRCODE_URL:
			return state.set("btcQrCode", action.url);
		case ETH_QRCODE_URL:
			return state.set("ethQrCode", action.url);
		case TOGGLE_WALLET:
			return state.set("display", !state.get("display"));
		default:
			return state;
	}
}

export default walletData;
