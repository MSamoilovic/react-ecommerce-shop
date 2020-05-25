import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/homepage/Homepage";
import Shop from "./components/pages/shop/Shop";
import Header from "./components/header/Header";
import SigninPage from "./components/pages/sign-in/SigninPage";
import SigninForm from "./components/sign-in/Signin";
import { connect } from "react-redux";
import CheckoutPage from "./components/pages/checkout/Checkout";
import { selectCurrentUser } from "./redux/user/user-selectors";
import { checkUserSession } from "./redux/user/user-actions";



const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route
          path="/signup"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SigninPage />
          }
        />
        <Route
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SigninForm />)}
        />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
