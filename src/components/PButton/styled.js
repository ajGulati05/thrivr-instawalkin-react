import styled, { css } from "styled-components";
import { Button, Typography } from "antd";

const { Text } = Typography;

const resetStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px 10.5px 6px 10.5px;
`;

export const CustomButton = styled(Button)`
  /* style based on the button type */
  ${({ ptype }) => ptype === "reset" && resetStyle}
  ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].textStyle}
  background-color: ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].bgColor};
  color: ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].color};

  /* general style */
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding-top: ${({ ptop }) => ptop};
  padding-bottom: ${({ pbottom }) => pbottom};
  padding-left: ${({ pleft }) => pleft};
  padding-right: ${({ pright }) => pright};
  margin-top: ${({ mtop }) => mtop};
  margin-bottom: ${({ mbottom }) => mbottom};
  margin-left: ${({ mleft }) => mleft};
  margin-right: ${({ mright }) => mright};
  border: 0px;

  &.ant-btn:hover {
    background-color: ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].hoverBgColor}!important;
    span {
      color: ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].hoverColor};
    }
  }
  &.ant-btn:focus {
    background-color: ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].bgColor};
  }
  &.ant-btn:active {
    background-color: ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].bgColor};
  }
  &.ant-btn[disabled] {
    background-color: ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].disabledBgColor};
    opacity: 0.4;
  }
  &.ant-btn[disabled]:hover {
    background-color: ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].disabledBgColor};
    span {
      color: ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].color};
    }
  }
  &.ant-btn[disabled]:focus {
    background-color: ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].disabledBgColor};
    span {
      color: ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].color};
    }
  }
  &.ant-btn[disabled]:active {
    background-color: ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].disabledBgColor};
    span {
      color: ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].color};
    }
  }
`;

export const ButtonText = styled(Text)`
  /* style based on the button type */
  ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].textStyle}
  color: ${({ theme, ptype }) => theme.components.button.buttonPrime[ptype].color};
`;
