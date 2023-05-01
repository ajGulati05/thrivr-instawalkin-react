import React, { useState } from "react";
import PropTypes from "prop-types";
import { produce } from "immer";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form } from "antd";
import PInput from "../../components/PInput";
import PDropdown from "../../components/PDropdown";
import PButton from "../../components/PButton";
import PButtonSecondary from "../../components/PButtonSecondary";
import PRadio from "../../components/PRadio";
import {
  Container,
  FormWrapper,
  ImageWrapper,
  Title,
  FormControl,
  ButtonContainer,
  ForgotPassword,
  FormContainer,
  PasswordShowWrap,
  FormControlRowWrap,
  GenderWrap,
  TOSText
} from "./styled";
import { registerRequestAction } from "../../store/actions/auth";
import { isWhitespaceOrEmpty } from "../../utils/helpers";
import { emailRegExp } from "../../utils/validators";
import { getListOfAmericanTimezones } from "../../utils/dateHelpers";

const PasswordShow = ({ show, onClick }) => {
  return (
    <PasswordShowWrap onClick={onClick}>
      {show ? <i className="fa fa-eye-slash" /> : <i className="fa fa-eye" />}
    </PasswordShowWrap>
  );
};

PasswordShow.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func
};

PasswordShow.defaultProps = {
  show: false
};

const Registration = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [firstValidation, setFirstValidation] = useState(false);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    business_name: "",
    gender: "M",
    timezone: ""
  });
  const [errValues, setErrValues] = useState({
    firstname: false,
    lastname: false,
    email: false,
    password: false,
    confirmPassword: false,
    business_name: false,
    gender: false,
    timezone: false
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const goToLogin = () => {
    history.push("/login");
  };

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
    const errFirstName = values.firstname === "" ? true : false;
    const errLastName = values.lastname === "" ? true : false;
    const errEmail = !emailRegExp.test(values.email);
    const errPassword = isWhitespaceOrEmpty(values.password) && values.password?.length > 7;
    const errConfirmPassword = values.password !== values.confirmPassword;
    const errBusinessName = values.business_name === "" ? true : false;
    const gender = values.gender === "" ? true : false;
    const timezone = values.timezone === "" ? true : false;
    setErrValues(
      produce(errValues, draft => {
        draft.firstname = errFirstName;
        draft.lastname = errLastName;
        draft.email = errEmail;
        draft.password = errPassword;
        draft.confirmPassword = errConfirmPassword;
        draft.business_name = errBusinessName;
        draft.gender = gender;
        draft.timezone = timezone;
      })
    );
    return (
      !errFirstName &&
      !errLastName &&
      !errEmail &&
      !errPassword &&
      !errConfirmPassword &&
      !errBusinessName &&
      !gender &&
      !timezone
    );
  };

  const handleSubmit = () => {
    const validated = validation();
    setFirstValidation(true);
    if (validated) {
      const registrationValue = {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
        business_name: values.business_name,
        gender: values.gender,
        timezone: formattedTimezone()
      };
      dispatch(registerRequestAction(registrationValue));
    }
  };

  const handleRadio = e => {
    setValues(
      produce(values, draft => {
        draft.gender = e.target.value;
      })
    );
  };

  const formattedTimezone = () => {
    const newTimezone = values.timezone.replaceAll("/", "_");
    return newTimezone;
  };

  const handleTimezone = value => {
    setValues(
      produce(values, draft => {
        draft.timezone = value;
      })
    );
    setErrValues(
      produce(errValues, draft => {
        if (value) {
          if (firstValidation) draft.timezone = false;
        } else {
          if (firstValidation) draft.timezone = true;
        }
      })
    );
  };

  return (
    <Container>
      <ImageWrapper />
      <FormWrapper>
        <FormContainer>
          <Title>Sign Up</Title>
          <Form name="normal_signup" className="signup-form">
            <FormControlRowWrap>
              <FormControl mRight="12px">
                <PInput
                  name="firstname"
                  label="Firstname"
                  onChange={handleChange}
                  errorStas={errValues.firstname}
                  helperMessage={errValues.firstname ? "The firstname is not valid!" : ""}
                />
              </FormControl>

              <FormControl mLeft="12px">
                <PInput
                  name="lastname"
                  label="Lastname"
                  onChange={handleChange}
                  errorStas={errValues.lastname}
                  helperMessage={errValues.lastname ? "The lastname is not valid!" : ""}
                />
              </FormControl>
            </FormControlRowWrap>

            <FormControl>
              <PInput
                name="email"
                label="Email"
                onChange={handleChange}
                errorStas={errValues.email}
                helperMessage={errValues.email ? "The email is not valid!" : ""}
              />
            </FormControl>

            <FormControl>
              <PInput
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder=""
                suffix={<PasswordShow show={showPassword} onClick={handleShowPassword} />}
                onChange={handleChange}
                errorStas={errValues.password}
                helperMessage={errValues.password ? "The password must be at least 8 characters!" : ""}
              />
            </FormControl>

            <FormControl>
              <PInput
                name="confirmPassword"
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                placeholder=""
                suffix={<PasswordShow show={showPassword} onClick={handleShowPassword} />}
                onChange={handleChange}
                errorStas={errValues.confirmPassword}
                helperMessage={errValues.confirmPassword ? "Confirm password is not equal!" : ""}
              />
            </FormControl>

            <FormControl>
              <PInput
                name="business_name"
                label="Business Name"
                onChange={handleChange}
                errorStas={errValues.business_name}
                helperMessage={errValues.business_name ? "The business name is not valid!" : ""}
              />
            </FormControl>

            <FormControl>
              <GenderWrap onChange={handleRadio} value={values.gender}>
                <PRadio value={"M"}>Male</PRadio>
                <PRadio value={"F"}>Female</PRadio>
                <PRadio value={"O"}>Other</PRadio>
              </GenderWrap>
            </FormControl>

            <FormControl>
              <PDropdown
                label="Timezone"
                items={getListOfAmericanTimezones()}
                onChange={handleTimezone}
                width="100%"
                errorMessage={errValues.timezone ? "The timezone is required!" : ""}
              />
            </FormControl>

            <FormControl>
              <TOSText>By creating an account you agree to our Terms of Service and Privacy Policy</TOSText>
            </FormControl>

            <ButtonContainer>
              <PButton type="primary" htmlType="submit" pname="SUBMIT" width="100%" onClick={handleSubmit} />
            </ButtonContainer>
            <ForgotPassword>
              <PButtonSecondary
                ptype="default"
                pname="Already have account, login"
                psecondaryAlign="left"
                onClick={goToLogin}
              />
            </ForgotPassword>
          </Form>
        </FormContainer>
      </FormWrapper>
    </Container>
  );
};

export default Registration;
