const addressUnitTypes = [
  ", Unit ",
  ", Suite ",
  ", # ",
  ", Apt. ",
  ", Apt ",
  " Unit ",
  " Suite ",
  " # ",
  " Apt. ",
  " Apt ",
  "Unit ",
  "Suite ",
  "# ",
  "Apt. ",
  "Apt "
];

let finalAddress = "";
let finalUnitNumber = "";

const splitUnitIdentifier = address => {
  addressUnitTypes.forEach(keyword => {
    if (address.includes(keyword)) {
      let splitAddress = address.split(keyword);
      finalAddress = splitAddress[0];
      finalUnitNumber = splitAddress[1];

      return { finalAddress, finalUnitNumber };
    } else if (address.includes(" - ")) {
      let splitAddress = address.split(" - ");
      finalAddress = splitAddress[1];
      finalUnitNumber = splitAddress[0];

      return { finalAddress, finalUnitNumber };
    } else {
      finalAddress = address;
      return { finalAddress, finalUnitNumber };
    }
  });
};

export const extractUnitNumberFromAddress = address => {
  if (address) {
    splitUnitIdentifier(address);

    return { finalAddress, finalUnitNumber };
  }
};
