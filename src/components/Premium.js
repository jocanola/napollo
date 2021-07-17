import React from "react";
import "./GetStart.css";
import expand from "../assets/image/Capture7..PNG";

const Premium = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="row align-item-center" id="clients">
        <div className="col-md-4 ml-md-auto slideRight">
          <img src={expand} alt="Expand" />
        </div>

        <div className="col-md-4 ml-md-auto">
          <div className="col-sm-4">
            <div className="card text-center">
              <div className="title">
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                <h2>Basic</h2>
              </div>
              <div className="price">
                <h4>
                  <sup>Rs.</sup>700
                </h4>
              </div>
              <div className="option">
                <ul>
                  <li>
                    {" "}
                    <i className="fa fa-check" aria-hidden="true"></i>10 GB Space
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-check" aria-hidden="true"></i>3 Domain Names
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-check" aria-hidden="true"></i>20 Email
                    Address
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-times" aria-hidden="true"></i>Live Support
                  </li>
                </ul>
              </div>
              <a href="hgh">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
