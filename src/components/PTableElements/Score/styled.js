import styled from "styled-components";
import { Typography } from "antd";

const { Text } = Typography;

export const ScoreWrapper = styled(Text)`
  ${({ theme }) => theme.components.tableStyles.score.textStyle};
`;

export const Bordered = styled(Text)`
  color: ${({ type, theme }) => theme.components.tableStyles.score[type].color};
  padding: ${({ theme }) => theme.spacings.spacing_xxs} ${({ theme }) => theme.spacings.spacing_s};
  border: solid 1px ${({ type, theme }) => theme.components.tableStyles.score[type].color};
  border-radius: 2px;
`;

export const TextOf = styled(Text)`
  ${({ theme }) => theme.components.tableStyles.score.textStyle};
  padding-left: ${({ theme }) => theme.spacings.spacing_xxs};
  padding-right: ${({ theme }) => theme.spacings.spacing_xxs};
`;
