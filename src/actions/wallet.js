import QRCode from "qrcode";

export const QRCODE_URL = "QRCODE_URL";

export const qrCodeUrl = url => ({
	type: QRCODE_URL,
	url
});

export const generateQrCode = wallet => async (dispatch, getState) => {
	try {
		// currently passing in wallet data, but in case we want to generate qrCodeUrl separate from the wallet API for some reason we can grab the wallet data from the state
		const { address } = wallet ? wallet : getState().walletData;
		const url = await QRCode.toDataURL(address);
		dispatch(qrCodeUrl(url));
	} catch (err) {
		console.log(err);
	}
};
