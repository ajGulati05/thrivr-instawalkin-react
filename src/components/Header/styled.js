import styled from "styled-components";
import { Popover } from "antd";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacings.spacing_xl};
  height: 100%;
  width: ${({ theme, sidebarCollapsed }) =>
    !sidebarCollapsed ? theme.header.defaultWidth : theme.header.collapsedWidth};
`;

export const UserMenuGroup = styled(Popover)`
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  padding: 7px 0px;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  width: 220px;
  min-width: 160px;
  flex-shrink: 0;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
`;

export const MenuItem = styled.div`
  padding: ${({ theme }) => theme.spacings.spacing_xxss} ${({ theme }) => theme.spacings.spacing_m};
  min-width: ${({ theme }) => theme.header.userMenu.menuWidth}px;
  ${({ theme }) => theme.textStyles.dropdownDefaultValue};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover1};
  }
`;

export const IconWrap = styled.span`
  padding-right: ${({ theme }) => theme.spacings.spacing_m};
`;
