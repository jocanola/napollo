import React from "react";
import "./GetStart.css";
import listen from "../assets/image/Capture 4.PNG";

const Listen = () => {
  return (
    <div
      className="container-fluid pt-5 pb-5"
      style={{ backgroundColor: "#ff8d00fa" }}
    >
      <div className="row align-item-center" id="clients">
        <div className="col-md-4 ml-md-auto mt-auto mb-auto slideRight">
          <img src={listen} alt="Expand" />
        </div>

        <div className="col-md-4 mr-md-auto mt-auto mb-auto slideLeft">
          <h1>Listen and enjoy all trending music</h1>

          <ul id="">
            <li>What’s hot</li>
            <li>By genre</li>
            <li>By location</li>
            <li>Lot’s more...</li>
          </ul>
          <br />
          {/* </div> */}
          <button>Start listening</button>
        </div>
      </div>
    </div>
  );
};

export default Listen;
