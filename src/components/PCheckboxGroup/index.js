import React from "react";
import PropTypes from "prop-types";
import { CustomCheckboxGroup } from "./styled";

const PCheckboxGroup = ({ height, width, ...rest }) => {
  return <CustomCheckboxGroup height={height} width={width} {...rest} />;
};

PCheckboxGroup.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

PCheckboxGroup.defaultProps = {
  width: "14px",
  height: "14px"
};

export default PCheckboxGroup;
