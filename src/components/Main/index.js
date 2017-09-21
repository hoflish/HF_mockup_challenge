import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Cards from "../Cards";

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
      <div>
        <div className="hf-nav__filter">
            <span>Filter By</span>
            <ul className="hf-nav__filter-items">
              <li className={filter === 'all' ? 'active-filter' : ''}>
                <a href="#" data-hf="all" onClick={this.handleFiltersClick}>All</a>
              </li>
              <li className={filter === 'popular' ? 'active-filter' : ''}><a href="#" data-hf="popular" onClick={this.handleFiltersClick}>Popular</a></li>
              <li className={filter === 'editors_choice' ? 'active-filter' : ''}><a href="#" data-hf="editors_choice" onClick={this.handleFiltersClick}>Editors choice</a></li>
            </ul>
        </div>
        <Cards filter={this.state.filter}/>
      </div>
    );
  }
}

Main.propTypes = {
  filter: PropTypes.oneOf(['all', 'popular', 'editors_choice'])
};

Main.defaultProps = {
  filter: 'all'
};

export default Main;
