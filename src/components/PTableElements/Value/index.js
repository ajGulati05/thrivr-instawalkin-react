import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "antd";
import { ValueWrapper } from "./styled";

const Value = ({ children, tooltipLabel }) => {
  return (
    <ValueWrapper>
      {tooltipLabel ? (
        <Tooltip placement="bottomLeft" title={tooltipLabel}>
          {children}
        </Tooltip>
      ) : (
        children
      )}
    </ValueWrapper>
  );
};

Value.propTypes = {
  children: PropTypes.node,
  tooltipLabel: PropTypes.string
};

export default Value;
