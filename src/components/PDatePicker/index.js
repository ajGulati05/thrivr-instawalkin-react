import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CalendarIcon from "./CalendarIcon";
import { PDatePickerContainer, ShowLabel, PDatePickerBlock } from "./styled";

const dateFormat = "DD/MM/YYYY";
const dateFormatShowTime = "DD/MM/YYYY hh:mm a";
const timeConfig = { use12Hours: true, format: "hh:mm a" };
const pText = "DD/MM/YY";
const pTextShowTime = "DD/MM/YY  HH:MM PM";

const PDatePicker = ({ showTime, labelSmall, label, containerClassName, ...rest }) => {
  const [format, setFormat] = useState(dateFormat);
  const [showTimeConfig, setShowTimeConfig] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(pText);

  useEffect(() => {
    if (showTime) {
      setFormat(dateFormatShowTime);
      setShowTimeConfig(timeConfig);
      setPlaceHolder(pTextShowTime);
    }
  }, [showTime, showTimeConfig]);

  return (
    <PDatePickerContainer className={containerClassName ? containerClassName : undefined}>
      {labelSmall && <ShowLabel>{label}</ShowLabel>}
      <PDatePickerBlock
        {...rest}
        allowClear={false}
        showTime={showTime}
        labelSmall={labelSmall}
        suffixIcon={<CalendarIcon labelSmall={labelSmall} label={label} />}
        format={format}
        placeholder={placeHolder}
      />
    </PDatePickerContainer>
  );
};

PDatePicker.propTypes = {
  showTime: PropTypes.bool,
  labelSmall: PropTypes.bool
};

PDatePicker.defaultProps = {
  showTime: false,
  labelSmall: false
};

export default PDatePicker;
