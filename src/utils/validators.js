//@flow
const amountPattern = /^[0-9]+\.{0,1}\d{0,2}$/;
const ratioPattern = /^[0-9]{0,1}\.[0-9]{0,2}$/;
const ratePattern = /^[0-9]+\.{0,1}\d{0,2}$/;
const countPattern = /^[0-9]+$/;
export const phoneNumberPattern = "^\\+\\d{11,13}$";
export const phoneNumberPartialPattern = "^\\+?\\d{0,13}$";
const phoneNumberRegExp = new RegExp(phoneNumberPattern);
export const emailPattern =
  "^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}" +
  "[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
export const emailRegExp = new RegExp(emailPattern);
export const alphabeticPattern = "^[A-Za-z]+$";
const alphabeticRegExp = new RegExp(alphabeticPattern);
export const symbolPattern = "^[A-Za-z]+[A-Za-z0-9-_ ]*$";
const symbolRegExp = new RegExp(symbolPattern);

export const doNotValidate = () => "";

export const validateWith = validators => (value, otherValues) => {
  const result = validators.reduce((acc, v) => {
    const val = v(value, otherValues);
    return `${acc}${val ? `${val}\n` : ""}`;
  }, "");
  return result === "" ? undefined : result;
};

export const validateRequired = value =>
  value === undefined || value === null || value === "" ? "This is required!" : undefined;

export const validateLength = length => value =>
  value && value.length > length ? "The value is too long!" : undefined;

export const validateMinLength = length => value =>
  value && value.length < length ? "The value is too short!" : undefined;

export const validateNumber = number => (number && Number.isNaN(Number(number)) ? "Should be a number!" : undefined);

const validatePositive = amount => (amount && Number(amount) < 0 ? "Cannot be negative!" : undefined);

const positiveNumberWrapper = (length, value, validator) => {
  const isNotANumber = validateNumber(value);
  if (isNotANumber) {
    return isNotANumber;
  }
  const invalidLength = validateLength(length)(value && value.toString());
  if (invalidLength) {
    return invalidLength;
  }
  const isNotPositive = validatePositive(value);
  if (isNotPositive) {
    return isNotPositive;
  }
  return validator(value);
};

const validateAmountDecimals = amount =>
  amount && !amountPattern.test(amount) ? "Can have only up to two decimal numbers!" : undefined;

export const validateAmount = length => amount => positiveNumberWrapper(length, amount, validateAmountDecimals);

const validateCountDecimals = count => (count && !countPattern.test(count) ? "Has to be an integer!" : undefined);

export const validateCount = length => count => positiveNumberWrapper(length, count, validateCountDecimals);

const validateRatioDecimals = ratio =>
  ratio && !ratioPattern.test(ratio) ? "Can have only up to two decimal numbers!" : undefined;

export const validateRatio = length => ratio => positiveNumberWrapper(length, ratio, validateRatioDecimals);

const validateRateDecimals = rate =>
  rate && !ratePattern.test(rate) ? "Can have only up to two decimal numbers!" : undefined;

export const validateRate = length => rate => positiveNumberWrapper(length, rate, validateRateDecimals);

export const validatePhoneNumber = phoneNumber =>
  phoneNumber && !phoneNumberRegExp.test(phoneNumber)
    ? "A phone number should contain at least 11 digits and be preceded by a + sign!"
    : undefined;

export const validateEmail = email => (email && !emailRegExp.test(email) ? "The email is not valid!" : undefined);

export const validateAlphabetic = value =>
  value && !alphabeticRegExp.test(value) ? "Should only contain letters!" : undefined;

export const validatePattern = (pattern, customErrorMsg) => {
  const regExp = new RegExp(pattern);
  return value => (value && !regExp.test(value) ? customErrorMsg || "Not valid!" : undefined);
};

export const validateMax = max => value => {
  return value && Number(value) > Number(max) ? `Cannot be greater than ${max}!` : undefined;
};

export const validateMin = min => value =>
  (value || value === 0 || value === "0") && Number(value) < Number(min) ? `Cannot be lower than ${min}!` : undefined;

export const validateSymbol = value =>
  value && !symbolRegExp.test(value)
    ? "Should start with an alphabetic character, but may contain: numbers, - and _"
    : undefined;

// Validates fromDate to be lower that toDate
export const validateFromDateIsLowerThanToDate = (fromDate, toDate, dateErrorMessage) =>
  fromDate <= toDate ? undefined : dateErrorMessage;
