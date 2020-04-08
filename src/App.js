import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/homepage/Homepage";
import Shop from "./components/pages/shop/Shop";
import Header from "./components/header/Header"
import SigninPage from './components/pages/sign-in/SigninPage'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SigninPage} />
      </Switch>
    </div>
  );
}

export default App;
