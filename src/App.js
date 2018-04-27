import React, { Component } from "react";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Main from "./containers/Main";
import store from "./store";
import initWeb3 from "./utils/web3";
import { toggleWallet } from "./actions";

class App extends Component {
	async componentWillMount() {
		console.log("will mount");
		console.log(Date.now());
	}
	componentDidMount() {
		console.log("did mount");
		console.log(Date.now());
		initWeb3();
		// Is there is an injected web3 instance?
		// store it as a global variable for now

		// // check to see if the user already has a wallet stored in the blockchain
		// store.dispatch(getBtcWallet());
	}
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to Crypto Pool</h1>
						<button
							onClick={() => {
								store.dispatch(toggleWallet());
							}}
							className={`btn btn-secondary`}
							style={{
								float: "left"
							}}
						>
							Toggle Wallet
						</button>
					</header>
					<Main />
				</div>
			</Provider>
		);
	}
}

export default App;
