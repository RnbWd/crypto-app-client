// components/WalletView.js
import React from "react";
import PropTypes from "prop-types";
import CryptoPoolButtonList from "./CryptoPoolButtonList";

class CryptoPool extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
	}
	render() {
		// const { createPool, address, getPool } = this.props;
		return (
			<div>
				<CryptoPoolButtonList {...this.props} />
			</div>
		);
	}
}

CryptoPool.propTypes = {
	createPool: PropTypes.func.isRequired
};

export default CryptoPool;
