import React from "react";
import logo from "../assets/image/Capture n.PNG";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      {/* contains 3 main division */}
      <div class="container-fluid">
        {/* first division */}
        <div class="row text-center justify-content-between p-3">
          <div class="col-md-3">
            <img src={logo} id="logo" alt="Logo" />
            <h6 style={{ margin: "10px" }}>@ 2021 Napollo</h6>
            Legal Policy cookies
          </div>
          {/* Second section is divided into for subsection */}
          <div class="col-md-1">
            {/* first sub-section */}
            <ul id="contact">
              <li>Napollo</li>
              <li>About</li>
              <li>Forgot password</li>
              <li>contact</li>
            </ul>
          </div>
          {/* second sub-section */}
          <div class="col-md-1">
            <ul id="contact">
              <li>Artist Membership</li>
              <li>Overview</li>
              <li>Price</li>
              <li>Opportunities</li>
              <li>Shows</li>
              <li>Help</li>
            </ul>
          </div>
          {/* third sub-section */}
          <div class="col-md-1">
            <ul id="contact">
              <li>Listener</li>
              <li>Overview</li>
              <li>Price</li>
              <li>Suggested Playlists</li>
              <li>Discover</li>
              <li>Reviews</li>
            </ul>
          </div>
          {/* forth sub-section */}
          <div class="col-md-1">
            <ul id="contact">
              <li>Listener</li>
              <li>Term of Service</li>
              <li>Privacy Policies</li>
              <li>Copyright Policies</li>
              <li>Cookies</li>
              <li>Listener</li>
              <li>TradeMark</li>
            </ul>
          </div>
          {/* Third Main section */}
          <div class="col-md-4">
            <h5>Follow Us</h5>
            <p>social icon</p>
            <p>download</p>
            <p>Google Play icon App Store icon</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
