import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDom from "react-dom";
ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
