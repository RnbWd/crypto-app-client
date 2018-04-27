import React from "react";
import WalletView from "../containers/WalletView";
import CryptoPool from "../containers/CryptoPool";

const Main = ({ account, displayWallet }) => (
	<div className="main">
		{console.log(account)}
		<div>{displayWallet ? <WalletView /> : ""}</div>
		<div>
			<CryptoPool />
		</div>
	</div>
);

export default Main;
