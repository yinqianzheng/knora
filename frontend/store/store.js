import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default preloadedState =>
  createStore(RootReducer, preloadedState, applyMiddleware(thunk));
