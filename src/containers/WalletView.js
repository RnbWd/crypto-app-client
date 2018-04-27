// containers/WalletView.js
import { connect } from "react-redux";
import WalletView from "../components/WalletView";
import { requestNewWallet } from "../actions";
import { getAngelBalance } from "../actions/web3";
import { createEthWallet } from "../actions/wallet";

const mapStateToProps = state => {
	return {
		btcWallet: state.walletData.get("btcWallet"),
		ethWallet: state.walletData.get("ethWallet"),
		btcQrCode: state.walletData.get("btcQrCode"),
		ethQrCode: state.walletData.get("ethQrCode"),
		account: state.web3.get("account")
	};
};

const mapDispatchToProps = dispatch => {
	return {
		requestNewWallet: () => dispatch(requestNewWallet()),
		getAngelBalance: () => dispatch(getAngelBalance()),
		createEthWallet: () => dispatch(createEthWallet())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletView);
