import React, { Component } from "react";

class Amiibo extends Component {
  handleClick = () => {
    this.props.addToCollection(this.props.index);
    // this.props.addToCollection(this.props.amiibo);
  };
  render() {
    const { name, image, gameSeries } = this.props.amiibo;
    return (
      <li className="amiibo-item">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h4>{gameSeries}</h4>
        <button onClick={this.handleClick}>Add to My Collection</button>
      </li>
    );
  }
}

export default Amiibo;
