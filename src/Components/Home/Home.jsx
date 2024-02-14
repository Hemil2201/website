import React from "react";
import Common from "../Common/Common";
import web from "../Assets/hp.svg";

const Home = () => {
  return (
    <>
      <Common
        name="Graw your Business With"
        imgsrc={web}
        visit="/Service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
