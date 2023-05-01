import React from "react";
import withIconStyles from "../shared/HOC/withIconStyles";
import SVG from "../shared/common/SVG";

const IconArrowUp = ({ fill, ...rest }) => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...rest}>
    <path
      fill={fill || "#757575"}
      fillRule="nonzero"
      d="M14.936 14.75a.764.764 0 0 0 1.092 0l.419-.418a.764.764 0 0 0 0-1.092l-3.9-3.901a.764.764 0 0 0-1.093 0l-3.9 3.9a.764.764 0 0 0 0 1.093l.418.418a.764.764 0 0 0 1.092 0L12 11.814l2.936 2.936z"
    />
  </SVG>
);

export default withIconStyles(IconArrowUp);
