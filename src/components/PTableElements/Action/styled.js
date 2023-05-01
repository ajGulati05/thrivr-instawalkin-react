import styled from "styled-components";
import { Typography } from "antd";

const { Text } = Typography;

export const ActionWrapper = styled(Text)`
  ${({ theme }) => theme.components.tableStyles.actions.textStyle};
  color: ${({ theme, type }) => theme.components.tableStyles.actions[type].color};
  cursor: pointer;
`;
