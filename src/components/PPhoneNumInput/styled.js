import styled from "styled-components";

export const PhoneWrap = styled.div`
  margin-top: -3px;
  ${({ disabled }) => disabled && "pointer-events: none;"};
  ${({ disabled }) => disabled && "cursor: not-allowed;"};
  & {
    .react-tel-input {
      height: 38px;
      input {
        font-family: Roboto;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.41;
        letter-spacing: normal;
        color: #424242;
        height: 38px;
        width: ${({ width }) => (width ? width : "200px")};
        border-radius: 2px;
        border: solid 2px #e0e0e0;
        ${({ disabled }) => disabled && "background-color: #f5f5f5;"};
      }
      .flag-dropdown {
        color: #424242;
        border-radius: 2px;
        border: solid 2px #e0e0e0;
      }
    }
  }
`;

export const PhoneInputLabel = styled.span`
  ${({ theme }) => theme.textStyles.formElementLabelDefault}
  padding-bottom: ${({ theme }) => theme.spacings.spacing_xxs};
`;

export const LabelText = styled.div`
  ${({ theme }) => theme.textStyles.formElementLabelDefault}
  padding-bottom: ${({ theme }) => theme.spacings.spacing_xxs};
  ${({ theme, focusing, validate }) =>
    focusing === "true" && `color: ${validate === "error" ? theme.colors.negative : theme.colors.focusColor}`};
  color: ${({ theme, validate }) => validate === "error" && theme.colors.negative};
`;
