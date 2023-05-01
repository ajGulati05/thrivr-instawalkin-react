import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Container, UserMenuGroup, MenuContainer, MenuItem, IconWrap } from "./styled";
import Authentication from "../../services/authentication";

const Auth = new Authentication();

const HeaderComponent = ({ theme,userData }) => {
  const history = useHistory();
  const { sidebarCollapsed } = useSelector(state => state.ui);
  const [showUserMenu, setShowUserMenu] = useState(false);
 const avatarPath= useSelector(({ profile }) => profile?.profileData?.avatar);
  const handleClick = path => {
    if (path === "/logout") {
          Auth.logout();
        history.push("/login");
    }
    else{
           history.push(path);
      }
    setShowUserMenu(false);
  };

  const handleVisibleChange = visible => {
    setShowUserMenu(visible);
  };

  const content = (
    <MenuContainer>
      {userMenuList.map((item, key) => (
        <MenuItem key={key} onClick={() => handleClick(item.path)}>
          {item.icon && <IconWrap>{item.icon}</IconWrap>}
          {item.name}
        </MenuItem>
      ))}
    </MenuContainer>
  );

  return (
    <Container sidebarCollapsed={sidebarCollapsed}>
      <UserMenuGroup
        visible={showUserMenu}
        placement="bottomRight"
        content={content}
        trigger="click"
        onVisibleChange={handleVisibleChange}
      >
      <Avatar size={theme.header.userMenu.avatarSize} src={avatarPath} icon={<UserOutlined />} />
      </UserMenuGroup>
    </Container>
  );
};

HeaderComponent.propTypes = {
  theme: PropTypes.object.isRequired,
  userData: PropTypes.object
};

export default withTheme(HeaderComponent);

const userMenuList = [
  {
    name: "Profile",
    path: "/profile",
    icon: ""
  },
  {
    name: "Durations",
    path: "/durations",
    icon: ""
  },
  {
    name: "Availability",
    path: "/settings/availability",
    icon: ""
  },
  {
    name: "Licenses",
    path: "/licenses",
    icon: ""
  },
  {
    name: "Modalities",
    path: "/modalities",
    icon: ""
  },
  {
    name: "Notification Settings",
    path: "/notification-settings",
    icon: ""
  },
  {
    name: "Change Password",
    path: "/change-password",
    icon: ""
  },
  {
    name: "Logout",
    path: "/logout",
    icon: <i className="fa fa-sign-out" />
  }
];
