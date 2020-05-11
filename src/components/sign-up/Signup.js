import React, { useState } from "react";
import "./Signup.scss";
import FormInput from "../form-input/FormInput";
import SubmitButton from "../submit-button/SubmitButton";
import { connect } from "react-redux";
import { signupStart } from "../../redux/user/user-actions";

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signupStart(userCredentials)),
});

const SignupForm = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

     if (password !== confirmPassword) {
      alert("Please make sure that passwords match");
      return;
    }

    signUpStart({ email, password, displayName });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({...userCredentials, [name]: value });
  };
 
  return (
    <div className="sign-up">
      <h3>I don't have an account</h3>
      <span>Sign up with an email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <SubmitButton type="submit">SIGN UP</SubmitButton>
      </form>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(SignupForm);
