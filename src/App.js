import React, { Component } from "react";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import WalletView from "./containers/WalletView";
import store from "./store";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<WalletView />
				</div>
			</Provider>
		);
	}
}

export default App;
