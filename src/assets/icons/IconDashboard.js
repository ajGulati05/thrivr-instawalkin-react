import React from "react";
import withIconStyles from "../shared/HOC/withIconStyles";
import SVG from "../shared/common/SVG";

const IconDashboard = ({ stroke, ...rest }) => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...rest}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke={stroke || "#F05324"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M16.718 14.107H23A11.105 11.105 0 0 1 14.108 23v-6.282a5.148 5.148 0 0 0 2.61-2.611z" />
      <path d="M7.05 12.09a5.067 5.067 0 0 0 3.024 4.628V23C4.922 22.053 1 17.536 1 12.09 1 5.96 5.97 1 12.09 1c5.435 0 9.962 3.913 10.91 9.074h-6.282c-.786-1.774-2.561-3.025-4.627-3.025A5.043 5.043 0 0 0 7.05 12.09z" />
    </g>
  </SVG>
);

export default withIconStyles(IconDashboard);
