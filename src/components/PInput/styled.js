import styled from "styled-components";
import { Input, Typography } from "antd";

const { Text } = Typography;

export const CustomInput = styled(Input)`
  ${({ theme }) => theme.textStyles.inputElementValueDefault}
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin-top: ${({ mtop }) => mtop};
  margin-bottom: ${({ mbottom }) => mbottom};
  margin-left: ${({ mleft }) => mleft};
  margin-right: ${({ mright }) => mright};

  border-radius: 2px;
  border: solid 2px
    ${({ theme, validate }) => (validate === "error" ? theme.colors.negative : theme.colors.inputBorder)};

  &:hover {
    border-right-width: 2px !important;
    border-color: ${({ theme, validate }) => (validate === "error" ? theme.colors.negative : theme.colors.focusColor)};
  }
  &:focus {
    border-right-width: 2px !important;
    border-color: ${({ theme, validate }) => (validate === "error" ? theme.colors.negative : theme.colors.focusColor)};
  }
  &::placeholder {
    ${({ theme }) => theme.textStyles.inputElementPlaceHoder}
  }
`;

export const LabelText = styled.div`
  ${({ theme }) => theme.textStyles.formElementLabelDefault}
  padding-bottom: ${({ theme }) => theme.spacings.spacing_xxs};
  ${({ theme, focusing, validate }) =>
    focusing === "true" && `color: ${validate === "error" ? theme.colors.negative : theme.colors.focusColor}`};
  color: ${({ theme, validate }) => validate === "error" && theme.colors.negative};
`;

export const CurrencyContainer = styled(Text)`
  display: flex;
`;

export const CurrencyName = styled(Text)`
  ${({ theme }) => theme.textStyles.inputElementCurreny}
  line-height: 16px;
  padding-right: ${({ theme }) => theme.spacings.spacing_xxs};
`;

export const FieldError = styled.div`
  color: red;
  font-size: 12px;
`;
