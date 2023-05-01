import styled from "styled-components";

const SVG = styled.svg`
  width: ${({ width = 15 }) => width}px;
  min-width: ${({ width = 15 }) => width}px;
  height: ${({ height = 15 }) => height}px;
  fill: ${({ color = "#fff" }) => color};
  left: ${({ left }) => left && `${left}px`};
  stroke: ${({ stroke }) => stroke};
  background: ${({ backgroundColor }) => backgroundColor};
  margin: ${({ margin }) => margin};
  :hover {
    fill: ${({ hoverColor }) => hoverColor};
  }
`;

export default SVG;
