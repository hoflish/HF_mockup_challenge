import React from "react";

import { FormField, ReauthenticationForm } from "..";

class SettingsPassword extends React.Component {
  initialState = {
    fields: {
      password: "",
      password_confirmation: ""
    },
    fieldErrors: {},
    isModalActive: false
  };
  state = this.initialState;

  onChange = event => {
    const { fields, fieldErrors } = this.state;
    fields[event.target.name] = event.target.value;
    fieldErrors[event.target.name] = "";
    this.setState({ fields, fieldErrors });
  };

  validate = fields => {
    const errors = {};
    if (!fields.password) errors.password = "Password can't be blank";
    if (!fields.password_confirmation)
      errors.password_confirmation = "Password confirmation is required";

    if (
      fields.password &&
      fields.password_confirmation &&
      fields.password !== fields.password_confirmation
    ) {
      errors.password_confirmation =
        "New password and Confirm password do not match.";
    }

    if (fields.password && fields.password.length < 6) {
      errors.password = "Password should be at least 6 characters";
    }
    return errors;
  };

  onSubmit = event => {
    const { fields } = this.state;
    const fieldErrors = this.validate(fields);

    this.setState({ fieldErrors });

    if (Object.keys(fieldErrors).length) return;

    this.onUpdatePassword(fields.password);

    event.preventDefault();
  };

  onUpdatePassword = password => {
    const { firebase } = this.props;
    firebase
      .doPasswordUpdate(password)
      .then(() => {
        this.setState(this.initialState, () => {
          // TODO: notify user that password is updated
          console.log("Password updated");
        });
      })
      .catch(error => {
        const { code } = error;
        if (code === "auth/requires-recent-login") {
          // pop-up a modal for prompting the user to re-authenticate
          this.setState({ isModalActive: true });
        }
        console.log(error);
      });
  };

  onReauthenticationSuccess = () => {
    const {
      fields: { password }
    } = this.state;

    this.setState({ isModalActive: false }, () => {
      this.onUpdatePassword(password);
    });
  };

  render() {
    const { fields, fieldErrors, isModalActive } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <FormField
            label="New password"
            name="password"
            type="password"
            value={fields.password}
            error={fieldErrors.password}
            onChange={this.onChange}
          />
          <FormField
            label="Confirm new password"
            name="password_confirmation"
            type="password"
            value={fields.password_confirmation}
            error={fieldErrors.password_confirmation}
            onChange={this.onChange}
          />
          <button className="button is-primary" type="submit">
            Update password
          </button>
        </form>

        <div className={`modal ${isModalActive ? "is-active" : ""}`}>
          <div className="modal-background" />
          <div className="modal-content">
            <ReauthenticationForm onSuccess={this.onReauthenticationSuccess} />
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => this.setState({ isModalActive: false })}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default SettingsPassword;
