import styled from "styled-components";
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
  padding-bottom: ${({ theme }) => theme.spacings.spacing_xs};
  text-align: center;
`;

export const Summary = styled.div`
  ${({ theme }) => theme.views.loginPage.summaryTextStyle};
  padding-bottom: ${({ theme }) => theme.spacings.spacing_xl};
`;

export const FormControl = styled.div`
  padding-bottom: ${({ theme }) => theme.spacings.spacing_s};
`;

export const ButtonContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacings.spacing_xl};
  padding-bottom: ${({ theme }) => theme.spacings.spacing_m};
`;

export const FormContainer = styled.div`
  width: 425px;

  @media only screen and (max-width: 1240px) {
    width: 100%;
    padding-left: ${({ theme }) => theme.spacings.spacing_xl};
    padding-right: ${({ theme }) => theme.spacings.spacing_xl};
  }
`;

export const BackToLogin = styled.div``;

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
