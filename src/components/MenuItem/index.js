import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ACTIONS} from '../../config/_constants';

class MenuItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      focus: false,
    }
  }

  onMouseEnter() {
    this.setState({hover: true})
  }

  onMouseLeave() {
    this.setState({hover: false})
  }

  onFocus() {
    this.setState({focus: true});
  }

  onBlur() {
    this.setState({focus: false})
  }

  stopEvent(e) {
    e.preventDefault();
  }

  onAction(e) {
    this.stopEvent(e);
    if (e.isTrusted && !e.repeat) {
      let {action} = this.props;
      action && action(e);
    }
  }
  render() {
    const {hover, focus} = this.state;
    const classes = classNames("mdc-list-item", {"dropDown-item-hover": hover || focus});
    const {data: metaData} = this.props;

    return (
      <li role="menuitem" tabIndex="0" className={classes}
          onMouseDown={this.stopEvent}
          onClick={this.onAction.bind(this)}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          data-gt={JSON.stringify(metaData)}
      >
        {ACTIONS[metaData["menu_item_click"]]}
      </li>);
  }

}


MenuItem.propTypes = {
  action: PropTypes.func,
  data: PropTypes.object.isRequired
};

export default MenuItem;
