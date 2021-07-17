import React from "react";
import "./GetStart.css";
import expand from "../assets/image/Capture7..PNG";

const Expand = () => {
  return (
    // Expand Section
    <div className="container-fluid pt-5">
      <div className="row align-item-center">
        <div className="col-md-4 mr-md-auto mt-auto mb-auto ml-5">
          
          <h4>JIM RICHMOND SVP</h4>
          More fans, More Gigs, Less Eort Get better feedback, wider exposure
          and deeper industry access without ever switching tabs.
          <br />
          
          <button>Let's Get Start</button>
        </div>

        <div className="col-md-4 ml-md-auto">
          <img src={expand} alt="Expand" />
        </div>
      </div>
    </div>
  );
};

export default Expand;
