import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header.react";
import Caret from "./components/caret/caret.react";

class App extends Component {
  constructor() {
    super()
    this.state = { toggleCaret : false }
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({ toggleCaret: true })
      }, 6300);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          {this.state.toggleCaret ? <Caret /> : null }
        </header>
      </div>
    );
  }
}

export default App;
