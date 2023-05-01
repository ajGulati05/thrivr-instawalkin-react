import styled from "styled-components";
import { TimePicker } from "antd";

export const PTimePickerCompo = styled(TimePicker)`
  height: 38px;
  border-radius: 2px;
  border: solid 2px ${({ theme }) => theme.colors.inputBorder};
  padding: ${({ theme }) => theme.spacings.spacing_xs};
  .ant-picker-input {
    input {
      width: ${({ width }) => {
        return width;
      }}px;
      ${({ theme }) => theme.components.datePicker.datepickerDefault};

      ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${({ theme }) => theme.components.datePicker.datepickerPlaceholder};
        opacity: 1; /* Firefox */
        ${({ theme }) => theme.components.datePicker.datepickerPlaceholder}
        text-overflow: unset;
      }

      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: ${({ theme }) => theme.components.datePicker.datepickerPlaceholder};
        ${({ theme }) => theme.components.datePicker.datepickerPlaceholder}
        text-overflow: unset;
      }

      ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: ${({ theme }) => theme.components.datePicker.datepickerPlaceholder};
        ${({ theme }) => theme.components.datePicker.datepickerPlaceholder}
        text-overflow: unset;
      }
    }
  }

  &.ant-picker:hover {
    border-right-width: 2px !important;
  }
`;
