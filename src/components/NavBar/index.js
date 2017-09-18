import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import './navbar.css';

class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="hf-nav">
        <div className="hf-nav__filter">
          <div className="hf-nav__filter-dropdown">
            <span>POPULAR</span>
            <i className="hf-icon" data-feather="chevron-down"/>
          </div>
        </div>
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
      </nav>
    )
  }
}

export default NavBar;
