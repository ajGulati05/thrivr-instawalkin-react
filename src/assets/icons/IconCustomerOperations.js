import React from "react";
import withIconStyles from "../shared/HOC/withIconStyles";
import SVG from "../shared/common/SVG";

const IconCustomerOperations = ({ stroke, ...rest }) => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...rest}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke={stroke || "#F05324"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M22 5a2 2 0 1 1-4.001-.002A2 2 0 0 1 22 5zM23 11a3 3 0 0 0-6 0h6zM6 5a2 2 0 1 1-4.001-.002A2 2 0 0 1 6 5zM1 11a3 3 0 0 1 6 0H1zM14 16a2 2 0 1 1-4.001-.002A2 2 0 0 1 14 16zM15 22a3 3 0 0 0-6 0h6zM9 3c1.657-1.334 4.343-1.332 6 0M17 18c1.312-.828 2.365-2.492 3-4M7 18c-1.312-.828-2.365-2.492-3-4" />
    </g>
  </SVG>
);

export default withIconStyles(IconCustomerOperations);
