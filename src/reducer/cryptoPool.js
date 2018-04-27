// reducer/web3.js

import { NEW_POOL_ADDRESS } from "../actions/cryptoPool";

import { fromJS, Map } from "immutable";

const initialState = fromJS({
	pools: []
});

const web3Reducer = (state = initialState, action) => {
	const pools = state.get("pools");
	switch (action.type) {
		case NEW_POOL_ADDRESS:
			return state.set("pools", pools);
		default:
			return state;
	}
};

export default web3Reducer;
