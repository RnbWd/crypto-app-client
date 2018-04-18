// components/WalletView.js
import React from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";

const WalletView = ({
	requestNewWallet,
	walletData: {
		isFetching,
		wallet: { address, qrCodeUrl }
	}
}) =>
	isFetching ? (
		<Loading />
	) : (
		<div>
			<div className="lead p-5">
				Send me your bitcoin!! <br />
				{qrCodeUrl ? <img src={qrCodeUrl} alt="qrcode" /> : ""}
				<br />
				Wallet Address:
				<input
					type="text"
					className="form-control"
					value={address}
					onChange={e => e.preventDefault()}
					placeholder="Click button below to create a bitcoin wallet!"
				/>
			</div>
			<button
				onClick={() => {
					requestNewWallet();
				}}
				className="btn btn-primary"
			>
				Create
			</button>
		</div>
	);

WalletView.propTypes = {
	walletData: PropTypes.object.isRequired,
	requestNewWallet: PropTypes.func.isRequired
};

export default WalletView;
