import React, {Component}  from 'react'
import {findDOMNode} from 'react-dom'

import cache from '../utils/ScriptCache'
import GoogleApi from '../utils/GoogleApi'

const defaultMapConfig = {};

export const wrapper = (options) => (WrappedComponent) => {
  const apiKey = options.apiKey;
  const libraries = options.libraries || ['places'];

  class Wrapper extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loaded: false,
        map: null,
        google: null
      }
    }

    componentDidMount() {
      const mapRef = this.refs.map;
      this.scriptCache.google.onLoad((err, tag) => {
        const maps = window.google.maps;
        const props = Object.assign({}, this.props, {
          loaded: this.state.loaded
        });


        const node = findDOMNode(mapRef);
        let center = new maps.LatLng(this.props.lat, this.props.lng);

        let mapConfig = Object.assign({}, defaultMapConfig, {
          center, zoom: this.props.zoom
        });

        this.map = new maps.Map(node, mapConfig);

        this.setState({
          loaded: true,
          map: this.map,
          google: window.google
        })
      });
    }

    componentWillMount() {
      this.scriptCache = cache({
        google: GoogleApi({
          apiKey: apiKey,
          libraries: libraries
        })
      });
    }

    render() {
      const props = Object.assign({}, this.props, {
        loaded: this.state.loaded,
        map: this.state.map,
        google: this.state.google,
        mapComponent: this.refs.map
      });
      console.log(props)
      return (
        <div>
          <WrappedComponent {...props} />
          <div ref='map' />
        </div>
      )
    }
  }

  return Wrapper;
};

export default wrapper;
