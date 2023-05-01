import React, { useState } from "react";
import PropTypes from "prop-types";
import { PInputSwitchContainer, LabelText, SwitchWrapper, NameText, SwitchButton } from "./styled";

const PInputSwitch = ({ label, name, width, height, handleChange }) => {
  const [switched, setSwitched] = useState(false);

  function onChange(checked) {
    handleChange && handleChange(checked);
    setSwitched(checked);
  }

  return (
    <PInputSwitchContainer>
      <LabelText>{label}</LabelText>
      <SwitchWrapper width={width} height={height} switched={switched}>
        <NameText switched={switched.toString()}>{name}</NameText>
        <SwitchButton onChange={onChange} />
      </SwitchWrapper>
    </PInputSwitchContainer>
  );
};

PInputSwitch.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

PInputSwitch.defaultProps = {
  label: "label",
  name: "Input Switch",
  width: "186px",
  height: "38px"
};

export default PInputSwitch;
