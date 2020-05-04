import React from "react";
import "./Signin.scss";
import FormInput from "../form-input/FormInput";
import SubmitButton from "../submit-button/SubmitButton";
import {connect} from 'react-redux'
import { googleSigninStart, emailSigninStart } from '../../redux/user/user-actions'

const mapDispatchToProps = dispatch => ({
  signInWithGoogle: () => dispatch(googleSigninStart()),
  signInWithEmail: (email, password) => dispatch(emailSigninStart({email, password}))
})

class SigninForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {signInWithEmail} = this.props
    const { email, password } = this.state;

    signInWithEmail(email, password)
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { signInWithGoogle } = this.props
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
            <SubmitButton type="button" isGoogleButton onClick={signInWithGoogle}>
              Sign in with Google
            </SubmitButton>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SigninForm);
