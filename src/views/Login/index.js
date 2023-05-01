import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form } from "antd";
import PInput from "../../components/PInput";
import PButton from "../../components/PButton";
import PButtonSecondary from "../../components/PButtonSecondary";
import {
  Container,
  FormWrapper,
  ImageWrapper,
  LoginTitle,
  FormControl,
  ButtonContainer,
  ForgotPassword,
  FormContainer,
  PasswordShowWrap
} from "./styled";
import { loginRequestAction } from "../../store/actions/login";
import { isWhitespaceOrEmpty } from "../../utils/helpers";
import { emailRegExp } from "../../utils/validators";

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

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [firstValidation, setFirstValidation] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const goToForgotPassword = () => {
    history.push("/forgot-password");
  };

  const handleChange = e => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
      if (e.target.value) {
        firstValidation && setEmailErr(false);
      } else {
        firstValidation && setEmailErr(true);
      }
    } else {
      setPassword(e.target.value);
      if (e.target.value) {
        firstValidation && setPasswordErr(false);
      } else {
        firstValidation && setPasswordErr(true);
      }
    }
  };

  const validation = () => {
    const errEmail = !emailRegExp.test(email);
    const errPassword = isWhitespaceOrEmpty(password);
    setEmailErr(errEmail);
    setPasswordErr(errPassword);
    return !errEmail && !errPassword;
  };

  const handleSubmit = () => {
    const validated = validation();
    setFirstValidation(true);
    if (validated) {
      dispatch(loginRequestAction({ email, password }));
    }
  };

  return (
    <Container>
      <ImageWrapper />
      <FormWrapper>
        <FormContainer>
          <LoginTitle>Login</LoginTitle>
          <Form name="normal_login" className="login-form">
            <FormControl>
              <PInput
                name="email"
                label="Email"
                onChange={handleChange}
                errorStas={emailErr}
                helperMessage={emailErr ? "The email is not valid!" : ""}
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
                errorStas={passwordErr}
                helperMessage={passwordErr ? "Please input valid password!" : ""}
              />
            </FormControl>

            <ButtonContainer>
              <PButton type="primary" htmlType="submit" pname="LOGIN" width="100%" onClick={handleSubmit} />
            </ButtonContainer>
            <ForgotPassword>
              <PButtonSecondary
                ptype="default"
                pname="Forgot your password?"
                psecondaryAlign="left"
                psecondary={<i className="fa fa-lock" />}
                onClick={goToForgotPassword}
              />
            </ForgotPassword>
          </Form>
        </FormContainer>
      </FormWrapper>
    </Container>
  );
};

export default Login;
