import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/homepage/Homepage";
import Shop from "./components/pages/shop/Shop";
import Header from "./components/header/Header";
import SigninPage from "./components/pages/sign-in/SigninPage";
import { auth, getUserProfile } from "./firebase/firebase-utils";

class App extends React.Component {
  unsubscribeObservable = null;

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeObservable = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await getUserProfile(userAuth);

        //ukoliko se desi update podataka u Firebase, nakon auth
        userRef.onSnapshot((snapshot) => {
          /* console.log(snapshot);
          console.log(snapshot.data()); */

          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }

      //
      this.setState({currentUser: userAuth})
    });
  }

  componentWillUnmount() {
    this.unsubscribeObservable();
  }

  render() {
    return (
      <div>
        <Header existingUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SigninPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
