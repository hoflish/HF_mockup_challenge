import React, {Component} from 'react';
import Header from "../Header";
import HeroSection from "../HeroSection";
import NavBar from "../NavBar";
import Footer from "../Footer";

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
        </div>
        <NavBar/>
        <Footer />
      </div>
    );
  }
}
