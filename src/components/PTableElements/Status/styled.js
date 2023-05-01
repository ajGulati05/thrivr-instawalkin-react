import styled from "styled-components";
import { Typography } from "antd";

const { Text } = Typography;

export const StatusWrapper = styled(Text)`
  ${({ theme }) => theme.components.tableStyles.status.textStyle};
  color: ${({ theme, type }) => theme.components.tableStyles.status[type].color};
  cursor: pointer;

  &:after {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    background: ${({ theme, type }) => theme.components.tableStyles.status[type].color};
    border-radius: 50%;
    margin-left: 5px;
  }
`;
