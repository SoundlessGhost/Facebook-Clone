/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react';

const ShowNavItem = ({ item }) => {
  const { name, image } = item;
  return (
    <div className="showItem">
        <img src={image} alt="" />
        <p>{name}</p>
    </div>
  );
};

export default ShowNavItem;
