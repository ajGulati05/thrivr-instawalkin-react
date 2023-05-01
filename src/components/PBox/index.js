import React from "react";
import PropTypes from "prop-types";
import { PBoxContainer } from "./styled";

const PBox = ({ padding, mLeft, mRight, mTop, mBottom, pLeft, pRight, pTop, pBottom, children, ...props }) => {
  return (
    <PBoxContainer
      padding={padding}
      mLeft={mLeft}
      mRight={mRight}
      mTop={mTop}
      mBottom={mBottom}
      pLeft={pLeft}
      pRight={pRight}
      pTop={pTop}
      pBottom={pBottom}
      {...props}
    >
      {children}
    </PBoxContainer>
  );
};

PBox.propTypes = {
  padding: PropTypes.string,
  children: PropTypes.node,
  mLeft: PropTypes.string,
  mRight: PropTypes.string,
  mTop: PropTypes.string,
  mBottom: PropTypes.string,
  pLeft: PropTypes.string,
  pRight: PropTypes.string,
  pTop: PropTypes.string,
  pBottom: PropTypes.string
};

export default PBox;
