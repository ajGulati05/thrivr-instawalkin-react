import styled from "styled-components";
import { ResponsiveContainer } from "recharts";

export const CustomResponsiveContainer = styled(ResponsiveContainer)`
  & .recharts-wrapper {
    .recharts-legend-wrapper {
      .recharts-default-legend {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

export const XAxisTick = styled.text`
  ${({ theme }) => theme.components.lineChart.xaxisTickTextStyle};
  fill: ${({ theme }) => theme.colors.placeholder};
  text-transform: uppercase;
`;

export const LegendText = styled.span`
  ${({ theme }) => theme.textStyles.generalItemTextDefault};
  color: ${({ color }) => color};
`;
