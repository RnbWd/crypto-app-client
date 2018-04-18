//store/index.js
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducer";

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

export default store;
