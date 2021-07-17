import React from "react";
import "./NavBar.css";
import logo from "../assets/image/Capture n.PNG";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" id="logo" className="header__logo" />
      <SearchBar />
      <div className="header__nav">
        <div className="header__option">
          {/* Apple Store Logo */}
          <span className="header__optionTwo">App Store</span>
        </div>
        <div className="header__option">
          {/* Google Store Logo */}
          <span className="header__optionTwo">Google store</span>
        </div>
        {/* Sign In/Sign Up */}
        <div className="header__option">SignUp/SignIn</div>

        <div className="header__optionButton">
          <button>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
