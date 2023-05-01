import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";
import PDropdown from "../../components/PDropdown";
import PTimeDatePicker from "../../components/PDateTimePicker";
import PButton from "../../components/PButton";
import pNotification from "../../components/PNotification";
import { availabilityReqAction } from "../../store/actions/availability";
import { hasTimeRangeOverlap } from "../../utils/dateHelpers";
import ListItems from "./ListItems";
import { Row, Col } from "antd";

const WorkingHours = ({ data }) => {
  const availablityList = [
    { value: "allow_period", viewValue: "Allow Availablity" },
    {
      value: "block_period",
      viewValue: "Block Availablity"
    }
  ];

  const tomorrow = moment().add(1, "days");
  const dayAfterTomorrow = moment().add(2, "days");

  const dispatch = useDispatch();
  const timezone = useSelector(({ profile: { profileData } }) => profileData.timezone);
  const workingHours = data.availabilityConstraints
    ? data.availabilityConstraints.filter(category => category.allow_period || category.block_period)
    : [];
  const timeRangeList = workingHours.map(key => key.allow_period || key.block_period);

  const [values, setValues] = useState({
    start: moment(tomorrow).format("YYYY/MM/DD"),
    end: moment(dayAfterTomorrow).format("YYYY/MM/DD")
  });
  const [period, setPeriod] = useState(availablityList[0].value);
  const [time, setTime] = useState({
    start: "00:00",
    end: "00:00"
  });

  const handleChangeSelect = value => {
    setPeriod(value);
  };

  const submitButton = () => {
    let start = moment(values.start + " " + time.start);
    start = moment(start).format("YYYY-MM-DD HH:mm:ss");
    let end = moment(values.end + " " + time.end);
    end = moment(end).format("YYYY-MM-DD HH:mm:ss");

    const constraint = {
      [period]: {
        start: moment.tz(start, timezone).format(),
        end: moment.tz(end, timezone).format()
      }
    };
    const hasOverlap = hasTimeRangeOverlap(
      {
        start: moment.tz(start, timezone).format(),
        end: moment.tz(end, timezone).format()
      },
      timeRangeList
    );

    if (!hasOverlap) {
      const transformedPayload = {
        availability_constraints: {
          availability_constraints: [...data.availabilityConstraints, constraint]
        },
        buffer: data.buffer["buffer-after"]
      };
      dispatch(availabilityReqAction(transformedPayload));
    } else {
      const notifyMessage = {
        type: "error",
        message: "You cannot have overlapping times."
      };
      pNotification(notifyMessage);
    }
  };

  const deleteAllowBlockTime = entry => {
    const updatedBlockTime = data.availabilityConstraints.filter(constraint => constraint !== entry);

    const payload = {
      availability_constraints: { availability_constraints: updatedBlockTime },
      buffer: data.buffer["buffer-after"]
    };

    dispatch(availabilityReqAction(payload));
  };
  return (
    <div>
      <div>
        <h2>
          Specific Working Hours <i className="fa fa-check icon-check" />
        </h2>
      </div>
      <div>
        <PDropdown
          items={availablityList}
          value={period}
          valueKey="value"
          nameKey="viewValue"
          handleChange={value => handleChangeSelect(value)}
        />
      </div>
      <br />
      <div>
        <Row gutter={16}>
          <Col className="gutter-row">
            <PTimeDatePicker
              minuteStep={15}
              value={moment(values.start + " " + time.start, "YYYY/MM/DD HH:mm")}
              showTime={{ format: "YYYY/MM/DD" }}
              onSelect={value => {
                const timeString = moment(value).format("YYYY/MM/DD");
                setValues({ ...values, start: timeString });
              }}
              className="custom-picker"
              setTime={value => {
                const timeString = moment(value).format("HH:mm:ss");
                setTime({ ...time, start: timeString });
              }}
            />
          </Col>
          <Col className="gutter-row">
            <PTimeDatePicker
              minuteStep={15}
              value={moment(values.end + " " + time.end, "YYYY/MM/DD HH:mm")}
              showTime={{ format: "YYYY/MM/DD" }}
              onSelect={value => {
                const timeString = moment(value).format("YYYY/MM/DD");
                setValues({ ...values, end: timeString });
              }}
              setTime={value => {
                const timeString = moment(value).format("HH:mm:ss");
                setTime({ ...time, end: timeString });
              }}
              className="custom-picker"
            />
          </Col>
          <Col className="gutter-row">
            <PButton ptype="save" pname="Add" className="custom-picker" onClick={submitButton} />
          </Col>
        </Row>
      </div>
      <br />
      <div>
        {workingHours && (
          <ListItems deleteButtonClick={deleteAllowBlockTime} key="allowBlockListItems" data={workingHours} />
        )}
      </div>
    </div>
  );
};

export default WorkingHours;
