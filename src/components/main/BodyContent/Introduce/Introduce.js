import React from "react";
import IntroImg from "../../../../assets/images/intro.png";
import "./Introduce.scss";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Divider } from 'antd';
const Introduce = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 765px)",
  });
  return (
    <div className="intro-container">
      <img className="img-intro" src={IntroImg} />
      {
        isTabletOrMobileDevice?(
        
      <div className="text-content">
      
   <Row >
        <Col span={16}><h3 style={{color:"white"}}>What Happened!</h3>
        <p style={{fontSize:"14px"}}>
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makesa lot ofvideos Can be trimmed.Take the first step to your
          brand's success. How to create mobile-optimized videos in minutes.
        </p></Col>
        <Col span={4} offset={8}>
          
        </Col>
      </Row></div>):(
        <div className="text-content">
        <Row>
        <Col span={24}><h1>What Happened!</h1>
        <p>
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makesa lot ofvideos Can be trimmed.Take the first step to your
          brand's success. How to create mobile-optimized videos in minutes.
        </p></Col>
        <Col span={8}>
          
        </Col>
      </Row>
      </div>
      )

  
        
      }
      
    </div>
  );
};

export default Introduce;
