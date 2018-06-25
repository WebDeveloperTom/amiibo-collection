import React, { Component } from "react";

class Amiibo extends Component {
  render() {
    const { name, image, gameSeries } = this.props.amiibo;
    return (
      <li className="amiibo-item">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h4>{gameSeries}</h4>
      </li>
    );
  }
}

export default Amiibo;
