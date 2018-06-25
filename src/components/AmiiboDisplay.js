import React, { Component } from "react";
import Amiibo from "./Amiibo.js";
class AmiiboDisplay extends Component {
  render() {
    const { getAmiibos, loadSampleAmiibos } = this.props;
    return (
      <div>
        <p>Amiibo Item</p>
        <button onClick={loadSampleAmiibos}>Get Amiibos</button>
        <div>
          {Object.keys(this.props.amiibos).map(key => (
            <Amiibo key={key} index={key} amiibo={this.props.amiibos[key]} />
          ))}
        </div>
      </div>
    );
  }
}

export default AmiiboDisplay;
