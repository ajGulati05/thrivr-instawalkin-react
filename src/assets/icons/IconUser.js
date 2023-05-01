import React from "react";
import withIconStyles from "../shared/HOC/withIconStyles";
import SVG from "../shared/common/SVG";

const IconUser = ({ stroke, ...rest }) => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...rest}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke={stroke || "#FFF"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M23.25 12C23.25 5.788 18.213.75 12 .75S.75 5.788.75 12c0 6.214 5.037 11.25 11.25 11.25S23.25 18.214 23.25 12zM19.975 19.934l-5.93-3.571M9.956 16.363l-5.931 3.573" />
      <path d="M14.044 16.363c2.05-1.484 2.047-4.387 2.047-4.387L16.088 8.6C15.794 7.044 13.794 5.863 12 5.863s-3.794 1.184-4.088 2.74l-.003 3.375s-.003 2.9 2.047 4.385" />
    </g>
  </SVG>
);

export default withIconStyles(IconUser);
