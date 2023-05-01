import styled from "styled-components";
import { Collapse } from "antd";
import { IconUser } from "../../../assets/icons";

export const NavMenuContainer = styled(Collapse)`
  .ant-collapse-item {
    .ant-collapse-content {
      .ant-collapse-content-box {
        padding: 0;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
    }
  }
  .ant-collapse-item-active {
    .ant-collapse-header {
      background-color: ${({ theme }) => theme.colors.tableLight};
      .ant-collapse-arrow {
        color: ${({ theme }) => theme.colors.primary};
      }
      .custom-submenu-header {
        .submenu-header-title {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
    .ant-collapse-content-box {
      .custom-menu-item {
        background-color: ${({ theme }) => theme.colors.tableLight};
      }
    }
  }
`;

export const UserIcon = styled(IconUser)`
  fill: none;
  stroke: white;
  &:hover {
    fill: none;
  }
`;
