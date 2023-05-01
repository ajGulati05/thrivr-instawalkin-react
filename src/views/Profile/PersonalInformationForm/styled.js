import styled from "styled-components";
import { Radio } from "antd";

export const Container = styled.div`
  padding-top: 64px;
`;

export const ProfileImgWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const ProfileDetail = styled.div``;

export const FormControl = styled.div`
  padding-bottom: ${({ theme }) => theme.spacings.spacing_xl};
  max-width: 60%;

  @media only screen and (max-width: 1160px) {
    max-width: 100%;
  }
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

export const GenderWrap = styled(Radio.Group)`
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 2px;
  border-color: ${({ theme }) => theme.colors.inputBorder};
  padding: 0 ${({ theme }) => theme.spacings.spacing_m};
`;

export const LabelText = styled.div`
  ${({ theme }) => theme.textStyles.formElementLabelDefault}
`;

export const NameText = styled.div`
  ${({ theme }) => theme.textStyles.sectionTitleDefault};
  font-size: 18px;
  text-align: center;
  padding-top: ${({ theme }) => theme.spacings.spacing_m};
`;

export const Div = styled.div``;
