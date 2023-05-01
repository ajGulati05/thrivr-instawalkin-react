import React from "react";
import withIconStyles from "../shared/HOC/withIconStyles";
import SVG from "../shared/common/SVG";

const IconSun = ({ stroke, fill, ...rest }) => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...rest}>
    <g fill="none" fillRule="evenodd" stroke={stroke || "#F05323"} strokeLinecap="round" strokeLinejoin="round">
      <path
        fill={fill || "#F05323"}
        fillRule="nonzero"
        d="M10.667 8c0-1.467-1.2-2.667-2.667-2.667A2.675 2.675 0 0 0 5.333 8c0 1.467 1.2 2.667 2.667 2.667 1.467 0 2.667-1.2 2.667-2.667z"
      />
      <path d="M8 3.333V.667M8 15.333v-2.666M12.667 8h2.666M.667 8h2.666M11.333 11l2 2M2.667 2.333l2 2M4.667 11l-2 2M13.333 2.333l-2 2" />
    </g>
  </SVG>
);

export default withIconStyles(IconSun);
