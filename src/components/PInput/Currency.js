import React from "react";
import PropTypes from "prop-types";
import { CurrencyContainer, CurrencyName } from "./styled";
import { IconMoney } from "../../assets/icons";

const Currency = ({ currencyName }) => {
  return (
    <CurrencyContainer>
      <CurrencyName>{currencyName}</CurrencyName>
      <IconMoney />
    </CurrencyContainer>
  );
};

Currency.propTypes = {
  currencyName: PropTypes.string
};

Currency.defaultProps = {
  currencyName: "USD"
};

export default Currency;
