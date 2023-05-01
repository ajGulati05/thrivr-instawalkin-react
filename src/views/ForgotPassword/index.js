import React, { useState } from "react";
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
  Title,
  FormControl,
  ButtonContainer,
  FormContainer,
  BackToLogin
} from "./styled";
import { forgotPasswordRequestAction } from "../../store/actions/forgot-password";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [firstValidation, setFirstValidation] = useState(false);

  const handleChange = e => {
    setEmail(e.target.value);
    if (e.target.value && validateEmail(e.target.value)) {
      firstValidation && setEmailErr(false);
    } else {
      firstValidation && setEmailErr(true);
    }
  };

  const validateEmail = email => {
    // eslint-disable-next-line no-useless-escape
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{1,255}[\.][a-z]{2,5}/g;
    return pattern.test(email);
  };

  const validation = () => {
    setEmailErr(!validateEmail(email) || email === "");
    return validateEmail(email);
  };

  const handleSubmit = () => {
    const validated = validation();
    setFirstValidation(true);
    if (validated) {
      console.log("forgot password values of form: ", email);
      dispatch(forgotPasswordRequestAction({ email }));
    }
  };

  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <Container>
      <ImageWrapper />
      <FormWrapper>
        <FormContainer>
          <Title>Reset Password</Title>
          <Form name="normal_forgotpassword" className="forgotpassword-form">
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

            <ButtonContainer>
              <PButton pname="SEND" type="submit" width="100%" onClick={handleSubmit} />
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

export default ForgotPassword;
