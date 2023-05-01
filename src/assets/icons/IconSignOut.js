import React from "react";
import withIconStyles from "../shared/HOC/withIconStyles";
import SVG from "../shared/common/SVG";

const IconSignOut = ({ stroke, ...rest }) => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...rest}>
    <g fill="none" fillRule="evenodd" stroke={stroke || "#FFF"} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 4.667v-2C10 2.3 9.7 2 9.333 2H2.66c-.367 0-.667.3-.667.667v10.666c0 .367.3.667.667.667h6.673c.367 0 .667-.3.667-.667v-2M5.997 8h9.336M12.667 10.667L15.333 8l-2.666-2.667" />
    </g>
  </SVG>
);

export default withIconStyles(IconSignOut);
