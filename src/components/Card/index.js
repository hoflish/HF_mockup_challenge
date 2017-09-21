import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './card.css';

class Card extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {item} = this.props;
    const pic = require('../../images/' + item.picture_src);
    const style = {
      backgroundImage: `url(${pic})`
    };
    return (
      <div className="hf-card">
        {/* images  */}
        <div style={style} className="hf-card__image"> </div>

        <div className="hf-card__content">
          {/* Restaurant  */}
            <div className="hf-card__content-top">
              <h1 className="hf-card__restaurant-name">{item.name}</h1>
              <span className="rating-color hf-icon"><i data-feather="star"/></span>
              <span className="rating-color">{item.rating}</span>
            </div>

          {/*Restaurant likes*/}
          <div className="hf-card__content-bottom"><small>{`${item.likes} likes`}</small></div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
