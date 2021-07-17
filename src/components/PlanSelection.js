import React from "react";
import "./GetStart.css";
import expand from "../assets/image/Capture7..PNG";
import Premium from "./Premium";

const PlanSelection = () => {
  return (
    <section id="getstart">
      <div className="container-fluid pt-5">
        <div className="row align-item-center" id="clients">
          <Premium />
          <Premium />
        </div>
      </div>
    </section>
  );
};

export default PlanSelection;
