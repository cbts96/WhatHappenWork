import React from "react";
import "./BestProduct.scss";
import BgImg from "../../../../assets/images/Vector Smart Object copy 2.png";
import ItemImg from "../../../../assets/images/-e-BestImage_01.png";
import ItemImg2 from "../../../../assets/images/img_02.png";
import ItemImg3 from "../../../../assets/images/img_03.png";
import TopImg1 from "../../../../assets/images/item1.png";
import TopImg2 from "../../../../assets/images/item2.png";
import TopImg3 from "../../../../assets/images/item3.png";
// import BestProductImg from "../../../../assets/images/"
// import BestProductImg from "../../../../assets/images/"
// import BestProductImg from "../../../../assets/images/"
// import BestProductImg from "../../../../assets/images/"
import { Row, Col, Divider } from "antd";
import { useMediaQuery } from "react-responsive";

const BestProduct = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 1000px)",
  });
  return (
    <div className="best-product-container">
      <div className="product-wrapper">
        <img className="item-bg-prod" src={BgImg} />
        <div className="prod">
          {isTabletOrMobileDevice ? (
            <>
                <div className="text-prod" style={{textAlign:"center"}}>
                  <h3 >BEST PRODUCT</h3>
                  <p className="content" style={{ fontSize: "15px" }}>
                    How to create mobile-optimized videos in minutes. Not a
                    designer, everyteam makesa lot of videos Can be trimmed.
                    Take the first
                  </p>
                </div>
                <div className="prod-item-mb">
                  <div className="prod-img-item">
                    
                        <div className="item-prod-1">
                          <img className="main-img" src={ItemImg2} style={{width:"80%"}}/>
                          <img className="count-prod-1" src={TopImg1} />
                          <div className="desc">
                            <p>How to create mobile-optimized</p>
                            <button>GO</button>
                          </div>
                        </div>
                      
                        <div className="item-prod-1">
                          <img className="main-img" style={{width:"80%"}} src={ItemImg3} />
                          <img className="count-prod-2" src={TopImg2} />
                          <div className="desc">
                            <p>How to create mobile-optimized</p>
                            <button>GO</button>
                          </div>
                        </div>
                      
                        <div className="item-prod-1">
                          <img className="main-img"style={{width:"80%"}} src={ItemImg2} />
                          <img className="count-prod-1" src={TopImg3} />
                          <div className="desc">
                            <p>How to create mobile-optimized</p>
                            <button>GO</button>
                          </div>
                        </div>
                      
                  </div>
                </div>
              </>
          ) : (
            <>
              <Row>
                <Col span={12} offset={6}>
                  <div className="text-prod" style={{textAlign:"center",color:"#f16318"}}>
                    <h1 style={{textAlign:"center",color:"#f16318",fontWeight:"bold", letterSpacing:"2px"}}>BEST PRODUCT</h1>
                    <p className="content">
                      How to create mobile-optimized videos in minutes. Not a
                      designer, everyteam makesa lot of videos Can be trimmed.
                      Take the first
                    </p>
                  </div>
                  <div className="prod-item">
                    <div className="prod-img-item">
                      <div className="item-prod-1">
                        <img className="main-img" src={ItemImg2} />
                        <img className="count-prod-1" src={TopImg1} />
                        <div className="desc">
                          <p>How to create mobile-optimized</p>
                          <button>GO</button>
                        </div>
                      </div>
                      <div className="item-prod-1">
                        <img className="main-img" src={ItemImg3} />
                        <img className="count-prod-2" src={TopImg2} />
                        <div className="desc">
                          <p>How to create mobile-optimized</p>
                          <button>GO</button>
                        </div>
                      </div>
                      <div className="item-prod-1">
                        <img className="main-img" src={ItemImg2} />
                        <img className="count-prod-3" src={TopImg3} />
                        <div className="desc">
                          <p>How to create mobile-optimized</p>
                          <button>GO</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Col>
                </Row>

            </>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
