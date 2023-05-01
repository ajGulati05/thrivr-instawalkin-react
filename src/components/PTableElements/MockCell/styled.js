import styled from "styled-components";

const alignHorizental = {
  left: "flex-start",
  center: "center",
  right: "flex-end"
};

const alignVertical = {
  top: "flex-start",
  center: "center",
  bottom: "flex-end"
};

export const MockCellWrapper = styled.div`
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.disabledBackground};
  display: flex;
  justify-content: center;
`;

export const Cell = styled.div`
  width: 126px;
  height: 34px;
  background-color: white;
  display: flex;
  padding: ${({ theme }) => theme.spacings.spacing_xs};
  align-items: ${({ alignv }) => alignVertical[alignv]};
  justify-content: ${({ alignh }) => alignHorizental[alignh]};
`;

export const Comments = styled.div`
  font-family: Roboto;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.greyishBrown};
  font-weight: 400;
  padding-top: 8px;
`;
