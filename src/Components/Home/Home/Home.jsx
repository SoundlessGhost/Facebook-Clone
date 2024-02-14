// import React from 'react';
import "./Home.css";
import LeftNav from "../../Shared/LeftNav/LeftNav";
import MainContainer from "../../Shared/MainContainer/MainContainer";
import RightNav from "../../Shared/RightNav/RightNav";

const Home = () => {
  return (
    <div>
      <div className="HomeGridClass">
        <div>
          <LeftNav></LeftNav>
        </div>
        <div>
          <MainContainer></MainContainer>
        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
