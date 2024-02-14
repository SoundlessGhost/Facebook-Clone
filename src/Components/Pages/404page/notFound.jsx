/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./notFound.css";
import robot from "../../../assets/Images/robot.png";
const NotFound = () => {
  return (
    <div>
      <div className="NotFound__Container">
        <div>
          <p className="NotFound_Tittle">Facebook Clone</p>
          <p className="errorMsz">
            <span>404.</span>That's an error .
          </p>
          <p>
            The requested url was not found on this server.
            <span>
              That's all <br /> we Know.
            </span>
          </p>
        </div>
        <img src={robot} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
