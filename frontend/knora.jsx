import React from "react";
import ReactDOM from "react-dom";
import createConfigStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let preloadedState = undefined;
  if (window.localStorage.getItem("preLoadedState")) {
    preloadedState = JSON.parse(window.localStorage.getItem("preLoadedState"));
    if (window.isLoggedIn !== true) {
      preloadedState.session.currentUser = null;
    } else {
    }
    delete window[isLoggedIn];
  }
  const store = createConfigStore(preloadedState);
  window.onbeforeunload = function(event) {
    window.localStorage.setItem(
      "preLoadedState",
      JSON.stringify(store.getState())
    );
  };

  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
