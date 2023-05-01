import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { FooterMenuContainer, MenuTitle } from "./styled";

const FooterMenu = ({ menuText, icon, to }) => {
  const history = useHistory();
  function switchRouter(route) {
    history.push(route);
  }

  const handleClick = () => {
    switchRouter(to);
  };
  return (
    <FooterMenuContainer onClick={handleClick}>
      {icon}
      <MenuTitle>{menuText}</MenuTitle>
    </FooterMenuContainer>
  );
};

FooterMenu.propTypes = {
  icon: PropTypes.node,
  menuText: PropTypes.string,
  to: PropTypes.string
};

export default FooterMenu;
