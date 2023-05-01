import React from "react";
import PropTypes from "prop-types";
import { StatusWrapper } from "./styled";

const Status = ({ type, children }) => {
  return <StatusWrapper type={type}>{children}</StatusWrapper>;
};

Status.propTypes = {
  type: PropTypes.oneOf(["pending", "active", "error", "success", "rejected", "approved"]),
  children: PropTypes.node
};

Status.defaultProps = {
  type: "active"
};

export default Status;
