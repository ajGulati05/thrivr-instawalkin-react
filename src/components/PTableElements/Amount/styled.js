import styled from "styled-components";
import { Typography } from "antd";

const { Text } = Typography;

export const AmountWrapper = styled(Text)`
  ${({ theme }) => theme.components.tableStyles.amount.textStyle};
  color: ${({ type, theme }) => theme.components.tableStyles.amount[type].color};
`;
