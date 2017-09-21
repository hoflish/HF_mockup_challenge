import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from "../Card";
import {Restaurants as RESTAURANT_DATA} from '../../data/restaurants';


class Cards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      restaurants: RESTAURANT_DATA,
    }
  }


  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.filter !== this.props.filter) {
      const filteredRestaurants = RESTAURANT_DATA.filter((item) => {
        if (nextProps.filter === "popular") {
          return item.likes >= 1000;
        } else if (nextProps.filter === "editors_choice") {
          return item.rating >= 5
        } else {
          return RESTAURANT_DATA
        }
      });
      this.setState(prevState => ({
        restaurants: filteredRestaurants,
      }));
    }
  }

  render() {
    return (
      <ul className="cards">
        {this.state.restaurants.map((item, key) =>
          <li key={key} className="hf-card__item">
            <Card item={item}/>
          </li>)}
      </ul>
    )
  }
}

Cards.propTypes = {
  filter: PropTypes.string
};

export default Cards;
