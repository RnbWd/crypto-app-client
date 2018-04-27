// reducer/web3.js

import {
	WEB3_INITIALIZED,
	WALLET_DEPLOYED,
	SET_CONTRACTS
} from "../actions/web3";

import { fromJS, Map } from "immutable";

const initialState = fromJS({
	account: null,
	ATcontract: null,
	CPcontract: null
});

const web3Reducer = (state = initialState, action) => {
	switch (action.type) {
		case WEB3_INITIALIZED:
			return state.set("account", action.payload.accounts[0]);
		case SET_CONTRACTS:
			return state
				.set("ATcontract", action.payload.ATcontract)
				.set("CPcontract", action.payload.CPcontract);
		case WALLET_DEPLOYED:
			return Object.assign({}, state, {
				wallet: action.payload.deployed
			});
		default:
			return state;
	}
};

export default web3Reducer;
