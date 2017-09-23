import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import FormField from "../FormField/index";
import _ from 'lodash';
import * as authActions from '../../actions/authActions';
import {Link} from 'react-router-dom';

class AuthRegister extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });

  }

  validateEmail(email) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  handleSubmit(event) {
    event.preventDefault();

    const email = this.state.email.trim();
    const password = this.state.password;
    const name = this.state.name;
    let _errors = {};


    /* check if email and password are both empty string
       => render error message for empty fields (required field...) */
    if (email === '') {
      _errors.email = 'Email field is required';
    }

    if (password === '') {
      _errors.password = 'Password field is required';
    }

    if (name === '') {
      _errors.name = 'Name field is required';
    }

    /* check email validity
       => render error message for invalid email */

    if (email.length) {
      if (!this.validateEmail(email)) {
        _errors.email = 'Invalid email';
      }
    }

    if (!_.isString(name) || name.length <= 2 || name.length > 15) {
      _errors.name = 'Invalid name';
    }

    // state errors
    if (_errors.email || _errors.password || _errors.name) {
      this.setState({
        errors: _errors,
      });
      return;
    }

    // if data is valid, submit to client-side storage (just for development purposes)
    this.onSave(name, email, password);
  }

  onSave(name, email, password) {
    this.props.actions.createNewAccount(name, email, password)
  }

  render() {
    const {errors} = this.state;

    return (

      <section className="hf-register__section">
        <div className="back-link">
          <Link to="/">Back to Home</Link>
        </div>
        <main className="hf-register__main hf-register__main--flex" role="main">
          <article className="hf-register__content">
            <div className="hf-register__form--wrapper">
              <div className="hf-register__form--box">
                {/* Logo */}
                <h1></h1>

                {/* Form Fields */}
                <div>
                  <form className="hf-form" onSubmit={this.handleSubmit}>
                    {/* Name Field */}
                    <div className="hf-formfield__positioner">
                      <div className="hasError">{errors.name ? errors.name : null}</div>
                      <FormField>
                        <input type="text" name="name" className="hf-input"
                               aria-label="Name" aria-required="true"
                               placeholder="Your Name" maxLength="30"
                               autoCapitalize="off" autoCorrect="off"
                               onChange={this.handleNameChange}
                        />
                      </FormField>
                    </div>

                    {/* Email Field */}
                    <div className="hf-formfield__positioner">
                      <div className="hasError">{errors.email ? errors.email : null}</div>
                      <FormField>
                        <input type="text" name="email" className="hf-input"
                               aria-label="Email" aria-required="true"
                               placeholder="Email" maxLength="30"
                               autoCapitalize="off" autoCorrect="off"
                               onChange={this.handleEmailChange}
                        />
                      </FormField>
                    </div>

                    {/* Password Field */}
                    <div className="hf-formfield__positioner">
                      <div className="hasError">{errors.password ? errors.password : null}</div>
                      <FormField>
                        <input type="password" name="password" className="hf-input"
                               aria-label="Password" aria-required="true"
                               placeholder="Password"
                               autoCapitalize="off" autoCorrect="off"
                               onChange={this.handlePasswordChange}
                        />
                      </FormField>
                    </div>
                    {/* Submit Button */}
                    <div className="hf-formfield__block text-center hf-formfield__margin">
                      <input type="submit" className="btn btn-primary" value="sign up"/>
                    </div>
                  </form>
                </div>

              </div>

              {/* have an account => sign in */}
              <div className="hf-register__form--box">
                <p className="small-text">
                  <span className="m-right">Already have an account ?</span><Link to="/login">Sign in</Link>
                </p>
              </div>
            </div>
          </article>
        </main>
      </section>
    );

  }
}

PropTypes.propTypes = {};

PropTypes.defaultProps = {};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default withRouter(connect(null, mapDispatchToProps)(AuthRegister));
