// containers/WalletView.js
import { connect } from "react-redux";
import CryptoPoolButtonList from "../components/CryptoPoolButtonList";
import { createPool, getPool } from "../actions/cryptoPool";

const mapDispatchToProps = dispatch => {
	return {
		createPool: data => dispatch(createPool(data)),
		getPool: () => dispatch(getPool())
	};
};

export default connect(null, mapDispatchToProps)(CryptoPoolButtonList);
