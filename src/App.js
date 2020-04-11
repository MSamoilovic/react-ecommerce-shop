import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/homepage/Homepage";
import Shop from "./components/pages/shop/Shop";
import Header from "./components/header/Header";
import SigninPage from "./components/pages/sign-in/SigninPage";
import SigninForm from "./components/sign-in/Signin";
import { auth, getUserProfile } from "./firebase/firebase-utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";

class App extends React.Component {
  unsubscribeObservable = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeObservable = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await getUserProfile(userAuth);

        //ukoliko se desi update podataka u Firebase, nakon auth
        userRef.onSnapshot((snapshot) => {
          /* console.log(snapshot);
          console.log(snapshot.data()); */

          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }

      //
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeObservable();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signup" component={SigninPage} />
          <Route path="/signin" component={SigninForm} />
        </Switch>
      </div>
    );
  }
}

//mapDispatchToProps poziva akciju iz reducera, koju mozemo iskoristit kao props
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
