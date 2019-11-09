import React, { Component } from "react";
// import "../styles/nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li className="title">SMASH!</li>
          <ul className="nav-buttons">
            <li>Home</li>
            <li>Login</li>
            <li>About</li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default Nav;
