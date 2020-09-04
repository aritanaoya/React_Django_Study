import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Basic1 from "./compornent/Basic1";
// import Basic2 from "./compornent/Basic2";
// import Basic3 from "./compornent/Basic3";
import TimerContainer from "./compornent/TimerContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TimerContainer />
      </header>
    </div>
  );
}

export default App;
