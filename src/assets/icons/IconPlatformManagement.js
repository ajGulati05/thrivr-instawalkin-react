import React from "react";
import withIconStyles from "../shared/HOC/withIconStyles";
import SVG from "../shared/common/SVG";

const IconPlatformManagement = ({ stroke, ...rest }) => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...rest}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke={stroke || "#F05324"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M23 12c0 6.076-4.926 11-11 11-6.076 0-11-4.924-11-11C1 5.926 5.924 1 12 1c6.074 0 11 4.926 11 11z" />
      <path d="M13.004 1.059C16.068 3.737 18 7.647 18 11.999c0 4.357-1.933 8.267-5 10.945M10.996 22.943C7.93 20.265 6 16.355 6 12.003c0-4.357 1.932-8.267 5-10.945M12 1v22M2 8h20M2 16h20" />
    </g>
  </SVG>
);

export default withIconStyles(IconPlatformManagement);
