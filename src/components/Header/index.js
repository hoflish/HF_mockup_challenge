import React, {Component} from 'react';
import me from '../../images/me.jpg';
import './header.css';
import Menu from '../Menu';
import {BROWSE_MENU, ACCOUNT_MENU} from "../../config/_constants"
import {Link, withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {authenticate} from '../../actions/authActions';


class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isBrowseMenuOpen: false,
      isAccountMenuOpen: false,
      isResponsiveMenuOpen: false,
    };

    this.onOpenAccountMenu = this.onOpenAccountMenu.bind(this);
    this.onCloseAccountMenu = this.onCloseAccountMenu.bind(this);
    this.onOpenBrowseMenu = this.onOpenBrowseMenu.bind(this);
    this.onCloseBrowseMenu = this.onCloseBrowseMenu.bind(this);
    this.onOpenResponsiveMenu = this.onOpenResponsiveMenu.bind(this);
    this.onCloseResponsiveMenu = this.onCloseResponsiveMenu.bind(this);
  }


  onOpenBrowseMenu(e) {
    e.preventDefault();
    this.setState({
      isBrowseMenuOpen: true,
    });
  }

  onCloseBrowseMenu() {
    this.setState({
      isBrowseMenuOpen: false,
    });
  }

  onOpenAccountMenu(e) {
    e.preventDefault();
    this.setState({
      isAccountMenuOpen: true,
    });
  }

  onCloseAccountMenu() {
    this.setState({
      isAccountMenuOpen: false,
    });
  }

  onOpenResponsiveMenu(e) {
    e.preventDefault();
    this.setState({
      isResponsiveMenuOpen: true,
    });
  }

  onCloseResponsiveMenu(e) {
    e.preventDefault();
    this.setState({
      isResponsiveMenuOpen: false,
    });
  }

  render() {
    const {isAccountMenuOpen, isBrowseMenuOpen, isResponsiveMenuOpen} = this.state;
    const {authenticated, user} = this.props;

    return (
      <header>
        <div className="hf-header">
          {/* App logo */}
          <div className="hf-header__left">
            <div className="hf-header__nav-item">
              <a href="#" className="hf-logo">IDEA<span>DATE</span></a>
            </div>
          </div>
          {/* Browse section */}
          <div className="hf-header__middle">
            <div className="hf-header__nav-item">
              <a href="#" className="hf-browse" role="button" onClick={this.onOpenBrowseMenu}>
                Browse <i data-feather="chevron-down"/>
              </a>
              <div className="mdc-menu-anchor">
                <Menu items={BROWSE_MENU}
                      onClose={this.onCloseBrowseMenu}
                      open={isBrowseMenuOpen}/>
              </div>
            </div>
          </div>
          <div className="hf-header__nav-item hf-menu">
            <a href="#" className="menu-icon" role="button" onClick={this.onOpenResponsiveMenu}><i data-feather="menu"/></a>
            {isResponsiveMenuOpen ?
              <div className="responsive-menu">
                  <ul className="responsive-menu__content">
                    <span className="close">
                      <a role="button" onClick={this.onCloseResponsiveMenu} href="#">X</a>
                    </span>
                    <li><Link to="/home" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>
                  </ul>
              </div>
              : null}
          </div>

          {/* User info */}
          {authenticated ? <div className="hf-header__right">
            {/* notification icon */}
            <span className="hf-header__icon">
             <i data-feather="bell"/>
           </span>

            {/* like icon */}
            <span className="hf-header__icon">
             <i data-feather="heart"/>
           </span>

            {/* avatar  */}
            <div className="hf-avatar">
              <img src={user.avatar} alt=""/>
            </div>

            {/* user profile (dropdown) */}
            <div className="account_dropdown">
              <a href="#" className="hf-browse" role="button" onClick={this.onOpenAccountMenu}>
                <i data-feather="chevron-down"/>
              </a>
              <div className="mdc-menu-anchor">
                <Menu items={ACCOUNT_MENU} onClose={this.onCloseAccountMenu}
                      open={isAccountMenuOpen}/>
              </div>
            </div>
          </div> :
            <div className="hf-auth__buttons hf-header__right">
              <span className="hf-header__nav-item">
                <Link to="/login">sign in</Link>
              </span>
              <span className="hf-header__nav-item">
                <Link to="/register">sign up</Link>
              </span>
            </div>}
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  authenticated: state.authReducer.authenticated,
  user: state.authReducer.user,
});

export default withRouter(connect(mapStateToProps)(Header));
