import React, { Component } from "react";
import GoogleMap from './googleMap.component'
import Loader from '../Loader/loader.component'

class Map extends Component {
  state = {
    loading: true
  }

  componentDidMount () {
    if(typeof window.google === 'object' && typeof window.google.maps === 'object') {
      this.setState({loading: false})
    }
  }

  render() {
    const { loading } = this.state
    return (
      loading ? <Loader/> : <GoogleMap />
    );
  }
}

export default Map;
