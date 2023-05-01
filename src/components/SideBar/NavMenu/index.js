import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MenuItem from "../MenuItem";
import SubMenu from "../SubMenu";
import Divider from "../../Divider";
import { NavMenuContainer } from "./styled";
import { sidebarMenuType, subMenuItemUsage } from "../../../constants/global";
import { spacings, colorPalette } from "../../../constants/styleguide";
import { navTags } from "../../../constants/global";
import { navMenuData } from "../_nav";

const DividerColor = colorPalette.inputBorder;

const NavDropdown = ({ navDropdown, sidebarCollapsed }) => {
  const { activeMenuItem } = useSelector(state => state.ui);
  const [activeMenuKey, setActiveMenuKey] = useState(`/${activeMenuItem.to.split("/")[1]}`);

  useEffect(() => {
    const activeKey = `/${activeMenuItem.to.split("/")[1]}`;
    setActiveMenuKey(activeKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMenuItem]);

  return (
    <NavMenuContainer expandIconPosition="right" defaultActiveKey={[activeMenuKey]} ghost>
      <SubMenu
        keyName={navDropdown.name}
        menuIcon={navDropdown.icon}
        menuTitle={navDropdown.name}
        menuType={sidebarMenuType.navMenu}
        sidebarcollapsed={sidebarCollapsed}
        key={navDropdown.to}
      >
        {navDropdown._children.map((menuItem, key) => (
          <React.Fragment key={key}>
            <Divider color={DividerColor} pLeft={spacings.spacing_xl} pRight={spacings.spacing_xl} />
            <MenuItem
              id={menuItem.to}
              key={`${menuItem.name}-${key}`}
              keyName={`${menuItem.name}-${key}`}
              menuType={sidebarMenuType.navMenu}
              usage={subMenuItemUsage.child}
              sidebarcollapsed={sidebarCollapsed.toString()}
              menuItemObj={menuItem}
            >
              {menuItem.name}
            </MenuItem>
          </React.Fragment>
        ))}
      </SubMenu>
      <Divider color={DividerColor} />
    </NavMenuContainer>
  );
};

const NavMenu = () => {
  const { sidebarCollapsed, activeMenuItem } = useSelector(state => state.ui);
  const [activeMenuKey, setActiveMenuKey] = useState(`/${activeMenuItem.to.split("/")[1]}`);

  useEffect(() => {
    const activeKey = `/${activeMenuItem.to.split("/")[1]}`;
    setActiveMenuKey(activeKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMenuItem]);

  return (
    <NavMenuContainer expandIconPosition="right" defaultActiveKey={[activeMenuKey]} ghost>
      {navMenuData.map((nav, key) =>
        nav._tag === navTags.NavItem ? (
          <React.Fragment key={key}>
            <MenuItem
              id={nav.to}
              keyName={`${nav.name}-${key}`}
              menuIcon={nav.icon}
              menuType={sidebarMenuType.navMenu}
              usage={subMenuItemUsage.parent}
              sidebarcollapsed={sidebarCollapsed.toString()}
              menuItemObj={nav}
            >
              {nav.name}
            </MenuItem>
            <Divider color={DividerColor} />
          </React.Fragment>
        ) : (
          <NavDropdown key={key} navDropdown={nav} sidebarCollapsed={sidebarCollapsed} />
        )
      )}
    </NavMenuContainer>
  );
};

export default NavMenu;
