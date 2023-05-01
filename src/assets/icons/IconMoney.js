import React from "react";
import withIconStyles from "../shared/HOC/withIconStyles";
import SVG from "../shared/common/SVG";

const IconMoney = ({ stroke, ...rest }) => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...rest}>
    <g fill="none" fillRule="evenodd" stroke={stroke || "#BDBDBD"} strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M8.91 6.5c0 .718-1.996 1.3-4.455 1.3C1.995 7.8 0 7.218 0 6.5c0-.718 1.995-1.3 4.455-1.3s4.455.582 4.455 1.3zM8.91 9.1c0 .718-1.996 1.3-4.455 1.3C1.995 10.4 0 9.818 0 9.1"
        transform="translate(1 2)"
      />
      <path
        d="M8.91 6.5v5.2c0 .718-1.996 1.3-4.455 1.3C1.995 13 0 12.418 0 11.7V6.5M14 1.3c0 .718-1.995 1.3-4.455 1.3S5.09 2.018 5.09 1.3C5.09.582 7.085 0 9.545 0S14 .582 14 1.3zM14 3.9c0 .718-.722 1.3-3.182 1.3"
        transform="translate(1 2)"
      />
      <path d="M14 1.3v5.2c0 .718-.722 1.3-3.182 1.3" transform="translate(1 2)" />
      <path d="M14 6.5v2.6c0 .718-.722 1.3-3.182 1.3M5.09 1.3L5.09 3.264" transform="translate(1 2)" />
    </g>
  </SVG>
);

export default withIconStyles(IconMoney);
