import React, { Component } from "react";
import { loadMapWithDirections } from '../../utils/loadMap'

class GoogleMap extends Component {
  componentDidMount() {
    loadMapWithDirections()
  }

  render() {
    return (
      <div style={{ width: '100%', height: '500px' }} id="map" />
    );
  }
}

export default GoogleMap;
