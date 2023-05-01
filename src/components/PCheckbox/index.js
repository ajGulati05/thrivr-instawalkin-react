import React from "react";
import PropTypes from "prop-types";
import { CustomCheckbox } from "./styled";

const PCheckbox = ({ height, width, ...rest }) => {
  return <CustomCheckbox height={height} width={width} {...rest} />;
};

PCheckbox.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

PCheckbox.defaultProps = {
  width: "14px",
  height: "14px"
};

export default PCheckbox;
