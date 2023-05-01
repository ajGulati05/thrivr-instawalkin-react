import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { PDatePickerContainer, ShowLabel, PDatePickerBlock, PTimePickerBlock } from "./styled";

const dateFormat = "DD/MM/YYYY HH:mm";
const timeFormat = "HH:mm";
const dateFormatShowTime = "DD/MM/YYYY HH:mm a";
const timeConfig = { format: "hh:mm", minuteStep: 15 };
const pTextShowTime = "DD/MM/YY  HH:MM PM";

const PDateTimePicker = ({ showTime, labelSmall, pText, label, onSelect, value, setTime, minuteStep, ...rest }) => {
  const [format, setFormat] = useState(dateFormat);
  const [open, setOpen] = useState(false);
  const [showTimeConfig, setShowTimeConfig] = useState(false);
  const [timeOpenDropdown, setTimeOpenDropdown] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(pText);
  const datetimeDropdownRef = useRef();
  const timeDropdownRef = useRef();

  useEffect(() => {
    if (showTime) {
      setFormat(dateFormatShowTime);
      setShowTimeConfig(timeConfig);
      setPlaceHolder(pTextShowTime);
    }
  }, [showTime, showTimeConfig]);

  const handleDateOpenChange = data => {
    if (open && !data) {
      setTimeOpenDropdown(true);
    }
    setOpen(data);
  };

  const handleTimeSubmit = data => {
    setTime(data);
    setTimeOpenDropdown(false);
    setOpen(false);
  };

  const handleDateChange = data => {
    const date = moment(data).format("YYYY/MM/DD");
    onSelect(data);
  };

  const handleclick = e => {
    e.stopPropagation();
  };

  return (
    <PDatePickerContainer>
      {labelSmall && <ShowLabel>{label}</ShowLabel>}
      <PDatePickerBlock
        value={value}
        open={open}
        allowClear={false}
        labelSmall={labelSmall}
        format={format}
        placeholder={placeHolder}
        onOpenChange={handleDateOpenChange}
        onChange={handleDateChange}
        getPopupContainer={() => datetimeDropdownRef.current}
      />

      <PTimePickerBlock
        className="p-time-picker"
        open={timeOpenDropdown}
        onOpenChange={() => setTimeOpenDropdown(false)}
        allowClear={false}
        format={timeFormat}
        placeholder={placeHolder}
        showNow={false}
        minuteStep={minuteStep}
        onOk={handleTimeSubmit}
        getPopupContainer={() => timeDropdownRef.current}
      />

      <div
        className={`datetimepicker-dropdown${open ? " dd-open" : ""}`}
        onClick={handleclick}
        ref={datetimeDropdownRef}
      ></div>
      <div
        className={`timepicker-dropdown${timeOpenDropdown ? " dd-open" : ""}`}
        onClick={handleclick}
        ref={timeDropdownRef}
      ></div>
    </PDatePickerContainer>
  );
};

PDateTimePicker.propTypes = {
  showTime: PropTypes.bool,
  labelSmall: PropTypes.bool
};

PDateTimePicker.defaultProps = {
  showTime: false,
  labelSmall: false
};

export default PDateTimePicker;
