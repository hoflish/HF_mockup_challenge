import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import './navbar.css';
import Main from "../Main/index";
import MapContainer from "../../containers/MapContainer";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Tabs>
          <TabList>
            <Tab>AFFORDABLE</Tab>
            <Tab>FANCY</Tab>
            <Tab>TIPS</Tab>
            <Tab>COMMUNITY</Tab>
          </TabList>
          <div className="tabs-content">
            <div className="main-content">
              <TabPanel>
                <Main/>
              </TabPanel>
              <TabPanel>fancy</TabPanel>
              <TabPanel>tips</TabPanel>
              <TabPanel>community</TabPanel>
            </div>
            {/* google maps goes here */}
            <div className="map">
              <MapContainer/>
            </div>
          </div>
        </Tabs>
      </nav>
    )
  }
}

export default NavBar;
