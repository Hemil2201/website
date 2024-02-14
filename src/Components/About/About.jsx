import React from "react";
import Common from "../Common/Common";
import web from "../Assets/hp.svg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to about page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
