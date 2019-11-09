import React, { Component } from "react";
import Amiibo from "./Amiibo.js";
class AmiiboDisplay extends Component {
  render() {
    const {
      getAmiibos,
      loadSampleAmiibos,
      addToCollection,
      loaded,
      amiibos
    } = this.props;

    if (!loaded) {
      return <button onClick={getAmiibos}>Load SMASH Amiibos</button>;
    }

    return (
      <div>
        <p>SMASH Amiibo list:</p>
        <div className="amiibo-grid">
          {amiibos.amiibo.map((amiibo, index) => (
            <Amiibo
              key={amiibo.tail}
              // newKey={amiibo.tail}
              index={index}
              // amiibos={amiibos}
              amiibo={amiibo}
              addToCollection={addToCollection}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default AmiiboDisplay;
