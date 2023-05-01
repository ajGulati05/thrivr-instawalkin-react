import React, { useState } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { useDispatch } from "react-redux";
import { produce } from "immer";
import { Row, Col } from "antd";
import PInput from "../../../components/PInput";
import PButton from "../../../components/PButton";
import { Container, FormControl, FormControlBtn, FormHeader } from "./styled.js";
import { updateTherapistLicenseReqAction } from "../../../store/actions/license";

const LicenseForm = ({ licenseData }) => {
  const dispatch = useDispatch();
  const [firstValidation, setFirstValidation] = useState(false);
  const [values, setValues] = useState({
    license: ""
  });
  const [errValues, setErrValues] = useState({
    license: false
  });
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

  const handleChange = e => {
    setValues(
      produce(values, draft => {
        draft.license = e.target.value;
      })
    );

    setSaveButtonDisabled(false);

    setErrValues(
      produce(errValues, draft => {
        if (e.target.value) {
          if (firstValidation) draft.license = false;
        } else {
          if (firstValidation) draft.license = true;
        }
      })
    );
  };

  const validation = () => {
    const errLicenseValue = !values.license || !values.license.trim().length ? true : false;
    setErrValues(
      produce(errValues, draft => {
        draft.license = errLicenseValue;
      })
    );
    return !errLicenseValue;
  };

  const handleSubmit = () => {
    const validated = validation();
    setFirstValidation(true);
    if (validated) {
      const updatedLicense = {
        license: values.license
      };
      dispatch(updateTherapistLicenseReqAction(updatedLicense));
    }
  };

  return (
    <Container>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12}>
          <FormControl>
            <FormHeader>
              Create New License <span>(Active: {licenseData?.license_number})</span>
            </FormHeader>
            <PInput
              name="license"
              label="License"
              value={values?.license}
              onChange={handleChange}
              errorStas={errValues.license}
              helperMessage={errValues.license ? "The license is not valid!" : ""}
            />
          </FormControl>
          <FormControlBtn>
            <PButton disabled={saveButtonDisabled} pname="SAVE" ptype="save" onClick={handleSubmit} width="30%" />
          </FormControlBtn>
        </Col>
      </Row>
    </Container>
  );
};

LicenseForm.propTypes = {
  licenseData: PropTypes.object
};

export default withTheme(LicenseForm);
