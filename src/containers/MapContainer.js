import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Map, GoogleApiWrapper, Marker, InfoWindow, } from 'google-maps-react';

class MapContainer extends Component {

  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }


  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          })
        })
      }
    }
  }

  render() {
    const style = {
      minWidth: '100%',
      height: '100%',
      position: 'relative',
    };

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
        <Map style={style}
             google={this.props.google}
             initialCenter={this.state.currentLocation}
             zoom={14}
             scrollwheel={false}
        >
          <Marker onClick={() => {}} name={'Current location'}/>

          <InfoWindow onClose={() => {
          }}>
            <div>
              {/*<h1>{this.state.selectedPlace.name}</h1>*/}
            </div>
          </InfoWindow>
        </Map>
    )
  }
}

MapContainer.propTypes = {
  initialCenter: PropTypes.object,
  centerAroundCurrentLocation: PropTypes.bool
};
MapContainer.defaultProps = {
  initialCenter: {
    lat: 33.58831,
    lng: -7.61138
  },
  centerAroundCurrentLocation: true
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyA-xrT8xlsB8DXCIydDZQbFRoEkgHAN8GU"
})(MapContainer)
