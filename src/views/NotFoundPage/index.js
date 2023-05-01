import React from "react";
import { withTheme } from "styled-components";
import { Container } from "./styled";

const NotFoundPage = ({ theme }) => {
  return <Container actived>Not Found Page</Container>;
};

export default withTheme(NotFoundPage);
