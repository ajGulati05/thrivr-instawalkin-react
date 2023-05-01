import styled, { css } from "styled-components";
import { Collapse } from "antd";
import { sidebarMenuType } from "../../../constants/global";

const { Panel } = Collapse;

const collapsedSubMenuStyle = css`
  padding: 0px !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const collapsedSubMenuHeaderStyle = css`
  display: flex;
  flex-direction: column;
`;

export const MenuItemContainer = styled(Panel)`
  .ant-collapse-header {
    display: flex;
    align-items: center;
    color: ${({ theme, menutype }) =>
      menutype === sidebarMenuType.userMenu ? theme.colors.white : theme.colors.greyishBrown} !important;
    ${({ theme, menutype, collapsed }) => {
      const styleUserMenuText = theme.sidebar.userMenu.textStyle;
      const styleNavMenuDefault = theme.sidebar.navMenu.textStyle;
      const styleNavMenuCollapsed = theme.sidebar.navMenu.menuListHeadingDefaultSmall;
      const navMenuText = collapsed ? styleNavMenuCollapsed : styleNavMenuDefault;
      const isUserMenu = menutype === sidebarMenuType.userMenu;
      const subMenuText = isUserMenu ? styleUserMenuText : navMenuText;

      return subMenuText;
    }};

    padding-left: ${({ theme }) => theme.spacings.spacing_xl} !important;
    padding-right: ${({ theme }) => theme.spacings.spacing_xl} !important;

    height: ${({ collapsed, theme, menutype }) => {
      const defaultHeight = theme.sidebar.userMenu.itemHeight;
      const collapsedHeight = 79;
      const isNavMenuCollapsed = collapsed && menutype === sidebarMenuType.navMenu;
      const subMenuHeight = isNavMenuCollapsed ? collapsedHeight : defaultHeight;

      return subMenuHeight;
    }}px !important;

    background-color: ${({ theme, menutype }) =>
      menutype === sidebarMenuType.userMenu ? theme.colors.primaryDark : theme.colors.white};

    .ant-collapse-arrow {
      right: ${({ theme }) => theme.spacings.spacing_xl} !important;
      /* collapsed sidebar status */
      ${({ collapsed }) => collapsed && "opacity: 0; max-width: 0;"}
    }

    /* *** collapsed submenu *** */
    ${({ collapsed }) => collapsed && collapsedSubMenuStyle}
    .custom-submenu-header {
      ${({ collapsed }) => collapsed && collapsedSubMenuHeaderStyle}
      .submenu-header-title {
        ${({ collapsed }) => collapsed && "padding-right: 8px; padding-top: 6px;"}
      }
    }
  }
`;

export const MenuHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.span`
  padding-left: ${({ theme }) => theme.spacings.spacing_xs};
  &:hover {
    color: ${({ theme, menutype }) =>
      menutype === sidebarMenuType.navMenu ? theme.colors.primary : "rgba(255,255,255,0.48)"};
  }
`;

export const IconWrap = styled.div`
  font-size: 18px !important;
  color: ${({ theme }) => theme.colors.primary};
`;
