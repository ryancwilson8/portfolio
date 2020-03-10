import React from "react";
import "./App.css";
import Header from "./components/header/header.react";
import Caret from "./components/caret/caret.react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Caret />
      </header>
    </div>
  );
}

export default App;
