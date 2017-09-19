import React, {Component} from 'react';
import Header from "../Header";
import HeroSection from "../HeroSection";
import NavBar from "../NavBar/index";
import Main from "../Main/index";

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="cover">
          <Header />
          <HeroSection />
          <NavBar />
        </div>
        <div>
          <Main />
        </div>
      </div>
    );
  }
}

