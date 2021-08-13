import React from "react";
import BannerBot from "../../../../assets/images/big-bottom-banner.png";
import "./BigBottomBanner.scss";
import { Row, Col, Divider } from "antd";
const BigBottomBanner = () => {
  return (
    <div className="banner-bot-container">
      <div className="banner-text">
        <h1>BEST PRODUCT</h1>
        <p className="content">
          How to create mobile-optimized videos in minutes. Not a designer,
          everyteam makesa lot of videos Can be trimmed. Take the first
        </p>
        <button>SEE MORE</button>
      </div>
      <img src={BannerBot} className="img-banner-bot" />
    </div>
  );
};

export default BigBottomBanner;
