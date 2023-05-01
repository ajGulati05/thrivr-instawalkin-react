import styled from "styled-components";
import { Typography } from "antd";

const { Text } = Typography;

export const ValueWrapper = styled(Text)`
  ${({ theme }) => theme.components.tableStyles.value.textStyle};
`;
