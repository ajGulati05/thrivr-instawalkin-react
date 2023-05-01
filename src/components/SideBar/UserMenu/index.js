import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import MenuItem from "../MenuItem";
import SubMenu from "../SubMenu";
import Divider from "../../Divider";
import { IconSun } from "../../../assets/icons";
import { CheckOutlined } from "@ant-design/icons";
import { UserMenuContainer, ToggleButton } from "./styled";
import { sidebarMenuType, subMenuItemUsage } from "../../../constants/global";
import { spacings, colorPalette } from "../../../constants/styleguide";

import { userMenuData } from "../_nav";

const DividerColor = "rgba(255, 255, 255, 0.48)";
const DividerBgColor = colorPalette.primaryDark;

const UserMenu = ({ userInfo }) => {
  const { sidebarCollapsed } = useSelector(state => state.ui);

  return (
    <UserMenuContainer expandIconPosition="right" ghost>
      <SubMenu
        keyName={userMenuData.name}
        menuIcon={userMenuData.icon}
        menuTitle={userInfo.hasOwnProperty("user_details") ? userInfo.user_details.firstname : userMenuData.name}
        menuType={sidebarMenuType.userMenu}
        sidebarCollapsed={sidebarCollapsed.toString()}
      >
        {userMenuData._children.map((menuItem, key) => (
          <React.Fragment key={key}>
            <Divider
              color={DividerColor}
              pLeft={spacings.spacing_xl}
              pRight={spacings.spacing_xl}
              bgColor={DividerBgColor}
            />
            <MenuItem
              id={menuItem.to}
              key={`${menuItem.name}-${key}`}
              keyName={`${menuItem.name}-${key}`}
              menuTitle={menuItem.name}
              menuIcon={menuItem.icon}
              menuType={sidebarMenuType.userMenu}
              usage={subMenuItemUsage.child}
              sidebarcollapsed={sidebarCollapsed.toString()}
              menuitemobj={menuItem}
            >
              {menuItem.to === "/night-mode" ? (
                sidebarCollapsed ? (
                  <ToggleButton
                    className="night-mode-toggle"
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<IconSun />}
                  />
                ) : (
                  <>
                    {menuItem.name}
                    <ToggleButton checkedChildren={<CheckOutlined />} unCheckedChildren={<IconSun />} />
                  </>
                )
              ) : (
                menuItem.name
              )}
            </MenuItem>
          </React.Fragment>
        ))}
      </SubMenu>
    </UserMenuContainer>
  );
};

UserMenu.propTypes = {
  userInfo: PropTypes.shape({
    user_details: PropTypes.shape({
      email: PropTypes.string,
      username: PropTypes.string,
      firstname: PropTypes.string
    }),
    role: PropTypes.object
  })
};

export default UserMenu;
