import styled from "styled-components";
import { Radio } from "antd";
import loginBackground from "../../assets/imgs/loginBackground.jpg";

export const Container = styled.div`
  display: flex;
`;

export const FormWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  ${({ theme }) => theme.views.loginPage.titleTextStyle};
  padding-bottom: ${({ theme }) => theme.spacings.spacing_xxl_3};
  display: flex;
  justify-content: center;
`;

export const Summary = styled.div`
  ${({ theme }) => theme.views.loginPage.summaryTextStyle};
  padding-bottom: ${({ theme }) => theme.spacings.spacing_xl};
`;

export const FormControl = styled.div`
  padding-bottom: ${({ theme }) => theme.spacings.spacing_s};
  width: 100%;
  ${({ mLeft }) => mLeft && `margin-left: ${mLeft}`}
  ${({ mRight }) => mRight && `margin-right: ${mRight}`}
  ${({ pLeft }) => pLeft && `margin-left: ${pLeft}`}
  ${({ pRight }) => pRight && `margin-right: ${pRight}`}
`;

export const FormControlRowWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacings.spacing_xl};
  padding-bottom: ${({ theme }) => theme.spacings.spacing_m};
`;

export const ForgotPassword = styled.div``;

export const FormContainer = styled.div`
  width: 425px;
  @media only screen and (max-width: 1240px) {
    width: 100%;
    padding-left: ${({ theme }) => theme.spacings.spacing_xl};
    padding-right: ${({ theme }) => theme.spacings.spacing_xl};
  }
`;

export const PasswordShowWrap = styled.span`
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  flex: 3;
  height: 100vh;
  background-position: right;
  background-repeat: no-repeat;
  background-image: url(${loginBackground});
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 900px) {
    flex: 2;
  }
  @media only screen and (max-width: 600px) {
    flex: 0;
  }
`;

export const GenderWrap = styled(Radio.Group)`
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 2px;
  border-color: ${({ theme }) => theme.colors.inputBorder};
  padding: 0 ${({ theme }) => theme.spacings.spacing_m};
`;

export const TOSText = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
`;
