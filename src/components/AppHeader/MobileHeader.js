import React, { useState } from "react";
import PropTypes from "prop-types";
import { Menu, Avatar } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sidebarMenuType, subMenuItemUsage } from "../../constants/global";
import { navTags } from "../../constants/global";
import { navMenuData, navRoleBlockedMenuData } from "../../components/SideBar/_nav";
import { ACTIVE_MENU_ITEM } from "../../store/actions/ui";
import { withTheme } from "styled-components";
import { UserOutlined } from "@ant-design/icons";
import { UserMenuGroup, MenuContainer, MenuItem, IconWrap } from "../../components/Header/styled";
import Authentication from "../../services/authentication";
import { userMenuList } from "./UserMenuList";
import { MobileViewMenu, MobileViewAvatar, MobileViewContainer, MenuItems } from "./styled";

const Auth = new Authentication();

const { SubMenu } = Menu;

const MobileHeader = ({ theme,userData }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { sidebarCollapsed } = useSelector(state => state.ui);
  const userAllAccess = useSelector(({ profile }) => profile.userAllAccess);
  const [showUserMenu, setShowUserMenu] = useState(false);
    const avatarPath= useSelector(({ profile }) => profile?.profileData?.avatar);

  function switchRouter(route) {
    history.push(route);
  }

  const handleClick = menuItemObj => {
    if (menuItemObj) {
      dispatch({
        type: ACTIVE_MENU_ITEM,
        payload: menuItemObj
      });

      if (menuItemObj.to === "/logout") {
            Auth.logout();
        history.push("/login");
      }

      menuItemObj.routerSwitch && switchRouter(menuItemObj.to);
    }
  };

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

  const content = (
    <MenuContainer>
      {userMenuList.map((item, key) => (
        <MenuItem key={key} onClick={() => handleMenuClick(item.path)}>
          {item.icon && <IconWrap>{item.icon}</IconWrap>}
          {item.name}
        </MenuItem>
      ))}
    </MenuContainer>
  );

  const navData = userAllAccess ? navMenuData : navRoleBlockedMenuData;

  return (
    <MobileViewContainer className="mobileheader-section">
      <MobileViewMenu mode="horizontal" defaultSelectedKeys={["2"]}>
        {navData.map((nav, key) =>
          nav._tag === navTags.NavItem ? (
            <Menu.Item
              key={nav.to}
              id={nav.to}
              icon={nav.icon}
              menuType={sidebarMenuType.navMenu}
              usage={subMenuItemUsage.parent}
              menuitemobj={nav}
              onClick={() => handleClick(nav)}
            >
              {nav.mobileName}
            </Menu.Item>
          ) : (
            <SubMenu
              icon={nav.icon}
              menuTitle={nav.name}
              menuType={sidebarMenuType.navMenu}
              key={nav.to}
              title={nav.name}
            >
              {nav._children.map((menuItem, key) => (
                <Menu.Item
                  id={menuItem.to}
                  key={`${menuItem.name}-${key}`}
                  menuType={sidebarMenuType.navMenu}
                  usage={subMenuItemUsage.child}
                  menuitemobj={menuItem}
                  onClick={() => handleClick(menuItem)}
                >
                  {menuItem.name}
                </Menu.Item>
              ))}
            </SubMenu>
          )
        )}
        {/* <MenuItems>
          <UserMenuGroup
            visible={showUserMenu}
            content={content}
            trigger="click"
            onVisibleChange={handleVisibleChange}
          >       <Avatar size={theme.header.userMenu.avatarSize} src={avatarPath} icon={<UserOutlined />} />
          </UserMenuGroup>
        </MenuItems> */}
      </MobileViewMenu>
    </MobileViewContainer>
  );
};

MobileHeader.propTypes = {};

MobileHeader.defaultProps = {
  type: "default"
};

export default withTheme(MobileHeader);
