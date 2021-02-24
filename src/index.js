import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-notifications-component/dist/theme.css";
import ReactNotification from "react-notifications-component";

import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <ReactNotification />
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
