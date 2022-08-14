import React from "react";
import "./AsideBox.css";
import imageBoss from "../../Assets/Image/ImageBoss/imageBoss.jpg";

const AsideBox = () => {
  return (
    <>
      <aside>
        <div className="circleImage">
          <img src={imageBoss} alt="" />
          <h3>Mateus Henrique</h3>
        </div>

        {/* <div className="rotationText">
          <h2>MHTec</h2>
          <p>Empresa no ramo de desenvolvimento de software</p>
        </div> */}
      </aside>
    </>
  );
};

export default AsideBox;
