import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { useDispatch } from "react-redux";
import { produce } from "immer";
import { Row, Col } from "antd";
import { Container, FormControl, FormHeader, FormControlBtn } from "./styled.js";
import { updateTherapistNotificationReqAction } from "../../../store/actions/notification";
import PButton from "../../../components/PButton";
import PCheckbox from "../../../components/PCheckbox";

const NotificationForm = ({ notificationData }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    notifications: null
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const loading = values.notifications ? false : true;

  const handleChange = (e, field) => {
    setButtonDisabled(false);
    setValues(
      produce(values, draft => {
        draft.notifications[field] = e.target.checked;
      })
    );
  };

  const handleSubmit = () => {
    const updatedNotifications = {
      booking_emails: values.notifications.booking_emails ? 1 : 0,
      booking_texts: values.notifications.booking_texts ? 1 : 0,
      review_emails: values.notifications.review_emails ? 1 : 0
    };

    dispatch(updateTherapistNotificationReqAction(updatedNotifications));
  };

  useEffect(() => {
    setValues(
      produce(values, draft => {
        let notificationSettings = {};
        notificationData.forEach(item => (notificationSettings[item.attribute] = item.value));
        draft.notifications = notificationSettings;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationData]);

  return (
    <Container>
      {!loading && (
        <>
          <Row gutter={16}>
            <Col className="gutter-row" xs={24} sm={12} md={12}>
              <FormControl>
                <FormHeader>Notifications</FormHeader>
                {notificationData.map(item => {
                  return (
                    <PCheckbox
                      className="checkbox-spacing"
                      key={notificationData.indexOf(item)}
                      checked={values.notifications[item.attribute]}
                      onChange={event => handleChange(event, item.attribute)}
                    >
                      {item.label}
                    </PCheckbox>
                  );
                })}
              </FormControl>
            </Col>
          </Row>
          <FormControlBtn>
            <PButton disabled={buttonDisabled} pname="SAVE" ptype="save" onClick={handleSubmit} width="30%" />
          </FormControlBtn>
        </>
      )}
    </Container>
  );
};

NotificationForm.propTypes = {
  notificationData: PropTypes.array
};

export default withTheme(NotificationForm);
