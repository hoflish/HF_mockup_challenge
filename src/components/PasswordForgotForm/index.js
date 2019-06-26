import React from "react";
import { FormField } from "..";

const INITIAL_STATE = {
  email: "",
  error: ""
};

class PasswordForgotForm extends React.Component {
  state = {
    ...INITIAL_STATE
  };

  onChangeEmail = event => {
    this.setState({ email: event.target.value, error: "" });
  };

  onSubmit = event => {
    const { email } = this.state;
    const { firebase, onEmailSent } = this.props;
    event.preventDefault();

    if (!email) {
      this.setState({ error: "Please enter your email" });
      return;
    }

    firebase
      .doPasswordReset(email)
      .then(() => {
        onEmailSent &&
          onEmailSent(
            "We've sent you an email with a link to reset your password."
          );
      })
      .catch(error => {
        // TODO: handle errors
        // see https://firebase.google.com/docs/reference/js/firebase.auth.Auth.html#sendpasswordresetemail
        const { message } = error;
        this.setState({ error: message });
      });
  };

  render() {
    const { email, error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <FormField
          name="email"
          value={email}
          placeholder="Email"
          error={error}
          onChange={this.onChangeEmail}
        />
        <button
          className="button is-primary"
          type="submit"
          style={{ float: "right" }}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default PasswordForgotForm;
