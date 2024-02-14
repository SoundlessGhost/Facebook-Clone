// import React from 'react';
import "./RightNav.css";
import { userData } from "../../../utilities/user";
import ShowRightItem from "../ShowRightItem/ShowRightItem";
const RightNav = () => {
  return (
    <div className="rightNavContainer">
      <div className="my-4 pl-2">
        <p>Sponsored</p>
        <div className="Sponsored  cursor-pointer">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="ml-2">
            <p>
              CleanMyMac X. Get 20% <br /> off
            </p>
            <p className=" text-gray-400">cleanmymax.com</p>
          </div>
        </div>
      </div>
      <div className="pr-10">
        <hr />
      </div>
      <div className="my-4 pl-2">
        <p className="mb-2">Your Pages and profile</p>
        <div className="pagesClass mb-1">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9970/9970541.png"
            alt=""
          />
          <p>Shahed Abid Darpon</p>
        </div>
        <div className="pagesProfileClass pl-4">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8946/8946711.png"
            alt=""
          />
          <p>Switch Into Page</p>
        </div>
        <div className="pagesProfileClass pl-4">
          <img
            src="https://cdn-icons-png.flaticon.com/128/7718/7718319.png"
            alt=""
          />
          <p>Create Promotion</p>
        </div>
      </div>
      <div className="pr-10">
        <hr />
      </div>
      <div className="my-4 pl-2">
        <p>Contracts</p>
      </div>
      <div>
        {userData.map((user) => (
          <ShowRightItem key={user.id} user={user}></ShowRightItem>
        ))} 
      </div>
      <div className="pr-6 my-2">
        <hr />
      </div>
      <div>
        <p>Group conversations</p>
      </div>
    </div>
  );
};

export default RightNav;
