import React from "react";
import aboutimg from "../assets/image/Capture n.PNG";
const About = () => {
  return (
    <div className="container-fluid pt-5">
      <div
        className="row justify-content-center align-item-center"
        id="clients"
      >
        <div className="col-md-5 sideborder mt-auto mb-auto ml-5 pl-5 pl-5">
          <h4>About Napollo</h4>
          <p>
            Napollo is a music streaming service that connects artistes to
            listeners in a way that has never been done before. Artists,
          </p>
          <p>
            musicians, music lovers, producers, no matter your taste or skills
            are, we are here to serve you the best all around the world
          </p>
          {/* </div> */}
        </div>

        <div className="col-md-5 ml-md-auto  justify-content-center align-item-center">
          <img src={aboutimg} alt="About" />
        </div>
      </div>
    </div>
  );
};
export default About;
