import React, {Component} from 'react';
import Header from "../Header";
import HeroSection from "../HeroSection";
import NavBar from "../NavBar/index";

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <HeroSection />
        <NavBar />
      </div>
    );
  }
}
