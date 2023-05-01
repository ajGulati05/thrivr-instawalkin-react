import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PDropdown from "../../components/PDropdown";
import { availabilityReqAction } from "../../store/actions/availability";
import PButton from "../../components/PButton";

const TimeBuffer = ({ data }) => {
  const timeList = [
    { value: "15 minutes", viewValue: "15 minutes" },
    { value: "30 minutes", viewValue: "30 minutes" }
  ];

  const dispatch = useDispatch();

  const [bufferValues, setBufferValues] = useState(data.buffer ? data.buffer["buffer-after"] : "");

  const handleBufferSelect = value => {
    setBufferValues(value);
  };

  const submitBuffer = () => {
    const payload = {
      availability_constraints: {
        availability_constraints: data.availabilityConstraints
      },
      buffer: bufferValues
    };

    dispatch(availabilityReqAction(payload));
  };

  return (
    <div>
      <div>
        <h2>
          Time Buffer <i className="fa fa-check icon-check" />
        </h2>
      </div>
      <div className="select-wrapper">
        <PDropdown
          items={timeList}
          value={bufferValues}
          valueKey="value"
          nameKey="viewValue"
          handleChange={value => handleBufferSelect(value)}
        />
        <PButton ptype="save" pname="Update" onClick={submitBuffer} />
      </div>
      <br />
    </div>
  );
};

export default TimeBuffer;
