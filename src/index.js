import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Routes from "./components/Routes";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
