import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormField from "../FormField/index";


export default class AuthRegister extends Component {

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

  validateEmail(email) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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

    /* check email validity
       => render error message for invalid email */

    if (email) {
      if (!this.validateEmail(email)) {
        _errors.email = 'Invalid email';
      }
    }

    // state errors
    if (_errors.email || _errors.password) {
      this.setState({
        errors: _errors,
      });
      return;
    }

    // if data is valid, submit to client-side storage (just for development purposes)
    this.onSave(email, password, name);
  }

  onSave(email, password, name) {
  }


  render() {
    const {errors} = this.state;

    return (

      <section className="hf-register__section">
        <main className="hf-register__main hf-register__main--flex" role="main">
          <article className="hf-register__content">

            <div className="hf-register__form--wrapper">
              <div className="hf-register__form--box">
                {/* Logo */}
                <h1 className="hf-logo">IDEADATE</h1>

                {/* Form Fields */}
                <div>
                  <form className="uiForm" onSubmit={this.handleSubmit}>

                    {/* Name Field */}
                    <div className="hf-formfield__positioner">
                      <div className="hasError">{errors.email ? errors.email : null}</div>
                      <FormField>
                        <input type="text" name="name" className="hf-input"
                               aria-label="Name" aria-required="true"
                               placeholder="Your Name" maxLength="30"
                               autoCapitalize="off" autoCorrect="off"
                               onChange={() => {}}
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
                      <div className="hf-formfield">
                        <input type="password" name="password" className="hf-input"
                               aria-label="Password" aria-required="true"
                               placeholder="Password"
                               autoCapitalize="off" autoCorrect="off"
                               onChange={this.handlePasswordChange}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="hf-formfield__block hf-formfield__margin">
                      <input type="submit" className="" value="sign up"/>
                    </div>

                    {/* seperator (or) */}
                    <div className="seperator">
                      <div className="sep-line"></div>
                      <div className="sep-or">or</div>
                      <div className="sep-line"></div>
                    </div>

                    {/* forgot password */}
                    <div className="hf-formfield__margin text-center">
                      <a className="small-text" href="#">Forgot password ?</a>
                    </div>
                  </form>
                </div>

              </div>

              {/* have an account => sign in */}
              <div className="hf-form__box">
                <p className="small-text">
                  {`Already Have an account ?`}
                  <a className="" href="#"> Sign in</a>
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
