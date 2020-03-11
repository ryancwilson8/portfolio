import React, { Component } from "react";
import Typing from "react-typing-animation";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header_wrapper">
        <Typing speed={60}>
          <Typing.Delay ms={1000} />
          <p>Hello.</p>
          <Typing.Reset count={0} delay={2000} />
          <p>My name is Ryan Wilson.</p>
        </Typing>
      </div>
    );
  }
}

export default Header;
