import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { Value, DecimalValue } from "./styled";
import { colorPalette } from "../../constants/styleguide";

const FormatValue = ({ value, fSize, fWeight, align, color, decimalFSize, decimalFWeight, decimalColor }) => {
  const doubleValByPoint = value => {
    if (value !== null) {
      const result = value !== undefined && value?.toString().split(".");
      if (result.length > 1) {
        return result[1].toString();
      }
      return "00";
    } else {
      return "-";
    }
  };

  return (
    <Value fSize={fSize} fWeight={fWeight} color={color} align={align}>
      <NumberFormat displayType={"text"} value={value} thousandSeparator={true} decimalScale={0} />
      <DecimalValue decimalColor={decimalColor} decimalFSize={decimalFSize} decimalFWeight={decimalFWeight}>
        {doubleValByPoint(value) === "-" ? doubleValByPoint(value) : `.${doubleValByPoint(value)}`}
      </DecimalValue>
    </Value>
  );
};

FormatValue.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fSize: PropTypes.string,
  fWeight: PropTypes.string,
  align: PropTypes.string,
  color: PropTypes.string,
  decimalFSize: PropTypes.string,
  desimalFWeight: PropTypes.string,
  decimalColor: PropTypes.string
};

FormatValue.defaultProps = {
  fSize: "17px",
  fWeight: "500",
  color: colorPalette.greyishBrown,
  decimalFSize: "14px",
  decimalFWeight: "500",
  decimalColor: colorPalette.greyishBrown
};

export default FormatValue;
