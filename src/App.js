import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/homepage/Homepage";
import Shop from "./components/pages/shop/Shop";
import Header from "./components/header/Header";
import SigninPage from "./components/pages/sign-in/SigninPage";
import SigninForm from "./components/sign-in/Signin";
import { auth, getUserProfile } from "./firebase/firebase-utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import CheckoutPage from "./components/pages/checkout/Checkout";
import { selectCurrentUser } from "./redux/user/user-selectors";

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
          <Route
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninPage />
            }
          />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninForm />
            }
          />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

//mapDispatchToProps poziva akciju iz reducera, koju mozemo iskoristit kao props
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
