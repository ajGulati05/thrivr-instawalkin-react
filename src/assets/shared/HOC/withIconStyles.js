import React from "react";
import PropTypes from "prop-types";

export default WrappedComponent => {
  const hocComponent = ({ hoverColor, color, ...props }) => {
    if (!hoverColor) {
      hoverColor = color;
    }
    return <WrappedComponent color={color} hoverColor={hoverColor} {...props} />;
  };

  hocComponent.propTypes = {
    color: PropTypes.string,
    hoverColor: PropTypes.any
  };

  hocComponent.defaultProps = {
    color: "#fff",
    hoverColor: null
  };

  return hocComponent;
};
