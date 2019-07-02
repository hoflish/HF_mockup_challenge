import React, { useState } from "react";

import { FormField } from "..";
import { useFirebase } from "../../context/firebase-context";

const initialState = {
  email: "",
  error: ""
};

const PasswordResetForm = ({ onEmailSent }) => {
  const [form, setForm] = useState(initialState);
  const { firebase } = useFirebase();

  function onChange(event) {
    setForm({ email: event.target.value, error: "" });
  }

  function onSubmit(event) {
    event.preventDefault();

    if (!form.email) {
      setForm({ ...form, error: "Please enter your email" });
      return;
    }

    firebase
      .doPasswordReset(form.email)
      .then(() => {
        // TODO: use global notification
        setForm(initialState);
        onEmailSent &&
          onEmailSent(
            "We've sent you an email with a link to reset your password."
          );
      })
      .catch(error => {
        // TODO: handle errors
        // see https://firebase.google.com/docs/reference/js/firebase.auth.Auth.html#sendpasswordresetemail
        const { message } = error;
        setForm({ ...form, error: message });
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <FormField
        name="email"
        value={form.email}
        placeholder="Email"
        error={form.error}
        onChange={onChange}
      />
      <button
        className="button is-primary is-fullwidth "
        type="submit"
        style={{ float: "right" }}
      >
        Send password reset email
      </button>
    </form>
  );
};

export default PasswordResetForm;
