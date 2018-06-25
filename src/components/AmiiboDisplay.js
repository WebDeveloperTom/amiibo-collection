import React, { Component } from "react";
import Amiibo from "./Amiibo.js";
class AmiiboDisplay extends Component {
  render() {
    const { getAmiibos, loadSampleAmiibos, loaded } = this.props;

    if (!loaded) {
      return <button onClick={getAmiibos}>Load SMASH Amiibos</button>;
    }

    return (
      <div>
        <p>SMASH Amiibo list:</p>

        <div className="amiibo-grid">
          {Object.keys(this.props.amiibos).map(key => (
            <Amiibo key={key} index={key} amiibo={this.props.amiibos[key]} />
          ))}
        </div>
      </div>
    );
  }
}

export default AmiiboDisplay;
