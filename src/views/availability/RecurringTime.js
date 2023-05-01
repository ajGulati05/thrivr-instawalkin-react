import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import PDropdown from "../../components/PDropdown";
import PTimePicker from "../../components/PTimePicker";
import PButton from "../../components/PButton";
import pNotification from "../../components/PNotification";
import { availabilityReqAction } from "../../store/actions/availability";
import ListItems from "./ListItems";

const RecurringTime = ({ data }) => {
  const weekList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const defaultStartTime = "09:00";
  const defaultEndTime = "17:00";

  const dispatch = useDispatch();

  const recurringTime =
    data.availabilityConstraints && data.availabilityConstraints.filter(category => category.allow_day_and_time);

  const [values, setValues] = useState({
    day: weekList[0],
    start: defaultStartTime,
    end: defaultEndTime
  });

  const valueExists = value => {
    for (let entry in recurringTime) {
      if (recurringTime[entry].allow_day_and_time && recurringTime[entry].allow_day_and_time.day === value) {
        return true;
      }
    }

    return false;
  };

  const handleChange = value => {
    setValues({ ...values, day: value });
  };

  const handleStartTimeChange = value => {
    const timeString = moment(value).format("HH:mm");
    setValues({ ...values, start: timeString });
  };

  const handleEndTimeChange = value => {
    const timeString = moment(value).format("HH:mm");
    setValues({ ...values, end: timeString });
  };

  const submitHours = () => {
    if (values.start.valueOf() > values.end.valueOf()) {
      const notifyMessage = {
        type: "error",
        message: "End time cannot be before start time."
      };
      pNotification(notifyMessage);
    } else if (valueExists(values.day) === true) {
      const notifyMessage = {
        type: "error",
        message: "You cannot have duplicate days of the week."
      };
      pNotification(notifyMessage);
    } else {
      const payload = {
        buffer: data.buffer["buffer-after"],
        availability_constraints: {
          availability_constraints: [...data.availabilityConstraints, { allow_day_and_time: values }]
        }
      };
      dispatch(availabilityReqAction(payload));
    }
  };

  const handleDelete = entry => {
    const updatedRecurringTime =
      data &&
      data.availabilityConstraints.filter(
        constraint =>
          (constraint.allow_day_and_time && constraint.allow_day_and_time.day !== entry.allow_day_and_time.day) ||
          !constraint.allow_day_and_time
      );

    const payload = {
      availability_constraints: {
        availability_constraints: updatedRecurringTime
      },
      buffer: data.buffer["buffer-after"]
    };

    dispatch(availabilityReqAction(payload));
  };

  return (
    <div>
      <div>
        <h2>
          Weekly Recurring Hours
          <i className="fa fa-check icon-check" />
        </h2>
      </div>
      <div>
        <PDropdown items={weekList} value={values.day} handleChange={value => handleChange(value, "start")} />
      </div>
      <br />
      <div>
        <PTimePicker
          format="HH:mm"
          className="custom-picker"
          value={moment(values.start, "HH:mm")}
          onChange={handleStartTimeChange}
          onSelect={value => {
            const timeString = moment(value).format("HH:mm");
            setValues({ ...values, start: timeString });
          }}
          name="start"
        />{" "}
        to{" "}
        <PTimePicker
          format="HH:mm"
          className="custom-picker"
          value={moment(values.end, "HH:mm")}
          onChange={handleEndTimeChange}
          onSelect={value => {
            const timeString = moment(value).format("HH:mm");
            setValues({ ...values, end: timeString });
          }}
          name="end"
        />
        <PButton ptype="save" pname="Add" className="btn" onClick={submitHours} />
      </div>
      <br />
      <div>
        {recurringTime && <ListItems deleteButtonClick={handleDelete} key="allowBlockListItems" data={recurringTime} />}
      </div>
    </div>
  );
};

export default RecurringTime;
