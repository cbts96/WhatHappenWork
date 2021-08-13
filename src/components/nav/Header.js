import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  AlignCenterOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Header.scss";
// import HamburgerIcon from "../../helper/Hamburger/HamburgerIcon";
// import RightHeaderNav from "../nav/RightHeaderNav";
// import { BrowserView, MobileView } from "react-device-detect";
import { Popover, Button } from "antd";
import { useMediaQuery } from "react-responsive";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (visible) => {
    setVisible( visible );
  };
  const [current, setCurrent] = useState("home");

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 765px)",
  });

  let dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };
  const [change, setChange] = useState({
    // iconShow: false,
    // iconChange: true,
    // menuMobileShow: false,
  });
  // const node = useRef();
  // const menuId = "main-menu";
  const { iconShow, menuMobileShow, iconChange } = change;

  // const menuTransform = () => {
  //   setChange({ ...change, menuMobileShow: !menuMobileShow });
  // };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <Menu
      // onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      style={{ backgroundColor: "#1A1A1A", color: "white" }}
      className="header-container"
    >
      <div className="left-item">
        <Item key="home">
          <Link key="home" to="/" className="main-title">
            What Happened
          </Link>
        </Item>
      </div>

      {isTabletOrMobileDevice ? (
        <>
          
          

          <Popover
            content={
              <div
                
                className="right-item-container text-center"
                style={{ padding: "20px" }}
              >
                <div className="right-item-mobile">
                  <Item key="introduction">
                    <Link to="/introdution">Introdution</Link>
                  </Item>

                  <Item key="solution">
                    <Link to="/solution">Solution</Link>
                  </Item>

                  <Item>
                    <Link to="/rate-plan">Rate Plan</Link>
                  </Item>
                  {/* <span>|</span> */}
                  <Item key="login">
                    <Link to="/login">Login</Link>
                  </Item>
                  <Item>
                    <Link to="/login">Apply for free</Link>
                  </Item>
                  {/* <Item className="float-right" onClick={logout}>Logout</Item> */}
                </div>
              </div>
            }
            trigger="click"
            visible={visible}
            onVisibleChange={handleVisibleChange}
            placement="bottomRight"
          >
            <AlignCenterOutlined className="icon-ham" style={{ fontSize: "40px" }} />
          </Popover>
        </>
      ) : (
        <div className="right-item-container">
          <div className="right-item">
            <Item key="introduction">
              <Link to="/introdution">Introdution</Link>
            </Item>

            <Item key="solution">
              <Link to="/solution">Solution</Link>
            </Item>

            <Item>
              <Link to="/rate-plan">Rate Plan</Link>
            </Item>
            
            <Item key="login">
              <Link to="/login">Login</Link>
            </Item>
            <Item>
              <Link to="/login">Apply for free</Link>
            </Item>
            {/* <Item className="float-right" onClick={logout}>Logout</Item> */}
          </div>
        </div>
      )}
    </Menu>
  );
};

export default Header;

// import React, { useState } from "react";
// import { Row, Col, Typography, Layout, Menu} from "antd";
// import {
//   AppstoreOutlined,
//   SettingOutlined,
//   UserOutlined,
//   UserAddOutlined,
//   LogoutOutlined,
//   MenuOutlined
// } from "@ant-design/icons";
// import { Link } from "react-router-dom";
// import firebase from "firebase";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import "./Header.scss";
// const { SubMenu, Item } = Menu;
// const { Header, Content } = Layout;
// const { Title } = Typography;
// const HeaderComponent = () => {
//   const [current, setCurrent] = useState("home");

//   let dispatch = useDispatch();
//   let { user } = useSelector((state) => ({ ...state }));

//   let history = useHistory();

//   const handleClick = (e) => {
//     // console.log(e.key);
//     setCurrent(e.key);
//   };
//   const gotoPage = (page: string) => {
//     //GO TO MENU ITEM PAGE
//   };
//   const logout = () => {
//     firebase.auth().signOut();
//     dispatch({
//       type: "LOGOUT",
//       payload: null,
//     });
//     history.push("/login");
//   };

//   return (
//     <Row justify='center'>
//   <Col xl={24} lg={24} md={24} sm={24} xs={24}>
//     <Header className='header-fixed'>
//       <Row>
//         <Col xl={12} lg={12} md={12} sm={20} xs={20}>
//           <Title id='title-button' level={4}>
//             <a onClick={() => gotoPage('')}>My App</a>
//           </Title>
//         </Col>
//         <Col xl={12} lg={12} md={12} sm={4} xs={4}>
//           <Menu
//             theme='dark'
//             mode='horizontal'
//             defaultSelectedKeys={["item1"]}
//             overflowedIndicator={<MenuOutlined />}
//           >
//             <Menu.Item
//               key="item1"
//               onClick={() => gotoPage("item1")}
//             >
//               item1
//             </Menu.Item>
//             <Menu.Item
//               key={"item2"}
//               onClick={() => gotoPage("item2")}
//             >
//               item2
//             </Menu.Item>
//             <Menu.Item
//               key={"item3"}
//               onClick={() => gotoPage("item3")}
//             >
//               item3
//             </Menu.Item>
//           </Menu>
//         </Col>
//       </Row>
//     </Header>
//     {/* <Content>{props.children}</Content> */}
//   </Col>
// </Row>
//   );
// };

// export default HeaderComponent;
