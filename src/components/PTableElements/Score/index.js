import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { ScoreWrapper, TextOf, Bordered } from "./styled";

const FomattedValue = ({ value, sign, decimalScale }) => {
  return (
    <NumberFormat
      value={Math.abs(value)}
      displayType={"text"}
      thousandSeparator={true}
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

const Score = ({ type, leftVal, rightVal, decimalScaleLeft, decimalScaleRight }) => {
  return (
    <ScoreWrapper type={type}>
      <Bordered type={type}>
        <FomattedValue className="right-val" value={leftVal} decimalScale={decimalScaleLeft} />
      </Bordered>
      <TextOf>of</TextOf>
      <FomattedValue value={rightVal} decimalScale={decimalScaleRight} />
    </ScoreWrapper>
  );
};

Score.propTypes = {
  type: PropTypes.oneOf(["pending", "approved", "rejected"]),
  leftVal: PropTypes.number,
  rightVal: PropTypes.number,
  decimalScaleLeft: PropTypes.number,
  decimalScaleRight: PropTypes.number
};

Score.defaultProps = {
  type: "pending"
};

export default Score;
