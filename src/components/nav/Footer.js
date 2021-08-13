import React from "react";
import "./Footer.scss";
import { Layout } from "antd";
const FooterComponent = () => {
    const { Footer} = Layout;

  return (
    
      <Footer className="footer-container">
        <div className="left-footer">
          <div className="left-title">what happen</div>
          <ul>
            <li>[공지] 개인 정보 처리 방침 변경 사전 안내 </li>
            <li>[공지] 개인 정보 처리 방침 변경 사전 안내 </li>
            <li>[공지] 개인 정보 처리 방침 변경 사전 안내 </li>
            <li>[공지] 개인 정보 처리 방침 변경 사전 안내 </li>
            <li>[공지] 개인 정보 처리 방침 변경 사전 안내 </li>
          </ul>
        </div>
        <div className="right-footer">
          <div className="item">
            <div className="right-title">about us</div>
            <ul>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
            </ul>
          </div>
          <div className="item">
            <div className="right-title">my order</div>
            <ul>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
            </ul>
          </div>
          <div className="item">
            <div className="right-title">my account</div>
            <ul>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
            </ul>
          </div>
          <div className="item">
            <div className="right-title">help</div>
            <ul>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
              <li>[공지] 개인 정보 처리  </li>
            </ul>
          </div>
          
        </div>
      </Footer>
    
  );
};

export default FooterComponent;
