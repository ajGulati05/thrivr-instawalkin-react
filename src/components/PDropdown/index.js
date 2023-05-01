import React, { useState } from "react";
import PropTypes from "prop-types";
import { Select } from "antd";
import { DropdownContainer, Dropdown, ShowLabel, ArrowUp, ArrowDown, CheckboxItem, ErrorMessage } from "./styled";

const { Option } = Select;

const defaultItems = [{ value: "novalue", name: "No Value" }];

const ArrowIcon = ({ height }) => {
  return (
    <React.Fragment>
      <ArrowUp className="p-arrow-up" height={height} />
      <ArrowDown className="p-arrow-down" height={height} />
    </React.Fragment>
  );
};

const PDropdown = ({
  pname,
  label,
  items,
  showCheckbox,
  width,
  height,
  value,
  defaultValue,
  handleChange,
  handleItem,
  onChange,
  valueKey,
  nameKey,
  errorMessage,
  ...rest
}) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  function selectedChange(value) {
    handleChange && handleChange(value);
    onChange && onChange(value);
    setSelected(value);
    let item = items.filter(i => {
      return i[valueKey] === value;
    });

    handleItem && handleItem(item[0], pname, valueKey, nameKey);
  }

  function handleClick() {
    setExpanded(!expanded);
  }

  return (
    <DropdownContainer>
      {label && <ShowLabel>{label}</ShowLabel>}
      <Dropdown
        value={value}
        defaultValue={defaultValue}
        onClick={handleClick}
        onChange={selectedChange}
        width={width}
        height={height}
        showArrow={true}
        dropdownClassName="pdropdown-select-menu"
        suffixIcon={<ArrowIcon height={height} />}
        getPopupContainer={triggerNode => triggerNode.parentNode}
        {...rest}
      >
        {items.map((item, key) =>
          !showCheckbox ? (
            typeof item === "object" ? (
              <Option key={key} value={item[valueKey]}>
                {item[nameKey]}
              </Option>
            ) : (
              <Option key={key} value={item}>
                {item}
              </Option>
            )
          ) : (
            <Option key={key} value={item[valueKey]}>
              <CheckboxItem checked={item[valueKey] === selected} />
              {item[nameKey]}
            </Option>
          )
        )}
      </Dropdown>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </DropdownContainer>
  );
};

PDropdown.propTypes = {
  pname: PropTypes.string,
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string
    }).isRequired
  ).isRequired,
  showCheckbox: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
  height: PropTypes.string,
  handleChange: PropTypes.func,
  onChange: PropTypes.func,
  handleItem: PropTypes.func,
  valueKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  nameKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PDropdown.defaultProps = {
  label: "",
  items: defaultItems,
  showCheckbox: false,
  width: "160px",
  height: "34px",
  defaultValue: "",
  valueKey: "value",
  nameKey: "name"
};

export default PDropdown;
