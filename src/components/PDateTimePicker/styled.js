import styled from "styled-components";
import { DatePicker, TimePicker, Typography } from "antd";

const { Text } = Typography;

export const PDatePickerContainer = styled.div`
  .datetimepicker-dropdown,
  .timepicker-dropdown {
    &.dd-open {
      & > div:first-child {
        position: fixed !important;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: #00000029;
        button {
          background-color: initial;
          &:hover {
            background-color: initial !important;
          }
          span {
            color: initial;
          }
        }
        & > div {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .ant-picker-dropdown {
            left: initial !important;
            top: initial !important;

            .ant-picker-time-panel {
              .ant-picker-time-panel-column {
                width: 160px;
              }
            }
          }
        }
      }
    }
  }

  .p-time-picker {
    display: none;
  }
`;

export const PDatePickerBlock = styled(DatePicker)`
  border-radius: 2px;
  border: solid 2px ${({ theme }) => theme.colors.inputBorder};
  width: ${({ theme, showTime, labelSmall }) => {
    let pickerWidth = theme.components.datePicker.defaultSmall.pickerSize.width;
    if (showTime) {
      pickerWidth = theme.components.datePicker.defaultSmall.pickerSizeBig.width;
    } else if (labelSmall) {
      pickerWidth = theme.components.datePicker.defaultSmall.pickerSizeSmall.width;
    }
    return pickerWidth;
  }}px;
  height: ${({ theme }) => theme.components.datePicker.defaultSmall.pickerSize.height}px;
  padding: ${({ theme }) => theme.spacings.spacing_xs};

  &:hover {
    border-right-width: 2px !important;
  }

  .ant-picker-input {
    input {
      position: absolute;
      right: 0;
      width: ${({ theme, showTime, labelSmall }) => {
        let inputWidth = theme.components.datePicker.defaultSmall.inputSize.width;
        if (showTime) {
          inputWidth = theme.components.datePicker.defaultSmall.inputSizeBig.width;
        } else if (labelSmall) {
          inputWidth = theme.components.datePicker.defaultSmall.inputSizeSmall.width;
        }
        return inputWidth;
      }}px;
      height: ${({ theme }) => theme.components.datePicker.defaultSmall.inputSize.height}px;
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
    .ant-picker-suffix {
      position: absolute;
      left: 0px;
    }
  }
`;

export const PTimePickerBlock = styled(TimePicker)``;

export const ShowLabel = styled.div`
  ${({ theme }) => theme.components.datePicker.prefixTextStyle}
`;

export const CalendarIconContainer = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  display: flex;
`;

export const FromText = styled(Text)`
  ${({ theme }) => theme.components.datePicker.prefixTextStyle}
  padding-left: ${({ theme }) => theme.spacings.spacing_xs}
`;
