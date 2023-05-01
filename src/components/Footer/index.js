import React from "react";
import { withTheme } from "styled-components";
import { FooterContainer, LogoContainer, FooterIncContainer, PLink, TextLogo } from "./styled";

const Footer = ({ theme }) => {
  return (
    <FooterContainer>
      <LogoContainer>
        <TextLogo>Thrivr</TextLogo>
      </LogoContainer>
      <FooterIncContainer>
        © 2020
        <PLink>Thrivr Inc.</PLink>
        All Rights Reserved
      </FooterIncContainer>
    </FooterContainer>
  );
};

export default withTheme(Footer);
