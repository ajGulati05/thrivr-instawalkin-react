import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Container, LabelText } from "./styled";

const AddressInput = ({ theme, label, address, handleAddressChange, error, disabled }) => {
  return (
    <Container disabled={disabled}>
      {label && <LabelText>{label}</LabelText>}
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_GOOGLE_ADDRESS_AUTO_COMPLETE_KEY}
        autocompletionRequest={{
          componentRestrictions: {
            country: ["ca"]
          }
        }}
        minLengthAutocomplete={3}
        debounce={400}
        selectProps={{
          styles: {
            control: base => ({
              ...base,
              "&:hover": { borderColor: error ? "red" : theme.colors.focusColor },
              height: "38px",
              border: "solid 2px #e0e0e0",
              borderRadius: "2px",
              borderColor: error ? "red" : theme.colors.inputBorder,
              boxShadow: "none",
              width: "100%",
              backgroundColor: disabled ? "#f5f5f5" : "#ffffff"
            })
          },
          // className: classes.addressField,
          value: address,
          defaultInputValue: address,
          placeholder: address ? address : "",
          onChange: address => handleAddressChange(address.value),
          getOptionLabel: option => option.label
        }}
      />
    </Container>
  );
};

export default withTheme(AddressInput);

AddressInput.propTypes = {
  address: PropTypes.string,
  handleAddressChange: PropTypes.func,
  error: PropTypes.bool
};
