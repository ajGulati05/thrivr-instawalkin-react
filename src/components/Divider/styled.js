import styled from "styled-components";

export const DividerContainer = styled.div`
  padding-left: ${({ pleft }) => pleft};
  padding-right: ${({ pright }) => pright};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ bgcolor }) => bgcolor};
`;

export const DividerCotent = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ color }) => color};
`;
