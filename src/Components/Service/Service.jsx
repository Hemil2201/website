import React from "react";
import Card from "./ Card/Card";
import Sdata from "../Sdata";
import "./Service.css";

const Service = () => {
  return (
    <>
      <div className="my-5 service-title-container">
        <h1 className="text-center service-title">Our Services</h1>
      </div>
      <div className="container-fluid service-container mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4 service-card-container">
              {Sdata.map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    description={val.description}
                    direction={val.direction}
                    className="service-card"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
