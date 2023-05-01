import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { isIOS } from "react-device-detect";
import { Layout, Spin } from "antd";
import { SyncOutlined } from "@ant-design/icons";

import MainContainerContext from "../../context/MainContainerContext";
import { LayoutContainer, MainContainer, Wrapper, HeaderContainer } from "./styled";
import Header from "../AppHeader";
import MobileHeader from "../AppHeader/MobileHeader";
import TopHeader from "../Topbar.js/TopHeader";
import routes from "../../constants/routes";

const antIcon = <SyncOutlined style={{ fontSize: 34 }} spin />;

const AppLayout = ({ user, logout, children, type }) => {
  const wrapperRef = useRef();
  const location = useLocation();
  const { pathname } = location;
  const [showBottomNavbar, setBottomNavbar] = useState(false);
  const globalLoader = useSelector(state => state.global.globalLoader);

  useEffect(() => {
    if (window.innerWidth < 650) {
      setBottomNavbar(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 650) {
        setBottomNavbar(true);
      } else {
        setBottomNavbar(false);
      }
    });
  }, []);

  return (
    <LayoutContainer isios={isIOS} className="mainLayout" type={type}>
      <MainContainerContext.Provider value={{ getContainer: () => wrapperRef.current || window }}>
        {/* {type !== "no_sidebar" && <SideBar />} */}
        <Layout style={{ height: "100%", backgroundColor: "#f8f9fa" }}>
          {type !== "no_sidebar" && !showBottomNavbar ? (
            <HeaderContainer>
              <Header />
            </HeaderContainer>
          ) : (
            <HeaderContainer>
              {pathname !== routes.LOGIN &&
                pathname !== routes.REGISTRATION &&
                pathname !== routes.FORGOTPASSWORD &&
                pathname !== routes.UPDATEPASSWORD && <TopHeader showTopbar={showBottomNavbar} />}
            </HeaderContainer>
          )}
          <Spin spinning={globalLoader > 0} indicator={antIcon} className="global-loader-spinner" size="large">
            <MainContainer type={type} isios={isIOS}>
              <Wrapper type={type} ref={wrapperRef}>
                {children}
              </Wrapper>
            </MainContainer>
          </Spin>
          {showBottomNavbar &&
            pathname !== routes.LOGIN &&
            pathname !== routes.REGISTRATION &&
            pathname !== routes.FORGOTPASSWORD &&
            pathname !== routes.UPDATEPASSWORD && <MobileHeader />}
        </Layout>
      </MainContainerContext.Provider>
    </LayoutContainer>
  );
};

AppLayout.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["default", "no_sidebar"])
};

AppLayout.defaultProps = {
  type: "default"
};

export default AppLayout;
