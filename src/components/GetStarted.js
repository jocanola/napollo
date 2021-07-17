import React from "react";
import "./GetStart.css";
import getstart from "../assets/image/Capture.PNG";

const GetStarted = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="row align-item-center" id="clients">
        <div className="col-md-5 mt-auto mb-auto ml-5 pl-5 getstarttext">
          <p>
            More fans, More Gigs, Less Eort Get better feedback, wider exposure
            and deeper industry access without ever switching tabs.
          </p>

          <button id="getstart">Let's get Start</button>
        </div>
        <div className="col-md-4 ml-md-auto slideRight">
          <img src={getstart} alt="Get Start" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
