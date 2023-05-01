import styled from "styled-components";
import { Typography } from "antd";

const { Text } = Typography;

export const HeadingWrapper = styled(Text)`
  ${({ theme }) => theme.components.tableStyles.heading.textStyle}
`;
