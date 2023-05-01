import React from "react";
import { withTheme } from "styled-components";
import PBox from "../../components/PBox";
import { Container } from "./styled.js";
import ChangePasswordForm from "./ChangePasswordForm";

const ChangePassword = ({ theme }) => {
  return (
    <PBox padding={theme.spacings.spacing_xl}>
      <Container>
        <ChangePasswordForm />
      </Container>
    </PBox>
  );
};

export default withTheme(ChangePassword);
