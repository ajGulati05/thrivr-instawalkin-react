import styled from "styled-components";
import { Button, Typography } from "antd";

const { Text } = Typography;

export const CustomButton = styled(Button)`
  /* generel style */
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
  display: flex;
  padding: 0;
  align-items: center;
  background-color: transparent;
  box-shadow: unset;

  /* hover, focus, active style */
  &.ant-btn[disabled] {
    background-color: transparent;
    background: transparent;
    span {
      color: ${({ theme }) => theme.components.button.buttonSecondary.default.color};
      opacity: 0.4;
    }
  }
  &.ant-btn[disabled]:hover {
    background-color: transparent;
    span {
      color: ${({ theme }) => theme.components.button.buttonSecondary.default.color};
    }
  }
  &.ant-btn[disabled]:focus {
    span {
      color: ${({ theme }) => theme.components.button.buttonSecondary.default.color};
    }
  }

  &:hover {
    background-color: transparent;
    span {
      color: ${({ theme }) => theme.components.button.buttonSecondary.default.hoverColor};
    }
  }
`;

export const ButtonText = styled(Text)`
  ${({ theme }) => theme.components.button.buttonSecondary.textStyle}
  color: ${({ theme, ptype, pchecked }) =>
    pchecked === "true" ? theme.colors.primary : theme.components.button.buttonSecondary[ptype].color};
`;

export const SecondaryWrapper = styled(Text)`
  padding: 5px;
  ${({ theme }) => theme.components.button.buttonSecondary.textStyle}
  color: ${({ theme, ptype }) => theme.components.button.buttonSecondary[ptype].color};
`;
