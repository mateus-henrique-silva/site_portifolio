import React from "react";
import ArrowDown from "../../Assets/Icons/AnimationIcons/arrowDown.svg";
import ArrowAnimation from "../../Components/Animation/ArrowDown/Animation";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main>
        <div className="img-back">
          <h1>Home</h1>

          <ArrowAnimation imgDown={ArrowDown} />
        </div>
      </main>
    </>
  );
};

export default Home;
