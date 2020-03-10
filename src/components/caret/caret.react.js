import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import "./caret.css";

class Caret extends Component {
  render() {
    return (
      <div className="caret_wrapper">
        <Reveal effect="fadeInUp" delay={1500} duration={3000}>
          <p className="bigCaret">V</p>
        </Reveal>
      </div>
    );
  }
}

export default Caret;
