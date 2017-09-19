import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import './navbar.css';
import Menu from "../Menu/index";
import {FILTER_MENU} from "../../config/_constants";

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFilterMenuOpen: false
    };

    this.onOpenFilterMenu = this.onOpenFilterMenu.bind(this);
    this.onCloseFilterMenu = this.onCloseFilterMenu.bind(this);
  }

  onOpenFilterMenu(e) {
    e.preventDefault();
    this.setState({
      isFilterMenuOpen: true,
    });
  }

  onCloseFilterMenu() {
    this.setState({
      isFilterMenuOpen: false,
    });
  }

  render() {
    const {isFilterMenuOpen} = this.state;

    return (
      <nav className="hf-nav">
        <div className="hf-nav__filter">
          <div className="hf-nav__filter-dropdown">
            <a href="#" className="hf-browse" role="button" onClick={this.onOpenFilterMenu}>
              <span>POPULAR</span> <i data-feather="chevron-down"/>
            </a>
            <div className="mdc-menu-anchor">
              <Menu items={FILTER_MENU} onClose={this.onCloseFilterMenu}
                    open={isFilterMenuOpen}/>
            </div>
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
