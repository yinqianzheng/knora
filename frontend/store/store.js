import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../reducers/rootReducer";

export default preloadedState =>
  createStore(RootReducer, preloadedState, applyMiddleware(thunk));
