import React, { Component } from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="img-container">
              <img
                src="./imgs/weather-icon.png"
                className="img-thumbnail custom-img"
              />
            </div>
          </div>
          <div className="col-6 text-white">
            <h1 className="font-weight-bold display-3">Weather Application</h1>
            <p className="font-weight-lighter" style={{ fontSize: "30px" }}>
              Get weather from every city you want right now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
