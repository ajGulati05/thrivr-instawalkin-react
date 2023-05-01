import React, { useEffect } from "react";
import { withTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import PBox from "../../components/PBox";
import { Container } from "./styled.js";
import { getThreapistNotificationReqAction } from "../../store/actions/notification";
import _ from "lodash";
import NotificationForm from "./NotificationForm";

const Notifications = ({ theme }) => {
  const dispatch = useDispatch();
  const therapistNotifications = useSelector(({ notification: { therapistNotifications } }) => therapistNotifications);

  const notificationData =
    therapistNotifications && Object.keys(therapistNotifications).length !== 0
      ? [
          {
            label: "Booking Texts",
            value: therapistNotifications.booking_texts,
            attribute: "booking_texts"
          },
          {
            label: "Booking Emails",
            value: therapistNotifications.booking_emails,
            attribute: "booking_emails"
          },
          {
            label: "Review Emails",
            value: therapistNotifications.review_emails,
            attribute: "review_emails"
          }
        ]
      : [];

  const loading = notificationData.length !== 0 ? false : true;

  useEffect(() => {
    dispatch(getThreapistNotificationReqAction());
  }, [dispatch]);

  return (
    <PBox padding={theme.spacings.spacing_xl}>
      <Container>{!loading && <NotificationForm notificationData={notificationData} />}</Container>
    </PBox>
  );
};

export default withTheme(Notifications);
