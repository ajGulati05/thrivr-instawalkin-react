import React from "react";
import PropTypes from "prop-types";
import { CustomCard } from "./styled";

const PCard = ({ height, width, ...rest }) => {
  return <CustomCard height={height} width={width} {...rest} />;
};

PCard.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

PCard.defaultProps = {
  width: "14px",
  height: "14px"
};

export default PCard;
