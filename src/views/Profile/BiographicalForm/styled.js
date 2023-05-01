import styled from "styled-components";

export const Container = styled.div`
  padding-top: 64px;
`;
export const AddressSection = styled.div``;

export const FormControl = styled.div`
  padding-bottom: ${({ theme }) => theme.spacings.spacing_xl};
  max-width: 100%;

  @media only screen and (max-width: 1160px) {
    max-width: 100%;
  }
`;

export const FormControlBtn = styled.div`
  padding-top: ${({ theme }) => theme.spacings.spacing_xxl_4};
  max-width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1160px) {
    max-width: 100%;
  }
`;
