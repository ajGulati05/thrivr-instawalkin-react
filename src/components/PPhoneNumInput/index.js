import React from "react";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-input-2";
import { PhoneWrap, PhoneInputLabel, LabelText } from "./styled";
import "react-phone-input-2/lib/style.css";

const PPhoneNumInput = ({ width, label, phoneNumber, onPhoneNumberChange, helperMessage, errorStas, disabled }) => {
  return (
    <PhoneWrap width={width} disabled={disabled}>
      <PhoneInputLabel>{label}</PhoneInputLabel>
      <PhoneInput
        country={"ca"}
        countryCodeEditable={false}
        defaultMask={false}
        masks={{ ca: "(...)-...-...." }}
        disableDropdown
        value={phoneNumber}
        onlyCountries={["ca"]}
        onChange={(value, country, e, formattedValue) => onPhoneNumberChange(formattedValue)}
      />
      {helperMessage && <LabelText validate={errorStas ? "error" : "default"}>{helperMessage}</LabelText>}
    </PhoneWrap>
  );
};

PPhoneNumInput.propTypes = {
  phoneNumber: PropTypes.string,
  onPhoneNumberChange: PropTypes.func,
  errorStas: PropTypes.bool,
  helperMessage: PropTypes.string
};

export default PPhoneNumInput;
