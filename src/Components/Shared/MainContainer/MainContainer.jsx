
import "./MainContainer.css";
import { mainContainerData } from "../../../utilities/mainContainer";
import ShowMainItem from "../ShowMainItem/ShowMainItem";
import SwiperSS from "../../Home/Swiper/Swiper";
const MainContainer = () => {
  return (
    <div className="fontPageMainContainer">
      <SwiperSS></SwiperSS>
      <div className="uploadSec px-3">
        <div className="uploadContainer py-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9970/9970541.png"
            alt=""
          />
          <input
            type="search"
            name=""
            id=""
            placeholder="What's on your mind, Ghost?"
          />
        </div>
        <div className="px-3">
          <hr />
        </div>
        <div className="liveVideoContainer py-4">
          <div className="subContainerClass">
            <img
              src="https://cdn-icons-png.flaticon.com/128/11820/11820294.png"
              alt=""
            />
            <p className="ml-1.5">Live video</p>
          </div>
          <div className="subContainerClass">
            <img
              src="https://cdn-icons-png.flaticon.com/128/11820/11820195.png"
              alt=""
            />
            <p className="ml-1">Photo/video</p>
          </div>
          <div className="subContainerClass">
            <img src="https://cdn-icons-png.flaticon.com/128/6228/6228423.png" />
            <p className="ml-1">Feeling/activity</p>
          </div>
        </div>
      </div>
      <div>
        {mainContainerData.map((item) => (
          <ShowMainItem key={item.id} item={item}></ShowMainItem>
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
