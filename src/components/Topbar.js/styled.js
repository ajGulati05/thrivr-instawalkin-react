import styled from "styled-components";
import { Menu, Avatar, Layout } from "antd";

const { Header } = Layout;

export const MobileViewMenu = styled(Menu)`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.colorFour};
  color: #fff;
  border-bottom: none;
  line-height: initial;
  left: 0;
  z-index: 5;

  li {
    padding: 17px 12px;
    border-bottom: none !important;
    margin: 0 !important;
    top: 0 !important;
    .ant-menu-submenu-title {
      padding: 0;
    }
    &:hover {
      color: #fff !important;
      background-color: #d06162 !important;
    }
    &.ant-menu-item-selected {
      background-color: #d06162;
      color: #fff;
    }
    .ant-avatar {
      height: 30px !important;
      width: 30px !important;
      line-height: 30px !important;
      margin: -8px 0 -8px 0;
    }
  }
`;

export const MobileViewAvatar = styled(Avatar)``;

export const MobileViewContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Topbar = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px !important;
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.colorFour};
  color: #fff;
  padding: 0;
  line-height: initial;
  height: auto;
  z-index: 5;

  .ant-btn-link {
    color: #fff;
  }
  .ant-avatar {
    height: 30px !important;
    width: 30px !important;
    line-height: 30px !important;
    margin: -8px 0 -8px 0;
    .anticon-user {
      font-size: 14px;
    }
  }
  ul {
    height: auto;
    background-color: ${({ theme }) => theme.colors.colorFour};
    color: #fff;
    border-bottom: none;
    li {
      padding: 17px 12px;
      border-bottom: none !important;
      margin: 0 !important;
      top: 0 !important;
      .ant-menu-submenu-title {
        padding: 0;
      }
      .ant-avatar {
        height: 30px !important;
        width: 30px !important;
        line-height: 30px !important;
        margin: -8px 0 -8px 0;
      }
      &:hover {
        color: #fff !important;
        background-color: #d06162 !important;
      }
      &.ant-menu-item-selected {
        background-color: #d06162;
        color: #fff;
      }
    }
  }
  @media (max-width: 650px) {
    padding: 9px 10px !important;
  }
`;

export const MenuItems = styled(Menu.Item)`
  float: right;
  border-bottom: 0;
`;
