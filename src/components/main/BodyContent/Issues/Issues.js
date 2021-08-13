import React from "react";
import "./Issues.scss";
import img from "../../../../assets/images/Rectangle 678.png";
import imgBottom from "../../../../assets/images/-e-VideoObject_05.png";
const Issues = () => {
  return (
    <div className="iss-container">
      <div className="text-wrapper">
        <h1>HAPPENED ISSUES</h1>
        <div className="iss-desc">
          <p>
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
            아니더라도, 모든 팀에서 다들을 수 있습니다. 브랜드의 성공을 위한 첫
            걸음을 내덮어보세요, 비디오를 단 몇 분 만에 제작해보세요, 
          </p>
          <button>SEE MORE</button>
        </div>{" "}
      </div>
      <img src={img} className="carousel" />
      <img src={imgBottom} className="img-bot" />
    </div>
  );
};

export default Issues;
