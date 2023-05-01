import styled from "styled-components";
import { Card } from "antd";

export const CustomCard = styled(Card)`
  .ant-card {
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.muted};
    height: ${({ height }) => height};
    width: ${({ width }) => width};
  }
`;
