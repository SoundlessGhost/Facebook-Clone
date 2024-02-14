// import React from 'react';
import "./Header.css";
import fbIcon from "../../../../public/fbIcon.png";
import home from "../../../../src/assets/HeaderImg/house.png";
import marketPlace from "../../../../src/assets/HeaderImg/marketplace.png";
import group from "../../../../src/assets/HeaderImg/user.png";
import game from "../../../../src/assets/HeaderImg/joystick.png";
import menu from "../../../../src/assets/HeaderImg/menu.png";
import user from "../../../../src/assets/HeaderImg/user.png";
import {useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOut,
  faGear,
  faQuestion,
  faMoon,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  const [mode, setMode] = useState(false);
  const handleDropDown = () => {
    setMode(!mode);
  };
  
  return (
    <div>
      <div className="HeaderGridClass">
        <div className="imgAndInput">
          <Link to="/">
            <img src={fbIcon} alt="" />
          </Link>
          <input type="search" name="" id="" placeholder="Search Facebook" />
        </div>
        <div className="middleImagesClass">
          <img src={home} alt="" />
          <img src={marketPlace} alt="" />
          <img src={group} alt="" />
          <img src={game} alt="" />
        </div>
        <div className="rightImagesClass">
          <img src={menu} alt="" />
          <img
            src="https://cdn-icons-png.flaticon.com/128/9333/9333888.png"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/3247/3247250.png"
            alt=""
          />
          <img onClick={handleDropDown} src={user} alt="" />
        </div>
      </div>
      <hr />
      {/* popup section */}
      <div className="relative">
        {mode ? (
          <div className="popupContainer">
            <div className="popupUser_Container">
              <div className="popUpUser mb-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9970/9970541.png"
                  alt=""
                />
                <p>Shahed Abid Darpon</p>
              </div>
              <hr />
              <div className="popUpUser my-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1654/1654162.png"
                  alt=""
                />
                <p>Set pages image</p>
              </div>
              <hr />
              <div className="text-center">
                <button className="popUpBtn">See all Profiles</button>
              </div>
            </div>
            <p className="fontIconClassContainer mb-1">
              <FontAwesomeIcon className="mr-2 fontIconClass" icon={faGear} />{" "}
              Settings & privacy
            </p>
            <p className="fontIconClassContainer mb-1">
              <FontAwesomeIcon
                className="mr-2 fontIconClass"
                icon={faQuestion}
              />{" "}
              Help & support
            </p>
            <p className="fontIconClassContainer mb-1">
              <FontAwesomeIcon className="mr-2 fontIconClass" icon={faMoon} />{" "}
              Display & accessibility
            </p>
            <p className="fontIconClassContainer mb-1">
              <FontAwesomeIcon
                className="mr-2 fontIconClass"
                icon={faMessage}
              />{" "}
              Give feedback
            </p>
            <p className="fontIconClassContainer mb-4">
              <FontAwesomeIcon
                className="mr-2 fontIconClass"
                icon={faSignOut}
              />{" "}
              log out
            </p>
            <p className="popupTerms">
              <span>Privacy</span> . <span>Terms</span> .{" "}
              <span>Advertising</span> .<span> Ad choices </span> .{" "}
              <span>Cookies</span> . More . Meta 2024
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
