import React, { useEffect } from "react";
import { withTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import PBox from "../../components/PBox";
import { Container } from "./styled.js";
import { getAllDurationReqAction, getThreapistDurationReqAction } from "../../store/actions/duration";
import DurationForm from "./DurationForm";
import _ from "lodash";

const Duration = ({ theme }) => {
  const dispatch = useDispatch();
  const therapistDurations = useSelector(({ duration: { therapistDurations } }) => therapistDurations);
  const allDurations = useSelector(({ duration: { allDurations } }) => allDurations);
  const checkboxGroup = _.map(allDurations, function(item) {
    return { label: item.description + " $" + item.pricing.total_amount, value: item.id };
  });
  const loading =
    therapistDurations && Array.isArray(therapistDurations) && allDurations && Array.isArray(allDurations)
      ? false
      : true;

  useEffect(() => {
    dispatch(getAllDurationReqAction());
    dispatch(getThreapistDurationReqAction());
  }, [dispatch]);

  return (
    <PBox padding={theme.spacings.spacing_xl}>
      <Container>
        {!loading && <DurationForm checkboxGroup={checkboxGroup} therapistDurations={therapistDurations} />}
      </Container>
    </PBox>
  );
};

export default withTheme(Duration);
