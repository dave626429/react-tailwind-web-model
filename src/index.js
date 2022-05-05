import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";

ReactDOMClient.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
