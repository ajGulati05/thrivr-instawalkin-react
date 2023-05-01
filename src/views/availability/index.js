import React, { useEffect } from "react";
import { withTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getAvailabilityReqAction } from "../../store/actions/availability";
import { Tabs } from "antd";
import { AvailabilityStyledContainer } from "./styled";
import RecurringTime from "./RecurringTime";
import TimeBuffer from "./TimeBuffer";
import WorkingHours from "./WorkingHours";

const { TabPane } = Tabs;

const Availability = ({ theme }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAvailabilityReqAction());
  }, [dispatch]);
  const availabilityData = useSelector(({ availability }) => availability.availabilityConstraints);

  return (
    <AvailabilityStyledContainer>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Location Hours" key="1">
          <RecurringTime data={availabilityData} />
        </TabPane>
        <TabPane tab="One Off's" key="2">
          <WorkingHours data={availabilityData} />
        </TabPane>
        <TabPane tab="Time Buffer" key="3">
          {availabilityData.availabilityConstraints && <TimeBuffer data={availabilityData} />}
        </TabPane>
      </Tabs>
    </AvailabilityStyledContainer>
  );
};

export default withTheme(Availability);
