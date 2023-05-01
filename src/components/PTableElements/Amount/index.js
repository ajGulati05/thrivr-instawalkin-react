import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { AmountWrapper } from "./styled";

function evaluateType(value, typeVal) {
  let type = "";
  if (value === 0) {
    type = "zero";
  } else if (value > 0) {
    type = "positive";
  } else if (value < 0) {
    type = "negative";
  } else {
    type = typeVal;
  }

  return type;
}

function getSign(type) {
  let sign = "";
  switch (type) {
    case "zero":
      sign = "";
      break;
    case "positive":
      sign = "+";
      break;
    case "negative":
      sign = "-";
      break;
    default:
      sign = "";
  }

  return sign;
}

const FomattedValue = ({ value, sign, decimalScale }) => {
  return (
    <NumberFormat
      value={Math.abs(value)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={`${sign} `}
      decimalScale={decimalScale}
      fixedDecimalScale={true}
      allowLeadingZeros={true}
    />
  );
};

FomattedValue.propTypes = {
  value: PropTypes.number,
  sign: PropTypes.string,
  decimalScale: PropTypes.number
};

FomattedValue.defaultProps = {
  sign: "+",
  decimalScale: 2
};

const Amount = ({ type, value, decimalScale, children }) => {
  const amountType = evaluateType(value, type);
  const sign = getSign(amountType);

  return (
    <AmountWrapper type={amountType}>
      {value !== undefined ? <FomattedValue value={value} sign={sign} decimalScale={decimalScale} /> : children}
    </AmountWrapper>
  );
};

Amount.propTypes = {
  type: PropTypes.oneOf(["positive", "negative", "zero"]),
  value: PropTypes.number,
  decimalScale: PropTypes.number,
  children: PropTypes.node
};

Amount.defaultProps = {
  type: "positive"
};

export default Amount;
