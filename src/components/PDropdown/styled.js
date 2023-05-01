import styled from "styled-components";
import { Select, Checkbox } from "antd";
import { IconArrowUp, IconArrowDown } from "../../assets/icons";

export const DropdownContainer = styled.div`
  position: relative;
`;

export const Dropdown = styled(Select)`
  border-radius: 2px;
  border: solid 2px ${({ theme }) => theme.colors.inputBorder};
  position: relative;
  width: ${({ width }) => width} !important;
  .ant-select-selector {
    height: ${({ height }) => height} !important;
    display: flex;
    align-items: center;
    border: 0px !important;
    ${({ theme }) => theme.components.dropdown.default.valueText}

    .ant-select-selection-item {
      .ant-checkbox-wrapper {
        display: none;
      }
    }
  }
  .ant-select-arrow {
    .p-arrow-up {
      display: none;
    }
    .p-arrow-down {
      display: block;
    }
  }
  .ant-select-dropdown {
    .ant-select-item {
      border-bottom: solid 1px #e0e0e0;
      height: 36px;
      display: flex;
      align-items: center;
      text-align: start;
      &:last-child {
        border-bottom: 0px;
      }
    }
  }
  &.ant-select-open {
    .ant-select-arrow {
      .p-arrow-up {
        display: block;
      }
      .p-arrow-down {
        display: none;
      }
    }
  }
`;

export const ShowLabel = styled.div`
  ${({ theme }) => theme.textStyles.dropdownLabel}
  padding-bottom: ${({ theme }) => theme.spacings.spacing_xxs};
`;

export const ArrowUp = styled(IconArrowUp)`
  height: ${({ height }) => height};
  margin-top: -14px;
  margin-left: -6px;
`;

export const ArrowDown = styled(IconArrowDown)`
  height: ${({ height }) => height};
  margin-top: -14px;
  margin-left: -6px;
`;

export const CheckboxItem = styled(Checkbox)`
  margin-right: ${({ theme }) => theme.spacings.spacing_xs};
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;
