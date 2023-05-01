import styled from "styled-components";
import { Typography, Switch } from "antd";

const { Text } = Typography;

export const PInputSwitchContainer = styled.div``;

export const LabelText = styled(Text)`
  ${({ theme }) => theme.textStyles.formElementLabelDefault}
`;

export const SwitchWrapper = styled.div`
  border-radius: 2px;
  background-color: ${({ theme, switched }) => (switched ? theme.colors.greyisGreen : theme.colors.disabledBackground)};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ theme }) => theme.spacings.spacing_s};
  display: flex;
  justify-content: space-between;
`;

export const NameText = styled(Text)`
  ${({ theme, switched }) =>
    switched === "true" ? theme.textStyles.formElementValueSuccess : theme.textStyles.formElementValueDefault}
`;

export const SwitchButton = styled(Switch)`
  background-color: ${({ theme }) => theme.colors.overlay};
  height: 14px;
  width: 34px;
  min-width: 34px;
  .ant-switch-handle {
    ::before {
      background-color: ${({ theme }) => theme.colors.muted};
      top: -5px;
      height: 20px;
      width: 20px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
    }
  }
  &.ant-switch-checked {
    background-color: rgba(0, 200, 83, 0.5);
    .ant-switch-handle {
      ::before {
        background-color: ${({ theme }) => theme.colors.success};
      }
    }
  }
`;
