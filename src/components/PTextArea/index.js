import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import Currency from "./Currency";
import ErrorMessage from "../ErrorMessage";
import { CustomInput, LabelText } from "./styled";
import {
  phoneNumberPattern,
  emailPattern,
  alphabeticPattern,
  symbolPattern,
  doNotValidate,
  validateWith,
  validateRequired,
  validateCount,
  validateAmount,
  validateRatio,
  validateRate,
  validateEmail,
  validatePhoneNumber,
  validateAlphabetic,
  validateLength,
  validateMinLength,
  validatePattern,
  validateSymbol,
  validateMax,
  validateMin
} from "../../utils/validators";

const defaultsForType = type => {
  switch (type) {
    case "amount":
      return {
        vMin: "0",
        step: "0.01",
        vMax: "99999999.99",
        placeholder: "0.00",
        vMaxLength: 11
      };
    case "count":
      return {
        step: "1",
        vMin: "0",
        placeholder: "0"
      };
    case "ratio":
      return {
        vMin: "0",
        step: "0.01",
        vMax: "99999999.99",
        placeholder: "0.00",
        vMaxLength: 11
      };
    case "rate":
      return {
        vMin: "0",
        step: "0.01",
        vMax: "100.00",
        placeholder: "0.00%",
        vMaxLength: 5
      };
    case "max":
      return {
        vMin: "0",
        step: "1",
        vMax: "99999999",
        placeholder: "0",
        vMaxLength: 8
      };
    case "min":
      return {
        vMin: "0",
        step: "1",
        vMax: "99999999",
        placeholder: "0",
        vMaxLength: 8
      };

    default:
      return {};
  }
};

const maxLengthForType = type => {
  switch (type) {
    case "tel":
      return 14;
    case "number":
      return 11;
    case "rate":
      return 2;
    default:
      return undefined;
  }
};

const patternsForType = (type, pattern) => {
  if (pattern) {
    return pattern;
  }
  switch (type) {
    case "tel":
      return phoneNumberPattern;
    case "email":
      return emailPattern;
    case "alphabetic":
      return alphabeticPattern;
    case "symbol":
      return symbolPattern;
    default:
      return undefined;
  }
};

const typeValidators = (subType, maxLength) => {
  switch (subType) {
    case "amount":
      return validateAmount(maxLength);
    case "rate":
      return validateRate(maxLength);
    case "count":
      return validateCount(maxLength);
    case "tel":
      return validatePhoneNumber;
    case "email":
      return validateEmail;
    case "alphabetic":
      return validateAlphabetic;
    case "symbol":
      return validateSymbol;
    case "ratio":
      return validateRatio(maxLength);
    case "min":
      return validateCount(maxLength);
    case "max":
      return validateCount(maxLength);

    default:
      return doNotValidate;
  }
};

const buildWithDefaults = ({ vSubType, vType, ...rest }) => ({
  ...defaultsForType(vSubType || vType),
  vSubType,
  vType,
  ...rest
});

const PTextArea = props => {
  const {
    errorStas,
    label,
    helperMessage,
    errorMessage,
    suffix,
    currencyName,
    height,
    width,
    mTop,
    mBottom,
    mLeft,
    mRight,
    onChange,
    // props for the validation
    vType,
    vSubType,
    validate,
    vPattern: customPattern,
    vPatternErrorMsg,
    vMaxLength: defaultMaxLength,
    vMax,
    vMin,
    vMinLength,
    vRequired,
    error,
    setElmInputErr,
    // max, min validation
    comparingVal,
    noFieldValidation,
    ...rest
  } = buildWithDefaults(props);
  const [focusing, setFocusing] = useState(false);
  const [validateResult, setValidateResult] = useState();
  const maxLength = useMemo(() => {
    return defaultMaxLength || maxLengthForType(vType);
  }, [vType, defaultMaxLength]);

  const pattern = patternsForType(vType, customPattern);
  const validator = typeValidators(vSubType || vType, maxLength);
  const computedValidate = !noFieldValidation
    ? validateWith([
        vRequired ? validateRequired : doNotValidate,
        validator,
        vMax ? validateMax(vMax) : doNotValidate,
        validateMinLength ? validateMinLength(vMinLength) : doNotValidate,
        maxLength && !validator ? validateLength(maxLength) : doNotValidate,
        vMin ? validateMin(vMin) : doNotValidate,
        validator ? doNotValidate : validatePattern(pattern, vPatternErrorMsg),
        validate || doNotValidate
      ])
    : undefined;

  const onFocus = () => {
    setFocusing(true);
  };

  const onBlur = () => {
    setFocusing(false);
  };

  const handleValidation = (value, compVal) => {
    const result = computedValidate(value, compVal);
    setElmInputErr && setElmInputErr(result && result !== undefined);
    setValidateResult(result);
  };

  return (
    <React.Fragment>
      {label && (
        <LabelText focusing={focusing.toString()} validate={errorStas ? "error" : "default"}>
          {label}
        </LabelText>
      )}
      <CustomInput
        onFocus={onFocus}
        onBlur={onBlur}
        validate={errorStas ? "error" : "default"}
        suffix={currencyName ? <Currency currencyName={currencyName} /> : suffix}
        height={height}
        width={width}
        mtop={mTop}
        mbottom={mBottom}
        mleft={mLeft}
        mright={mRight}
        onChange={e => {
          handleValidation(e.target.value, comparingVal);
          if (onChange) {
            onChange(e);
          }
        }}
        {...rest}
      />
      {helperMessage && (
        <LabelText focusing={focusing.toString()} validate={errorStas ? "error" : "default"}>
          {helperMessage}
        </LabelText>
      )}
      {errorMessage && (
        <LabelText focusing={focusing.toString()} validate={"error"}>
          {errorMessage}
        </LabelText>
      )}
      {validateResult && validateResult !== undefined && (
        <ErrorMessage error={{ message: validateResult }} mRight="8px" />
      )}
    </React.Fragment>
  );
};

PTextArea.propTypes = {
  errorStas: PropTypes.bool,
  label: PropTypes.string,
  helperMessage: PropTypes.string,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  suffix: PropTypes.node,
  currencyName: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  mTop: PropTypes.string,
  mBottom: PropTypes.string,
  mLeft: PropTypes.string,
  mRight: PropTypes.string,
  onChange: PropTypes.func,
  // props for the validation
  vType: PropTypes.string,
  vSubType: PropTypes.string,
  validate: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  vPattern: PropTypes.string,
  vPatternErrorMsg: PropTypes.string,
  vMaxLength: PropTypes.number,
  vMax: PropTypes.number,
  vMin: PropTypes.number,
  vMinLength: PropTypes.number,
  vRequired: PropTypes.bool,
  error: PropTypes.string,
  noFieldValidation: PropTypes.bool,
  comparingVal: PropTypes.any
};

PTextArea.defaultProps = {
  errorStas: false,
  label: "",
  helperMessage: "",
  height: "38px"
};

export default PTextArea;
