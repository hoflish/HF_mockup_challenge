import React, {Component} from 'react';
import FormField from "../FormField/index";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as authActions from '../../actions/authActions';
import {bindActionCreators} from "redux";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();

    const email = this.state.email.trim();
    const password = this.state.password;
    let _errors = {};


    /* check if email and password are both empty string
       => render error message for empty fields (required field...) */
    if (email === '') {
      _errors.email = 'Email field is required';
    }

    if (password === '') {
      _errors.password = 'Password field is required';
    }


    // state errors
    if (_errors.email || _errors.password || _errors.name) {
      this.setState({
        errors: _errors,
      });
      return;
    }

    // if data is valid, submit to client-side storage (just for development purposes)
    this.props.actions.logInUser(email, password);
  }


  render() {
    const {errors} = this.state;
    return(
      <section className="hf-register__section">
        <div className="back-link">
          <Link to="/">Back to Home</Link>
        </div>
        <main className="hf-register__main hf-register__main--flex" role="main">
          <article className="hf-register__content">
            <div className="hf-register__form--wrapper">
              <div className="hf-register__form--box">
                {/* Form Fields */}
                <div>
                  <form className="hf-form" onSubmit={this.handleSubmit}>
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

                    {/* forgot password */}
                    <div className="hf-formfield__margin text-center">
                      <a className="small-text" href="#">Forgot password ?</a>
                    </div>
                  </form>
                </div>

              </div>

              {/* have not an account => sign in */}
              <div className="hf-register__form--box">
                <p className="small-text">
                  <span className="m-right">have not an account ?</span>
                  <Link to="/register">Sign up</Link>
                </p>
              </div>
            </div>
          </article>
        </main>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Login));
