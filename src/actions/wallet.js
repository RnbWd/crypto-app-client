import QRCode from "qrcode";

import { addEthWallet, btcQrCodeUrl, ethQrCodeUrl } from "./index";

export const generateQrCode = wallet => async (dispatch, getState) => {
	try {
		// currently passing in wallet data, but in case we want to generate qrCodeUrl separate from the wallet API for some reason we can grab the wallet data from the state
		const { address } = wallet ? wallet : getState().walletData;
		const url = await QRCode.toDataURL(address);
		dispatch(btcQrCodeUrl(url));
	} catch (err) {
		console.log(err);
	}
};

export const createEthWallet = () => async dispatch => {
	try {
		// create eth wallet using web3
		const ethWallet = window.web3js.eth.accounts.create();
		dispatch(addEthWallet(ethWallet));
		console.log(ethWallet);
		const url = await QRCode.toDataURL(ethWallet.address);
		dispatch(ethQrCodeUrl(url));
	} catch (err) {
		console.log(err);
	}
};
