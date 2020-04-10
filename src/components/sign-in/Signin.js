import React from "react";
import "./Signin.scss";
import FormInput from "../form-input/FormInput";
import SubmitButton from "../submit-button/SubmitButton";

import { signInWithGoogle } from "../../firebase/firebase-utils";

class SigninForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    //console.log(event.target);

    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <h3>Already have an Account?</h3>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            name="email"
            handleChange={this.handleChange}
            label="Email"
          />

          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="button-container">
            <SubmitButton type="submit">sign in</SubmitButton>
            <SubmitButton isGoogleButton onClick={signInWithGoogle}>
              Sign in with Google
            </SubmitButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SigninForm;
