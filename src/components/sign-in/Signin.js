import React, { useState } from "react";
import "./Signin.scss";
import FormInput from "../form-input/FormInput";
import SubmitButton from "../submit-button/SubmitButton";
import { connect } from "react-redux";
import {
  googleSigninStart,
  emailSigninStart,
} from "../../redux/user/user-actions";

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(googleSigninStart()),
  signInWithEmail: (email, password) =>
    dispatch(emailSigninStart({ email, password })),
});

const SigninForm = ({ signInWithEmail, signInWithGoogle }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const {email, password } = userCredentials

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userCredentials;
    signInWithEmail(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="signin">
      <h3>Already have an Account?</h3>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          value={email}
          name="email"
          handleChange={handleChange}
          label="Email"
        />

        <FormInput
          type="password"
          value={password}
          name="password"
          handleChange={handleChange}
          label="Password"
        />
        <div className="button-container">
          <SubmitButton type="submit">sign in</SubmitButton>
          <SubmitButton type="button" isGoogleButton onClick={signInWithGoogle}>
            Sign in with Google
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(SigninForm);
