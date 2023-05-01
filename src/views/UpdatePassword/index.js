import React, { useEffect, useState } from "react";
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
  FormContainer,
  PasswordShowWrap,
  BackToLogin
} from "./styled";
import { updatePasswordRequestAction } from "../../store/actions/update-password";
import { isWhitespaceOrEmpty } from "../../utils/helpers";

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

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [token, setToken] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [firstValidation, setFirstValidation] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = e => {
    if (e.target.name === "password") {
      setPassword(e.target.value);
      if (e.target.value) {
        firstValidation && setPasswordErr(false);
      } else {
        firstValidation && setPasswordErr(true);
      }
    } else {
      setEmail(e.target.value);
      if (e.target.value && validateEmail(e.target.value)) {
        firstValidation && setEmailErr(false);
      } else {
        firstValidation && setEmailErr(true);
      }
    }
  };

  const validateEmail = email => {
    // eslint-disable-next-line no-useless-escape
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{1,255}[\.][a-z]{2,5}/g;
    return pattern.test(email);
  };

  const validation = () => {
    const error = isWhitespaceOrEmpty(password) && password?.length > 7;
    setPasswordErr(error);
    setEmailErr(!validateEmail(email) || email === "");
    return !error && validateEmail(email);
  };

  const handleSubmit = () => {
    const validated = validation();
    setFirstValidation(true);
    if (validated) {
      dispatch(
        updatePasswordRequestAction({
          password,
          email,
          token
        })
      );
    }
  };

  const goToLogin = () => {
    history.push("/login");
  };

  useEffect(() => {
    const { search } = history.location;
    if (search) {
      setToken(search.split("?token=")[1]);
    }
  }, [history]);

  return (
    <Container>
      <ImageWrapper />
      <FormWrapper>
        <FormContainer>
          <LoginTitle>Reset password</LoginTitle>
          <Form name="normal_login" className="login-form">
            <FormControl>
              <PInput
                name="email"
                label="Email"
                type="email"
                onChange={handleChange}
                errorStas={emailErr}
                helperMessage={emailErr ? "Please input valid email!" : ""}
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
                helperMessage={passwordErr ? "The password must be at least 8 characters!" : ""}
              />
            </FormControl>

            <ButtonContainer>
              <PButton type="primary" htmlType="submit" pname="SEND" width="100%" onClick={handleSubmit} />
            </ButtonContainer>

            <BackToLogin>
              <PButtonSecondary
                ptype="default"
                pname="Back to Login"
                psecondaryAlign="left"
                psecondary={<i className="fa fa-arrow-left" />}
                onClick={goToLogin}
              />
            </BackToLogin>
          </Form>
        </FormContainer>
      </FormWrapper>
    </Container>
  );
};

export default UpdatePassword;
