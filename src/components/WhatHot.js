import React from "react";
import "./GetStart.css";
import whathot from "../assets/image/Capture3.PNG";

const WhatHot = () => {
  return (
    <div className="container-fluid pt-2">
      <div className="row align-item-center" id="clients">
        <div className="col-md-4 mt-auto mb-auto ml-5 slideRight">
          <img src={whathot} alt="WhatHot" />
        </div>

        <div className="col-md-4 ml-md-auto mt-auto mb-auto">
          <img src={whathot} alt="WhatHot" />
        </div>
      </div>
    </div>
  );
};

export default WhatHot;
