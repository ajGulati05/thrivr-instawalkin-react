import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Layout, Button } from "antd";
import { withTheme } from "styled-components";
import { Avatar } from "antd";
import { UserOutlined, MenuOutlined, LeftOutlined } from "@ant-design/icons";
import { UserMenuGroup, MenuContainer, MenuItem, IconWrap } from "../../components/Header/styled";
import Authentication from "../../services/authentication";
import { userMenuList, userMenuRoleBlockList } from "../AppHeader/UserMenuList";
import { Topbar } from "./styled";

const Auth = new Authentication();

const TopHeader = ({ theme, showTopbar }) => {
  const history = useHistory();
  const userAllAccess = useSelector(({ profile }) => profile.userAllAccess);
    const avatarPath= useSelector(({ profile }) => profile?.profileData?.avatar);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleMenuClick = path => {
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

  const handleBackClick = () => {
    history.push(`${history.location.pathname}`);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const userMenuData = userAllAccess ? userMenuList : userMenuRoleBlockList;

  const content = (
    <MenuContainer>
      {userMenuData.map((item, key) => (
        <MenuItem key={key} onClick={() => handleMenuClick(item.path)}>
          {item.icon && <IconWrap>{item.icon}</IconWrap>}
          {item.name}
        </MenuItem>
      ))}
    </MenuContainer>
  );

  return (
    <>
      <Layout>
        <Topbar className="header-section">
          {history.location.hash ? (
            <Button type="link" onClick={handleBackClick}>
              <LeftOutlined /> Back
            </Button>
          ) : (
            <div></div>
          )}
          <UserMenuGroup visible={showUserMenu} content={content} trigger="click" onVisibleChange={handleVisibleChange}>
        <Avatar size={theme.header.userMenu.avatarSize} src={avatarPath} icon={<UserOutlined />} />
          </UserMenuGroup>
        </Topbar>
      </Layout>
    </>
  );
};

export default withTheme(TopHeader);
