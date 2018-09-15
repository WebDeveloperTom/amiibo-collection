import React, { Component } from "react";

class CollectionItem extends Component {
  render() {
    const { name, image, gameSeries } = this.props;
    return (
      <div>
        <button>Delete</button>
        <li className="amiibo-item">
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <h4>{gameSeries}</h4>
        </li>
      </div>
    );
  }
}

export default CollectionItem;
