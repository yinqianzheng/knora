import React from "react";
import ReactDOM from "react-dom";
import createConfigStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = createConfigStore();

  ReactDOM.render(<Root store={store} />, root);
});
