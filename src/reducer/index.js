//reducer/index.js
import { combineReducers } from "redux";
import { ADD_WALLET, FETCHING_NEW_WALLET } from "../actions";
import { QRCODE_URL } from "../actions/wallet";

// initialize with state
function walletData(
	state = {
		isFetching: false,
		wallet: {
			address: "",
			label: "",
			network: "BTC",
			user_id: 0,
			qrCodeUrl: ""
		}
	},
	action
) {
	switch (action.type) {
		case FETCHING_NEW_WALLET:
			return Object.assign({}, state, {
				isFetching: true
			});
		case ADD_WALLET:
			return Object.assign({}, state, {
				isFetching: false,
				wallet: Object.assign({}, state.wallet, {
					address: action.address,
					label: action.label,
					network: action.network,
					user_id: action.user_id
				})
			});
		case QRCODE_URL:
			return Object.assign({}, state, {
				wallet: Object.assign({}, state.wallet, {
					qrCodeUrl: action.url
				})
			});
		default:
			return state;
	}
}

const reducer = combineReducers({
	walletData
});

export default reducer;
