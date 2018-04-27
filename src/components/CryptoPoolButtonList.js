// components/WalletView.js
import React from "react";
import PropTypes from "prop-types";

class CryptoPoolButtonList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: "", wager: 0 };
	}
	render() {
		const { createPool, getPool } = this.props;

		return (
			<ul className="list-group">
				<li className="list-group-item lead">CryptoPool Contract API</li>
				<li className="list-group-item">
					<input
						type="text"
						value={this.state.value}
						onChange={e => {
							this.setState({ name: e.target.value });
						}}
						className="form-control"
						placeholder="name of new betting pool"
					/>
				</li>
				<li className="list-group-item">
					<input
						type="number"
						value={this.state.value}
						onChange={e => {
							this.setState({ wager: e.target.value });
						}}
						className="form-control"
						placeholder="wager"
					/>
				</li>
				<li className="list-group-item">
					<button
						onClick={() => {
							// getAngelBalance();
							// requestNewWallet();
							const { name, wager } = this.state;
							if (name && wager) {
								createPool({ name, wager });
							}
						}}
						className={`btn btn-primary ${!this.state.value ? "disabled" : ""}`}
					>
						createPool
					</button>
				</li>
				<li className="list-group-item">
					<button
						onClick={() => {
							// getAngelBalance();
							// requestNewWallet();
							getPool();
						}}
						className="btn btn-primary"
					>
						Get Pool
					</button>
				</li>
			</ul>
		);
	}
}

CryptoPoolButtonList.propTypes = {
	createPool: PropTypes.func.isRequired
};

export default CryptoPoolButtonList;
