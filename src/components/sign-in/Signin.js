import React from "react";
import "./Signin.scss";
import FormInput from  "../form-input/FormInput"
import SubmitButton from "../submit-button/SubmitButton"

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
            required
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
          
          <SubmitButton type="submit"> 
            sign in
          </SubmitButton>
        </form>
      </div>
    );
  }
}

export default SigninForm;
