/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react';
import like from "../../../assets/react/like.png";
import { useState } from "react";

const ShowMainItem = ({ item }) => {
  const { userName, userImg, extraImg, buttons } = item;
  const [mode, setMode] = useState(false);
  return (
    <div className="contentContainer mb-4 my-6">
      <div>
        <div className="itemContainer px-3 py-2">
          <div className="userAndDate">
            <img src={userImg} alt="" />
            <div className="m-0">
              <p className="userName  ml-1">{userName}</p>
              <p className="date  ml-1">14 February 2024 </p>
            </div>
          </div>
          <div className="ModifyContainer">
            <div className="editBtn">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3018/3018442.png"
                alt=""
              />
            </div>
            <div className="removeBtn">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3786/3786212.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <p className="fbTitle px-3 py-1">
          Looking forward to what tomorrow brings.
        </p>
        <div>
          <img src={extraImg} alt="" />
        </div>
      </div>
      {/* react */}
      <div className="reactShowContainer my-2 px-2">
        <div className="subReact">
          <img
            src="https://cdn-icons-png.flaticon.com/128/11820/11820106.png"
            alt=""
          />
          <div className="loveIcon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/10307/10307888.png"
              alt=""
            />
          </div>
          <p className="ml-1">{buttons.like}</p>
        </div>
        <div className="flex">
          <p>
            {buttons.comment} <span>comments</span>
          </p>
          <p className="ml-5">
            {buttons.share} <span>shares</span>
          </p>
        </div>
      </div>
      <div className="px-4">
        <hr />
      </div>
      <div className="likeShareContainer my-2">
        <div onClick={() => setMode(!mode)} className="ImgIcon">
          <img
            src={
              mode
                ? "https://cdn-icons-png.flaticon.com/128/10307/10307888.png"
                : like
            }
          />
          <p>{mode ? "love" : "Like"}</p>
        </div>
        <div className="ImgIcon">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5948/5948565.png"
            alt=""
          />
          <p>Comment</p>
        </div>
        <div className="ImgIcon">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2990/2990295.png"
            alt=""
          />
          Share
        </div>
      </div>
    </div>
  );
};

export default ShowMainItem;
