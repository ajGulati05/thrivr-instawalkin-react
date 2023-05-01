import React from "react";
import PropTypes from "prop-types";
import { PTimePickerCompo } from "./styled";

const PTimePicker = ({ width, ...rest }) => {
  return <PTimePickerCompo width={width} {...rest} />;
};

PTimePicker.propTypes = {
  showTime: PropTypes.bool,
  labelSmall: PropTypes.bool
};

PTimePicker.defaultProps = {
  showTime: false,
  labelSmall: false
};

export default PTimePicker;
