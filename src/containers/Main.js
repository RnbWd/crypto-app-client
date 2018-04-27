// containers/WalletView.js
import { connect } from "react-redux";
import Main from "../components/Main";

const mapStateToProps = state => {
	return {
		account: state.web3.get("account"),
		displayWallet: state.walletData.get("display")
	};
};

export default connect(mapStateToProps, null)(Main);
