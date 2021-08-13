import React from "react";
import "./BrandStory.scss";
import { Row, Col, Divider } from "antd";
import BrandBg from "../../../../assets/images/Brand Story (1).png";
import { useMediaQuery } from "react-responsive";
const BrandStory = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  return (
    <div className="brandstory-container">
      <img
        src={BrandBg}
        style={{ width: "100%" }}
        className="brand-bg"
        alt="brandbg"
      />

      {
        isTabletOrMobileDevice ? (
          <div
            className="brand-txt"
            style={{
              fontSize: "12px",
              width: "100%",
              textAlign: "center",
              padding: "10px 20px",
            }}
          >
            <h3 className="head-mb">BRAND STORY</h3>
            <div className="brand-title2">
              모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
              아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한
              첫 걸음을 내딘어보세요. 비디오를 단 몇 분 만에 제작해보세요. 
            </div>

            <div className="brand-content2">
              <h3>WHAT HAPPEN BRAND STORY</h3>
              <p>
                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
                풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
                살았으며, 듣는다. 수 있는 긴지라 사는가 낙뭔을 뭉대한 아니다.
                내는 이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은
                끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 |
                아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
              </p>
              <button style={{ color: "black",padding:"10px 40px",cursor:"pointer" }}>SEE MORE</button>
            </div>
          </div>
        ) : (
          <div className="brand-txt">
            <h1>BRAND STORY</h1>
            <div className="brand-title">
              모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
              아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한
              첫 걸음을 내딘어보세요. 비디오를 단 몇 분 만에 제작해보세요. 
            </div>

            {/* </Col></Row> */}
            <div className="brand-content">
              <h3>WHAT HAPPEN BRAND STORY</h3>
              <p>
                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
                풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
                살았으며, 듣는다. 수 있는 긴지라 사는가 낙뭔을 뭉대한 아니다.
                내는 이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은
                끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 |
                아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
              </p>
              <button style={{ color: "black",padding:"10px 40px",cursor:"pointer" }}>SEE MORE</button>
            </div>
          </div>
        )
        //  </div>
      }
    </div>
  );
};

export default BrandStory;
