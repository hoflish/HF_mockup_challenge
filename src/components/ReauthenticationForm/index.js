import React, { useState } from "react";

import { useFirebase } from "../../context/firebase-context";
import { FormField } from "..";

const ReauthenticationForm = ({ onSuccess }) => {
  const [form, setForm] = useState({ password: "", error: "" });
  const { firebase } = useFirebase();

  function onChangePassword(event) {
    setForm({ password: event.target.value, error: "" });
  }

  function onSubmit(event) {
    event.preventDefault();

    if (!form.password) {
      setForm({ ...form, error: "Password can't be blank" });
      return;
    }

    const credential = firebase.getCredential(form.password);
    firebase
      .doReauthenticationWithCredential(credential)
      .then(() => {
        onSuccess();
      })
      .catch(error => {
        if (error.code === "auth/wrong-password") {
          setForm({ password: "", error: error.message });
        }
        // TODO: handle other errors
        console.log(error);
      });
  }
  return (
    <div className="he-confirm-password-form">
      <div className="has-text-centered" style={{ marginBottom: "20px" }}>
        <h4 className="title is-4">Confirm password to continue</h4>
      </div>

      <form className="box" onSubmit={onSubmit}>
        <FormField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          error={form.error}
          onChange={onChangePassword}
        />
        <button className="button is-primary is-fullwidth" type="submit">
          Confirm password
        </button>
      </form>

      <div className="has-text-centered">
        <p className="is-size-7">
          <strong>Tip: </strong>Your are performing a protected action, we won't
          ask for your password again for a few minutes.
        </p>
      </div>
    </div>
  );
};

export default ReauthenticationForm;
