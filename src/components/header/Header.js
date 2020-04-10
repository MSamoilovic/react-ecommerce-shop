import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Zamy.jpg";
import "./Header.scss";
import { auth } from "../../firebase/firebase-utils";

const Header = ({ existingUser }) => {
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
        {existingUser ? (
          <div className="link" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link to="/signup" className="link">
            SIGN UP
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
