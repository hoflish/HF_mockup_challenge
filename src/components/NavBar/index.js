import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import './navbar.css';

class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hf-nav">
        <div className="hf-nav__filter">
         <div className="hf-nav__filter-dropdown">
           <span>POPULAR</span>
           <i className="hf-icon" data-feather="chevron-down"/>
         </div>
        </div>
        <div>
          <Tabs>
            <TabList>
              <Tab>AFFORDABLE</Tab>
              <Tab>FANCY</Tab>
              <Tab>TIPS</Tab>
              <Tab>COMMUNITY</Tab>
            </TabList>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default NavBar;
