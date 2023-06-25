import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import PageLoader from "./components/PageLoader/PageLoader";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PageLoader />
    <App />
  </React.StrictMode>
);
