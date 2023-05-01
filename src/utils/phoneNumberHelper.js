export const validatePhoneNumberMask = phoneNumber => {
  if (phoneNumber) {
    if (phoneNumber.includes(" - ")) {
      return phoneNumber;
    } else {
      const formattedNumber = phoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1-($2)-$3-$4");

      return formattedNumber;
    }
  }
};
