import styled from "styled-components";

export const Container = styled.div`
  padding-top: 64px;
`;

export const FormControl = styled.div`
  padding-bottom: ${({ theme }) => theme.spacings.spacing_s};
  max-width: 100%;
`;

export const FormControlBtn = styled.div`
  padding-top: ${({ theme }) => theme.spacings.spacing_xxl_4};
  max-width: 60%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1160px) {
    max-width: 100%;
  }
`;

export const FormHeader = styled.div`
  ${({ theme }) => theme.textStyles.titleBigDefault};
  padding-bottom: 20px;
  font-weight: normal;
  font-size: 22px;
  span {
    color: grey;
    font-size: 19px;
  }
`;
