import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Set as ImmutableSet} from 'immutable';
import {MDCSimpleMenuFoundation} from '@material/menu';
import {strings, cssClasses} from '@material/menu/simple/constants';
import classNames from 'classnames';
import '@material/menu/dist/mdc.menu.css';
import './menu.css';
import {keys} from 'lodash'

const OPENFROMS = {
  'top-left': 'mdc-simple-menu--open-from-top-left',
  'top-right': 'mdc-simple-menu--open-from-top-right',
  'bottom-left': 'mdc-simple-menu--open-from-bottom-left',
  'bottom-right': 'mdc-simple-menu--open-from-bottom-right',
};

/**
 * Menu Class
 */
class Menu extends PureComponent {

  constructor(props) {
    super(props);
    this.previousFocus = null;
    this.state = {
      classes: new ImmutableSet(),
    };
  }

  foundation = new MDCSimpleMenuFoundation({
    addClass: className => this.setState(prevState => ({
      classes: prevState.classes.add(className)
    })),
    removeClass: className => this.setState(prevState => ({
      classes: prevState.classes.remove(className)
    })),

    hasClass: className => this.refs.menu.classList.contains(className),

    hasNecessaryDom: () => !!this.refs.menuItemsContainer,

    getAttributeForEventTarget: (target, attributeName) => target.getAttribute(attributeName),

    getInnerDimensions: () => ({
      width: this.refs.menuItemsContainer.offsetWidth,
      height: this.refs.menuItemsContainer.offsetHeight
    }),

    hasAnchor: () => this.refs.menu.parentElement && this.refs.menu.parentElement.classList.contains('mdc-menu-anchor'),

    getAnchorDimensions: () => this.refs.menu.parentElement.getBoundingClientRect(),

    getWindowDimensions: () => ({
      width: window.innerWidth,
      height: window.innerHeight
    }),

    setScale: (x, y) => {
      // this.refs.menu.style[getTransformPropertyName(window)] = `scale(${x}, ${y})`
    },

    setInnerScale: (x, y) => {
      // this.refs.menuItemsContainer.style[getTransformPropertyName(window)] = `scale(${x}, ${y})`
    },

    getNumberOfItems: () => this.items.length,
    registerInteractionHandler: (type, handler) => this.refs.menu.addEventListener(type, handler),
    deregisterInteractionHandler: (type, handler) => this.refs.menu.removeEventListener(type, handler),
    registerBodyClickHandler: (handler) => document.addEventListener('click', handler),
    deregisterBodyClickHandler: (handler) => document.removeEventListener('click', handler),

    getYParamsForItemAtIndex: (index) => {
      const {offsetTop: top, offsetHeight: height} = this.items[index];
      return {top, height};
    },

    setTransitionDelayForItemAtIndex: (index, value) =>
      this.items[index].style.setProperty('transition-delay', value),

    getIndexForEventTarget: (target) => this.items.indexOf(target),

    notifySelected: (evtData) => {
      let evt = new CustomEvent(strings.SELECTED_EVENT, {
        detail: {
          index: evtData.index,
          item: this.items[evtData.index],
        }
      });
      this.refs.menu.dispatchEvent(evt);
    },

    notifyCancel: () => {
      let evt = new CustomEvent(strings.CANCEL_EVENT, {});
      this.refs.menu.dispatchEvent(evt);
      this.props.onClose();
    },

    saveFocus: () => {
      this.previousFocus = document.activeElement;
    },

    restoreFocus: () => {
      if (this.previousFocus) {
        this.previousFocus.focus();
      }
    },
    isFocused: () => document.activeElement === this.refs.menu,
    focus: () => this.refs.menu.focus(),
    getFocusedItemIndex: () => this.items.indexOf(document.activeElement),
    focusItemAtIndex: (index) => this.items[index].focus(),
    isRtl: () => getComputedStyle(this.refs.menu).getPropertyValue('direction') === 'rtl',
    setTransformOrigin: (origin) => {
      // this.refs.menu.style[`${getTransformPropertyName(window)}-origin`] = origin;
    },
    setPosition: (position) => {
      this.refs.menu.style.left = 'left' in position ? position.left : null;
      this.refs.menu.style.right = 'right' in position ? position.right : null;
      this.refs.menu.style.top = 'top' in position ? position.top : null;
      this.refs.menu.style.bottom = 'bottom' in position ? position.bottom : null;
    },
    getAccurateTime: () => window.performance.now(),
  });

  get items() {
    const {menuItemsContainer} = this.refs;
    return [].slice.call(menuItemsContainer.querySelectorAll('.mdc-list-item[role]'));
  }

  componentDidUpdate() {
    if (this.props.open && !this.foundation.isOpen()) this.foundation.open();
  }

  componentDidMount() {
    this.foundation.init();
  }

  componentWillUnmount() {
    this.foundation.destroy();
  }

  render() {
    const {openFrom, className, children} = this.props;
    const {classes} = this.state;
    const MenuClasses = classNames(
      cssClasses.ROOT,
      OPENFROMS[openFrom],
      className,
      classes.toJS().join(' ')
    );
    const ListClasses = classNames('mdc-list', strings.ITEMS_SELECTOR);

    return (
      <div ref="menu"
           tabIndex="-1"
           className={MenuClasses}
      >
        <ul className={ListClasses} role='menu'
            aria-hidden={true} ref='menuItemsContainer'>
          {children}
        </ul>
      </div>
    )
  }
}

Menu.propTypes = {
  openFrom: PropTypes.oneOf(keys(OPENFROMS)),
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

Menu.defaultProps = {
  openFrom: "top-left",
};

export default Menu;
