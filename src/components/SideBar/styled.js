import styled from "styled-components";
import { Layout } from "antd";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const { Sider } = Layout;

export const SiderContainer = styled(Sider).attrs(({ theme }) => ({
  width: theme.sidebar.sidebarWidth
}))`
  background: ${({ theme }) => theme.sidebar.bgColor};
  border-right: solid 2px rgba(0, 0, 0, 0.04);
  height: 100%;
  z-index: 10;
  .ant-menu-inline {
    border-right: 0;
  }
  .ant-menu-inline-collapsed {
    border-right: 0;
  }
  /* overflow-y: scroll; */
  overflow-x: hidden;
`;

export const PerfectScrollContainer = styled(PerfectScrollbar)`
  .ps__rail-x {
    display: none;
  }
`;
