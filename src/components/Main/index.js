import React, {Component} from 'react';
import Card from "../Card";
import PropTypes from 'prop-types';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filter: this.props.filter
    };

    this.handleFiltersClick = this.handleFiltersClick.bind(this);
  }

  handleFiltersClick(e) {
    e.preventDefault();
    this.setState({
      filter: e.target.dataset.hf,
    });

  }

  render() {
    const {filter} = this.state;
    return (
      <main>
        <div className="hf-nav__filter">
            <span>Filter By</span>
            <ul className="hf-nav__filter-items">
              <li className={filter === 'popular' ? 'active-filter' : ''}>
                <a href="#" data-hf="popular" onClick={this.handleFiltersClick}>Popular</a>
              </li>
              <li className={filter === 'new' ? 'active-filter' : ''}><a href="#" data-hf="new" onClick={this.handleFiltersClick}>New</a></li>
              <li className={filter === 'editors_choice' ? 'active-filter' : ''}><a href="#" data-hf="editors_choice" onClick={this.handleFiltersClick}>Editors choice</a></li>
            </ul>
        </div>
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
      </main>
    );
  }
}

Main.propTypes = {
  filter: PropTypes.oneOf(['popular', 'new', 'editors_choice'])
};

Main.defaultProps = {
  filter: 'popular'
};

export default Main;
