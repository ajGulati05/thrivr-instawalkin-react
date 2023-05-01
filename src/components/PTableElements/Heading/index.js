import React from "react";
import PropTypes from "prop-types";
import { HeadingWrapper } from "./styled";

const Heading = ({ children }) => {
  return <HeadingWrapper>{children}</HeadingWrapper>;
};

Heading.propTypes = {
  children: PropTypes.node
};

export default Heading;
