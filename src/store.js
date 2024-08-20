import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { loginReducer, registerReducer } from "./reducers/authReducer";

import { thunk } from 'redux-thunk';
const reducer = combineReducers({
  loginReducer: loginReducer,
  registerReducer: registerReducer,
 
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

