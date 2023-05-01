import React from "react";
import PropTypes from "prop-types";
import { ActionWrapper } from "./styled";

const Action = ({ type, children }) => {
  return <ActionWrapper type={type}>{children}</ActionWrapper>;
};

Action.propTypes = {
  type: PropTypes.oneOf(["trash", "caretDown", "continue", "caretUp"]),
  children: PropTypes.node
};

Action.defaultProps = {
  type: "continue"
};

export default Action;
