import React, {Component} from 'react';
import Card from "../Card";

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        {/* cards */}
        <ul className="cards">
          <li className="hf-card__item">
            <Card/>
          </li>
          <li className="hf-card__item">
            <Card/>
          </li>
          <li className="hf-card__item">
            <Card/>
          </li>
          <li className="hf-card__item">
            <Card/>
          </li>
        </ul>
        {/* maps */}
        <div></div>
      </main>
    );
  }
}

export default Main;
