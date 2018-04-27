// components/WalletView.js
import React from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";
import CryptoPool from "../containers/CryptoPool";

const WalletView = ({
	getAngelBalance,
	requestNewWallet,
	createEthWallet,
	isFetching,
	btcWallet,
	ethWallet,
	btcQrCode,
	ethQrCode,
	account
}) =>
	isFetching ? (
		<Loading />
	) : (
		<div>
			<div className="lead pt-5">
				{ethWallet.get("address") ? (
					<div>
						Send me your ether!! <br />
						{ethQrCode ? <img src={ethQrCode} alt="qrcode" /> : ""}
						<br /> Wallet Address:
						<input
							type="text"
							className="form-control"
							value={ethWallet.get("address")}
							onChange={e => e.preventDefault()}
							placeholder="Click button below to create a bitcoin wallet!"
						/>
					</div>
				) : (
					""
				)}
				<br />
				<button
					onClick={() => {
						// getAngelBalance();
						// requestNewWallet();
						createEthWallet();
					}}
					className="btn btn-success"
				>
					Create New Wallet
				</button>
			</div>
		</div>
	);

WalletView.propTypes = {
	requestNewWallet: PropTypes.func.isRequired,
	createEthWallet: PropTypes.func.isRequired
};

export default WalletView;
