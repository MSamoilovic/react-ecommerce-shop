import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Zamy.jpg";
import "./Header.scss";
//connect vezuje komponentu sa redux store
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase-utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import {selectCurrentUser} from '../../redux/user/user-selectors'
import {selectCartHidden} from '../../redux/cart/cart-selectors'

const Header = ({ currentUser, hiddenCart }) => {
  /* console.log(Logo); */
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <div className="link-container">
        <Link to="/shop" className="link">
          SHOP
        </Link>
        <Link to="/contact" className="link">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="link" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link to="/signup" className="link">
            SIGN UP
          </Link>
        )}
        <CartIcon />
      </div>
      {hiddenCart ? null : <CartDropdown />}
    </div>
  );
};

//mapStatetoProps funkcija povlaci state iz userReducera, koji je deo mainReducera
const mapStatetoProps = (state) => ({
  //prosledjeni state je mainReducer
  currentUser: selectCurrentUser(state),
  hiddenCart: selectCartHidden(state),
});

export default connect(mapStatetoProps)(Header);
