import styled from "styled-components";
import { Radio } from "antd";

export const RadioElm = styled(Radio)`
  font-family: Roboto;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.muted};

  & .ant-radio .ant-radio-inner {
    border-width: 2px;
    &::after {
      top: 2px;
      left: 2px;
    }
  }
`;
