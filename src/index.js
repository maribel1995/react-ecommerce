import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./App.css";
import StoreProvider from "./utils/store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <StoreProvider>
      <App />
    </StoreProvider>
  </Router>,
  document.getElementById("root")
);
