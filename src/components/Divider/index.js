import React from "react";
import PropTypes from "prop-types";
import { DividerContainer, DividerCotent } from "./styled";

const Divider = ({ pLeft, pRight, pTop, pBottom, color, bgColor, height, width }) => {
  return (
    <DividerContainer
      pleft={pLeft}
      pright={pRight}
      ptop={pTop}
      pBottom={pBottom}
      bgcolor={bgColor}
      height={height}
      width={width}
    >
      <DividerCotent
        pleft={pLeft}
        pright={pRight}
        ptop={pTop}
        pBottom={pBottom}
        color={color}
        height={height}
        width={width}
      />
    </DividerContainer>
  );
};

Divider.propTypes = {
  pLeft: PropTypes.string,
  pRight: PropTypes.string,
  pTop: PropTypes.string,
  pBottom: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  bgColor: PropTypes.string
};

Divider.defaultProps = {
  pLeft: "0px",
  pRight: "0px",
  pTop: "0px",
  pBottom: "0px",
  color: "#fff",
  height: "1px",
  width: "100%"
};

export default Divider;
