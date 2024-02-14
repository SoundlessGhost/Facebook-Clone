/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react';

const ShowRightItem = ({ user }) => {
  const { username, userImg } = user;
  return (
    <div>
      <div className="showUseRightNav pl-3">
      <img src={userImg} alt="" />
      <p className="ml-2">{username}</p>
      </div>
    </div>
  );
};

export default ShowRightItem;
