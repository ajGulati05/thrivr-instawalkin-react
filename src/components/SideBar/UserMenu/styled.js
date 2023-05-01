import styled from "styled-components";
import { Collapse, Switch } from "antd";
import { IconUser } from "../../../assets/icons";

export const UserMenuContainer = styled(Collapse)`
  .ant-collapse-content {
    .ant-collapse-content-box {
      padding: 0;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
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

export const ToggleButton = styled(Switch)`
  background-color: ${({ theme }) => theme.colors.white};
  height: 28px;
  position: absolute;
  right: 24px;
  top: 14px;
  .ant-switch-handle {
    top: 5px;
    &::before {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
  .ant-switch-inner {
    padding-left: 0px !important;
    padding-top: 1px;
    .anticon-check {
      padding-left: 0px !important;
      margin-right: 0px;
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`;
