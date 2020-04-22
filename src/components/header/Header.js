import React from "react";
import Logo from "../../assets/Zamy.jpg";
//import "./Header.scss";
//connect vezuje komponentu sa redux store
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase-utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import {
  HeaderContainer,
  LogoContainer,
  LinkContainer,
  LinkOption,
  HeaderImage,
} from "./Header.styles";

const Header = ({ currentUser, hiddenCart }) => {
  /* console.log(Logo); */
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <HeaderImage src={Logo} alt="Logo" className="logo" />
      </LogoContainer>
      <LinkContainer>
        <LinkOption to="/shop">SHOP</LinkOption>
        <LinkOption to="/contact">CONTACT</LinkOption>
        {currentUser ? (
          <LinkOption as="div" onClick={() => auth.signOut()}>
            Sign out
          </LinkOption>
        ) : (
          <LinkOption to="/signup">SIGN UP</LinkOption>
        )}
        <CartIcon />
      </LinkContainer>
      {hiddenCart ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

//mapStatetoProps funkcija povlaci state iz userReducera, koji je deo mainReducera
const mapStatetoProps = (state) => ({
  //prosledjeni state je mainReducer
  currentUser: selectCurrentUser(state),
  hiddenCart: selectCartHidden(state),
});

export default connect(mapStatetoProps)(Header);
