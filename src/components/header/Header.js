import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Zamy.jpg";
import "./Header.scss";

const Header = () => {
  console.log(Logo);
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
      </div>
    </div>
  );
};

export default Header;
