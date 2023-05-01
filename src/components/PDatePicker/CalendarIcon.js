import React from "react";
import PropTypes from "prop-types";
import { CalendarIconContainer, FromText } from "./styled";

const CalendarIcon = ({ label, labelSmall }) => {
  return (
    <CalendarIconContainer>
      <i className="fa fa-calendar" />
      {!labelSmall && <FromText>{label}</FromText>}
    </CalendarIconContainer>
  );
};

CalendarIcon.propTypes = {
  label: PropTypes.string
};

CalendarIcon.defaultProps = {
  label: "From"
};

export default CalendarIcon;
