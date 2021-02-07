import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Weather from "./Weather.js";

export default function Search() {
  return (
    <div className="Search">
      <h1>Weather Search Engine</h1>
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Search />
  </React.StrictMode>,
  rootElement
);
