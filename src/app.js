import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store, { history } from "./store/configureStore";
import AppRoutes from "./views";
import "./assets/styles/index.css";
import "antd/dist/antd.css";

const AppContainer = () => (
  <Provider store={store}>
    <Router history={history}>
      <AppRoutes />
      
    </Router>
  </Provider>
);

export default AppContainer;
