import React, { useEffect } from "react";
import { withTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import PBox from "../../components/PBox";
import { Container } from "./styled.js";
import { getTherapistLicenseReqAction } from "../../store/actions/license";
import LicenseForm from "./LicenseForm";

const License = ({ theme }) => {
  const dispatch = useDispatch();
  const therapistLicense = useSelector(({ license: { therapistLicense } }) => therapistLicense);

  useEffect(() => {
    dispatch(getTherapistLicenseReqAction());
  }, [dispatch]);

  return (
    <PBox padding={theme.spacings.spacing_xl}>
      <Container>
        <LicenseForm licenseData={therapistLicense} />
      </Container>
    </PBox>
  );
};

export default withTheme(License);
