import React, {Component} from 'react';
import Header from "../Header";
import HeroSection from "../HeroSection";
import NavBar from "../NavBar/index";
import Main from "../Main/index";
import MapContainer from "../../containers/MapContainer";

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="cover">
          <Header/>
          <HeroSection/>
          <NavBar/>
        </div>
        <div className="wrapper">
          <Main/>
         <div className="map">
           <MapContainer />
           <input id="pac-input" className="controls" type="text" placeholder="Search for an address" />
         </div>
        </div>
      </div>
    );
  }
}
