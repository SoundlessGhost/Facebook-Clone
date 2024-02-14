// import React from 'react';
import "./LeftNav.css";
import ShowNavItem from "../ShowNavItem/ShowNavItem";
// import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { leftNavData } from "../../../utilities/leftNav";
import { useState } from "react";
const LeftNav = () => {
  const [count, setCount] = useState(leftNavData.slice(0, 9));
  const handleSeeMore = () => {
    setCount(count.length === 9 ? leftNavData : leftNavData.slice(0, 9));
  };
  return (
    <div className="leftNavContainer overflow-scroll">
      <div className="user">
        <img
          src="https://cdn-icons-png.flaticon.com/128/9970/9970541.png"
          alt=""
        />
        <p>Shahed Abid Darpon</p>
      </div>
      <div>
        {count.map((item) => (
          <ShowNavItem key={item.id} item={item}></ShowNavItem>
        ))}
        <div onClick={handleSeeMore} className="showItem">
          {count.length === 9 ? (
            <FontAwesomeIcon className="seeMoreImg" icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon className="seeMoreImg" icon={faAngleUp} />
          )}
          <p>{count.length===9?'See more':"See less"}</p>
        </div>
      </div>
      <div className="pr-10 pl-2">
      <hr />
      </div>
      <div className="my-4">
        <p className="mb-2  text-gray-500">Your Shortcuts</p>
        <div className="user">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9970/9970541.png"
            alt=""
          />
          <p>Shahed Abid Darpon</p>
        </div>
        <p className="terms">
          <span>Privacy</span> . <span>Terms</span> . <span>Advertising</span> .
          <span> Ad choices </span> . <span>Cookies</span> . More . Meta 2024
        </p>
      </div>
    </div>
  );
};

export default LeftNav;
