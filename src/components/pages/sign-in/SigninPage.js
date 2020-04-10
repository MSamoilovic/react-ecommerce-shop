import React from "react";
import "./SigninPage.scss";
import SigninForm from "../../sign-in/Signin";
import SignupForm from '../../sign-up/Signup'

const SigninPage = () => {
  return (
    <div className="signin-page">
      <SigninForm />
      <SignupForm />
    </div>
  );
};

export default SigninPage;
