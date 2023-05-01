import styled from "styled-components";

export const Value = styled.div`
  ${({ theme }) => theme.views.dashboard.revenue.aggregations.valueTextStyle}
  font-size: ${({ fSize }) => fSize};
  font-weight: ${({ fWeight }) => fWeight};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
`;

export const DecimalValue = styled.span`
  ${({ theme }) => theme.views.dashboard.revenue.aggregations.valueTextStyle}
  font-size: ${({ decimalFSize }) => decimalFSize};
  font-weight: ${({ decimalFWeight }) => decimalFWeight};
  color: ${({ color }) => color};
  color: ${({ decimalColor }) => decimalColor};
`;
