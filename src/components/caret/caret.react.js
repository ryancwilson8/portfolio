import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import "./caret.css";

class Caret extends Component {

  render() {
    return (
      <div className="caret_wrapper">
        <p className="bigCaret">V</p>
      </div>
    );
  }
}

export default Caret;
