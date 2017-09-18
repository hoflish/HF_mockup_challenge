import React, {Component} from 'react';
import './hero_section.css';
import me from '../../images/me.jpg';

class HeroSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="hf-hero">
        {/* avatar iamge */}
        <div className="hf-hero__avatar">
          <div className="hf-hero__avatar-large">
            <img src={me} alt=""/>
          </div>
        </div>

        {/* content wrapper */}
        <div className="hf-hero__content">
          {/* hero title */}
          <div className="hf-hero__title">
            Date Night Restaurants
          </div>

          {/* hero description */}
          <div className="hf-hero__description">
            <h3>Best places for a date night in New York City</h3>
          </div>

          {/* follow section */}
          <div className="hf-hero__follow">
            {/* followers number */}
            <div className="hf-hero__follow-number">
              6M followers
            </div>
            <div className="flex-grow"></div>
            {/* follow button */}
            <div className="hf-hero__follow-left">
              <span><button className="btn btn-primary">Follow</button></span>
              <span className="hf-icon"><i data-feather="settings"/></span>
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default HeroSection;
