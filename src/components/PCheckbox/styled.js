import styled from "styled-components";
import { Checkbox } from "antd";

export const CustomCheckbox = styled(Checkbox)`
  .ant-checkbox-inner {
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.muted};
    height: ${({ height }) => height};
    width: ${({ width }) => width};
  }
  .ant-checkbox-inner:focus {
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.muted};
    outline: ${({ theme }) => theme.colors.primary};
  }
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.colors.muted};
  }
  .ant-checkbox-checked {
    .ant-checkbox-inner {
      background-color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    }
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
  .ant-checkbox-checked::after {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  &.ant-checkbox-wrapper:hover {
    .ant-checkbox-inner {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
  &.ant-checkbox-wrapper:focus {
    .ant-checkbox-inner {
      border-color: ${({ theme }) => theme.colors.muted};
    }
  }
  &.checkbox-spacing {
    margin-top: 20px;
    &.ant-checkbox-wrapper + .ant-checkbox-wrapper {
      margin-left: 0px;
    }
  }
`;
