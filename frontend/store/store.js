import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/rootReducer";

export default preloadedState => {
  const middleware = [thunk];
  if (window.env === "development") {
    middleware.push(logger);
    delete window["env"];
  }

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
};
