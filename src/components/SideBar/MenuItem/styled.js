import styled, { css } from "styled-components";
import { sidebarMenuType, subMenuItemUsage } from "../../../constants/global";

const nightMode = "Night Mode";

const collapsedText = css`
  display: inline-block;
  width: 0;
  opacity: 0;
  display: none;
`;
const collapsedStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px !important;
`;

const collapsedNightModeStyle = css`
  display: block;
  width: auto;
  opacity: 1;
`;

const collapsedNavMenuItemText = css`
  padding-top: 6px;
  padding-right: 8px;
  text-align: center;
`;

export const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: ${({ theme, menutype, active }) => {
    const isUserMenu = menutype === sidebarMenuType.userMenu;
    const defaultBgColor = theme.colors.white;
    const userBgColor = theme.colors.primaryDark;
    const activeBgColor = isUserMenu ? theme.colors.primaryDark : theme.colors.tableLight;
    const bgColor = isUserMenu ? userBgColor : defaultBgColor;
    const menuBgColor = active ? activeBgColor : bgColor;

    return menuBgColor;
  }};
  height: ${({ theme, menutype, collapsed, usage }) => {
    const isCollapsedNavMenu = menutype === sidebarMenuType.navMenu && collapsed;
    const collapsedNavMenuHeight = isCollapsedNavMenu && usage === subMenuItemUsage.parent ? 79 : 70;
    const menuHeight = isCollapsedNavMenu ? collapsedNavMenuHeight : theme.sidebar.userMenu.itemHeight;
    const styleMenuHeight = `${menuHeight}px !important`;
    return styleMenuHeight;
  }};
  padding-left: ${({ theme, usage }) =>
    usage === subMenuItemUsage.child ? theme.spacings.spacing_xxl : theme.spacings.spacing_xl} !important;
  padding-right: ${({ theme, usage }) =>
    usage === subMenuItemUsage.child ? theme.spacings.spacing_xl : theme.spacings.spacing_xl} !important;

  span {
    ${({ theme, menutype, usage, collapsed }) => {
      const defaultNavItemMenu =
        usage === subMenuItemUsage.parent ? theme.sidebar.navMenu.textStyle : theme.sidebar.navMenu.itemTextStyle;
      const collapsedNavItemMenu =
        usage === subMenuItemUsage.parent
          ? theme.sidebar.navMenu.menuListHeadingDefaultSmall
          : theme.sidebar.navMenu.menuSubItemDefaultSmall;
      const styleNavItemMenu = collapsed ? collapsedNavItemMenu : defaultNavItemMenu;
      const isUserMenu = menutype === sidebarMenuType.userMenu;
      const styleUserMenu = theme.sidebar.userMenu.itemTextStyle;
      const styleMenuItemText = isUserMenu ? styleUserMenu : styleNavItemMenu;

      return styleMenuItemText;
    }};

    padding-left: ${({ theme, usage, menutype }) =>
      usage === subMenuItemUsage.child
        ? menutype === sidebarMenuType.userMenu
          ? theme.spacings.spacing_s
          : theme.spacings.spacing_xxxs
        : theme.spacings.spacing_xs} !important;
    /*************    active text style    *******************/
    ${({ theme, active, menutype }) =>
      active && menutype === sidebarMenuType.navMenu && `color: ${theme.colors.primary};`}

    /************* sidebar collapsed status ******************/
    ${({ collapsed, menutype }) => collapsed && menutype === sidebarMenuType.navMenu && collapsedNavMenuItemText}

    ${({ collapsed, menutitle, menutype, usage }) => {
      const isUserMenuChild = menutype === sidebarMenuType.userMenu && usage === subMenuItemUsage.child && collapsed;
      const isNightMode = isUserMenuChild && menutitle !== nightMode;
      const styleForUserMenu = isNightMode ? collapsedText : collapsedNightModeStyle;
      return styleForUserMenu;
    }}

    .night-mode-toggle {
      ${({ collapsed, menutitle }) => collapsed && menutitle === nightMode && "right: 17px"}
    }
  }

  &:hover {
    span {
      color: ${({ theme, menutype }) =>
        menutype === sidebarMenuType.navMenu ? theme.colors.primary : "rgba(255,255,255,0.48)"};
    }
  }
  /************* sidebar collapsed status ******************/
  ${({ collapsed }) => collapsed && collapsedStyle}
`;

export const MenuItemText = styled.span``;

export const IconWrap = styled.div`
  font-size: 18px !important;
  color: ${({ theme }) => theme.colors.primary};
`;
