import React from "react";
import { List } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import _ from "lodash";
import { convertToTherapistsTimezone } from "../../utils/dateHelpers";

export default function ListItems({ data, deleteButtonClick }) {
  const constructRecurringTime = item => {
    let listText = "";

    if (_.has(item, "allow_day_and_time")) {
      var { allow_day_and_time } = item;
      listText = allow_day_and_time.day + " " + allow_day_and_time.start + " to " + allow_day_and_time.end;
    } else {
      if (_.has(item, "allow_period")) {
        listText =
          "Allow from " +
          convertToTherapistsTimezone(item.allow_period.start, "America/Regina") +
          " to " +
          convertToTherapistsTimezone(item.allow_period.end, "America/Regina");
      } else {
        listText =
          "Block from " +
          convertToTherapistsTimezone(item.block_period.start, "America/Regina") +
          " to " +
          convertToTherapistsTimezone(item.block_period.end, "America/Regina");
      }
    }

    return (
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <span>{listText}</span>
        <DeleteFilled onClick={() => handleOnDeleteClick(item)} />
      </div>
    );
  };

  const handleOnDeleteClick = list => {
    deleteButtonClick(list);
  };

  return (
    <div>
      <div>
        <List dense={false}>
          {data.map(list => {
            return (
              <List.Item
                key={
                  list.allow_day_and_time
                    ? list.allow_day_and_time.day
                    : list.allow_period
                    ? list.allow_period.start
                    : list.block_period.start
                }
              >
                {constructRecurringTime(list)}
              </List.Item>
            );
          })}
        </List>
      </div>
    </div>
  );
}
