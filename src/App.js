import React, { Component } from "react";
import AmiiboDisplay from "./components/AmiiboDisplay";
import amiibos from "./amiibolist";
import "./App.css";

class App extends Component {
  state = {
    picture: [],
    isLoaded: false,
    amiibos: []
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

  loadSampleAmiibos = () => {
    this.setState({
      amiibos: amiibos
    });
  };
  render() {
    return (
      <div className="App">
        <p>Amiibo Viewer</p>
        <AmiiboDisplay
          loaded={this.state.isLoaded}
          getAmiibos={this.getAmiibos}
          loadSampleAmiibos={this.loadSampleAmiibos}
          amiibos={this.state.amiibos}
        />
      </div>
    );
  }
}

export default App;
