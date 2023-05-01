import styled from "styled-components";

export const Container = styled.div`
  ${({ disabled }) => disabled && "pointer-events: none;"};
  ${({ disabled }) => disabled && "cursor: not-allowed;"};
`;

export const LabelText = styled.div`
  ${({ theme }) => theme.textStyles.formElementLabelDefault}
  padding-bottom: ${({ theme }) => theme.spacings.spacing_xxs};
  ${({ theme, focusing, validate }) =>
    focusing === "true" && `color: ${validate === "error" ? theme.colors.negative : theme.colors.focusColor}`};
  color: ${({ theme, validate }) => validate === "error" && theme.colors.negative};
`;
