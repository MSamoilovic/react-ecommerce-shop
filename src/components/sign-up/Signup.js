import React from "react";
import "./Signup.scss";
import FormInput from "../form-input/FormInput";
import SubmitButton from "../submit-button/SubmitButton";
import { auth, getUserProfile } from "../../firebase/firebase-utils";

class SignupForm extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Please make sure that passwords match");

      return;
    }

    try {
      //kreiranje korisnika
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      //cuvanje korisnika u Firestore preko metoda iz util.js
      await getUserProfile(user, { displayName });
      //vracanje state na default vrednosti
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
        console.log('Error occured', err)
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    //Destrukturiranje state da se unesu kao values u inpute forme
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h3>I don't have an account</h3>
        <span>Sign up with an email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <SubmitButton type="submit">SIGN UP</SubmitButton>
        </form>
      </div>
    );
  }
}

export default SignupForm;
