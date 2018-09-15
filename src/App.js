import React, { Component } from "react";
import AmiiboDisplay from "./components/AmiiboDisplay";
import Nav from "./components/Nav";
import amiibos from "./amiiboData";
import smallAmiibos from "./smallAmiibos";
import Collection from "./components/Collection";
import "./App.css";

class App extends Component {
  state = {
    isLoaded: false,
    amiibos: [],
    collection: {
      amiibo: []
    }
  };
  getAmiibos = () => {
    fetch(
      "http://www.amiiboapi.com/api/amiibo/?amiiboSeries=Super%20Smash%20Bros."
    )
      .then(results => results.json())
      .then(data => {
        this.setState({
          amiibos: data.amiibo,
          isLoaded: true
        });
      });
  };

  addToCollection = index => {
    const item = this.state.amiibos.amiibo[index];
    let collection = this.state.collection;
    collection.amiibo[index] = item;
    console.log(index);
    console.log(item);
    this.setState({ collection });
  };

  loadSampleAmiibos = () => {
    this.setState({
      amiibos: amiibos,
      isLoaded: true
    });
  };
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="main">
          <AmiiboDisplay
            loaded={this.state.isLoaded}
            getAmiibos={this.getAmiibos}
            loadSampleAmiibos={this.loadSampleAmiibos}
            amiibos={this.state.amiibos}
            addToCollection={this.addToCollection}
          />
          <Collection collection={this.state.collection} />
        </div>
      </div>
    );
  }
}

export default App;
