import React from "react";
import { withTheme } from "styled-components";
import { useSelector } from "react-redux";
import { CalenderStyledContainer } from "./styled";
import WeekGridView from "./WeekGridView";
import { Row, Col } from "antd";

const Calender = () => {
  const userAllAccess = useSelector(({ profile }) => profile.userAllAccess);

  const colGridStyle = {
    xs: 24
  };

  return (
    <CalenderStyledContainer>
      <Row className="calender-main-row">
        <Col {...colGridStyle}>{userAllAccess && <WeekGridView />}</Col>
      </Row>
    </CalenderStyledContainer>
  );
};

export default withTheme(Calender);
