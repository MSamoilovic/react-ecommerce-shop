import React from "react";
import "./SigninPage.scss";
import {Link} from 'react-router-dom'
import SignupForm from '../../sign-up/Signup'

const SigninPage = () => {
  return (
    <div className="signin-page">
      <SignupForm />
      <Link to="/signin" className="signin-page-link">
        I already have an account
      </Link>
    </div>
  );
};

export default SigninPage;
