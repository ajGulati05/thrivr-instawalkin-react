import React, { useState } from "react";
import { withTheme } from "styled-components";
import { useDispatch } from "react-redux";
import { produce } from "immer";
import { Row, Col } from "antd";
import PInput from "../../../components/PInput";
import PButton from "../../../components/PButton";
import { Container, FormDetail, FormControl, FormControlBtn } from "./styled.js";
import { updateTherapistPasswordReqAction } from "../../../store/actions/change-password";

const ChangePasswordForm = () => {
  const dispatch = useDispatch();
  const [firstValidation, setFirstValidation] = useState(false);
  const [values, setValues] = useState({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const [errValues, setErrValues] = useState({
    current_password: false,
    password: false,
    password_confirmation: false
  });

  const saveButtonDisabled = values.current_password && values.password && values.password_confirmation ? false : true;

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(
      produce(values, draft => {
        draft[name] = value;
      })
    );

    setErrValues(
      produce(errValues, draft => {
        if (value) {
          if (firstValidation) draft[name] = false;
        } else {
          if (firstValidation) draft[name] = true;
        }
      })
    );
  };

  const validation = () => {
    const errCurrentPassword = values.current_password === "" ? true : false;
    const errPassword = values.password === "" || values.password.length < 6 ? true : false;
    const errPasswordConfirm =
      values.password_confirmation === "" || values.password_confirmation !== values.password ? true : false;
    setErrValues(
      produce(errValues, draft => {
        draft.current_password = errCurrentPassword;
        draft.password = errPassword;
        draft.password_confirmation = errPasswordConfirm;
      })
    );
    return !errCurrentPassword && !errPassword && !errPasswordConfirm;
  };

  const handleSubmit = () => {
    const validated = validation();
    setFirstValidation(true);
    if (validated) {
      const updatedPassword = {
        current_password: values.current_password,
        password: values.password,
        password_confirmation: values.password_confirmation
      };
      dispatch(updateTherapistPasswordReqAction(updatedPassword));
    }
  };

  return (
    <Container>
      <Row gutter={16}>
        <Col className="gutter-row" xs={24} sm={12} md={12}>
          <FormDetail>
            <FormControl>
              <PInput
                name="current_password"
                label="Current Password"
                value={values?.current_password}
                onChange={handleChange}
                errorStas={errValues.current_password}
                helperMessage={errValues.current_password ? "Current password is required!" : ""}
              />
            </FormControl>

            <FormControl>
              <PInput
                name="password"
                label="New Password"
                value={values?.password}
                onChange={handleChange}
                errorStas={errValues.password}
                helperMessage={errValues.password ? "New password must be at least 6 characters!" : ""}
              />
            </FormControl>

            <FormControl>
              <PInput
                name="password_confirmation"
                label="Confirm New Password"
                value={values?.password_confirmation}
                onChange={handleChange}
                errorStas={errValues.password_confirmation}
                helperMessage={errValues.password_confirmation ? "New passwords do not match!" : ""}
              />
            </FormControl>

            <FormControlBtn>
              <PButton disabled={saveButtonDisabled} pname="SAVE" ptype="save" onClick={handleSubmit} width="30%" />
            </FormControlBtn>
          </FormDetail>
        </Col>
      </Row>
    </Container>
  );
};

export default withTheme(ChangePasswordForm);
