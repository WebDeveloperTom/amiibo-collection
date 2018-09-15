import React, { Component } from "react";
import CollectionItem from "./CollectionItem.js";

class Collection extends Component {
  renderCollection = key => {
    const amiibo = this.props.collection[key];
    // Make sure the fish is loaded before we continue!
    if (!amiibo) return null;
  };
  render() {
    const collectionIds = Object.keys(this.props.collection);
    const collection = this.props.collection.amiibo;
    if (!collection) return null;
    return (
      <div>
        <p>Your Collection:</p>
        {collection.map(amiibo => {
          return (
            <CollectionItem
              key={amiibo.tail}
              name={amiibo.name}
              image={amiibo.image}
              gameSeries={amiibo.gameSeries}
            />
          );
        })}
      </div>
    );
  }
}
// {collectionIds.map(item => <CollectionItem name={item} />)}
export default Collection;
