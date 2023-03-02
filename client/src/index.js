import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CardState from "./Context/cardState";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CardState>
    <App />
  </CardState>
);
