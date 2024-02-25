import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import HomeContainer from "./containers/HomeContainer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HomeContainer />
  </React.StrictMode>
);
