// containers/WalletView.js
import { connect } from "react-redux";
import WalletView from "../components/WalletView";
import { requestNewWallet } from "../actions";

const mapStateToProps = state => {
	return {
		walletData: state.walletData
	};
};

const mapDispatchToProps = dispatch => {
	return {
		requestNewWallet: () => dispatch(requestNewWallet())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletView);
