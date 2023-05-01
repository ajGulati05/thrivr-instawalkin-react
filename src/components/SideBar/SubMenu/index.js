import React from "react";
import PropTypes from "prop-types";
import { MenuItemContainer, MenuHeaderContainer, HeaderTitle, IconWrap } from "./styled";
import { sidebarMenuType } from "../../../constants/global";

const MenuHeader = ({ title, icon, menutype, collapsed }) => {
  return (
    <MenuHeaderContainer className="custom-submenu-header" collapsed={collapsed}>
      <IconWrap>{icon}</IconWrap>
      {!collapsed && (
        <HeaderTitle className="submenu-header-title" menutype={menutype} collapsed={collapsed}>
          {title}
        </HeaderTitle>
      )}
      {collapsed && menutype === sidebarMenuType.navMenu && (
        <HeaderTitle className="submenu-header-title" menutype={menutype} collapsed={collapsed}>
          {title}
        </HeaderTitle>
      )}
    </MenuHeaderContainer>
  );
};

MenuHeader.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  menutype: PropTypes.oneOf(["navMenu", "userMenu"])
};

const SubMenu = ({ menuTitle, menuIcon, menuType, children, sidebarCollapsed, ...rest }) => {
  return (
    <MenuItemContainer
      className="custom-submenu"
      menutype={menuType}
      collapsed={sidebarCollapsed}
      {...rest}
      header={<MenuHeader title={menuTitle} icon={menuIcon} menutype={menuType} collapsed={sidebarCollapsed} />}
    >
      {children}
    </MenuItemContainer>
  );
};

SubMenu.propTypes = {
  menuIcon: PropTypes.node,
  children: PropTypes.node,
  menuType: PropTypes.oneOf(["navMenu", "userMenu"]).isRequired,
  sidebarCollapsed: PropTypes.bool
};

SubMenu.defaultProps = {
  menuType: "navMenu"
};

export default SubMenu;
