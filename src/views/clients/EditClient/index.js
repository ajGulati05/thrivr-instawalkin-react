import React, { useState } from "react";
import { withTheme } from "styled-components";
import { Card, Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PButton from "../../../components/PButton";
import PInput from "../../../components/PInput";
import PPhoneNumInput from "../../../components/PPhoneNumInput";
import { updateGuestReqAction } from "../../../store/actions/clients";
import { validatePhoneNumberMask } from "../../../utils/phoneNumberHelper";

const EditClient = ({ clientDetails }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    firstname: clientDetails.firstname,
    lastname: clientDetails.lastname,
    email: clientDetails.email,
    phone: validatePhoneNumberMask(clientDetails.phone)
  });

  const handlechange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const guestId = clientDetails.id.split(":")[1];
    const payload = {
      id: guestId,
      data: values
    };
    dispatch(updateGuestReqAction(payload));
  };

  return (
    <div className="addclient-section">
      <h1>Edit Client - {values.firstname}</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <PButton
          onClick={() => history.push(`${history.location.pathname}`)}
          pname="Cancel"
          style={{ margin: "0 10px" }}
        />
        <PButton onClick={handleSubmit} pname="Save" />
      </div>
      <div className="site-card-border-less-wrapper">
        <Card bordered={false} style={{ width: "100%" }}>
          <Row gutter={16}>
            <Col>
              <PInput
                value={values.firstname}
                onChange={e => handlechange(e)}
                name="firstname"
                label="First Name"
                placeholder="First Name"
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col>
              <PInput
                value={values.lastname}
                onChange={e => handlechange(e)}
                name="lastname"
                label="Last Name"
                placeholder="Last Name"
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col>
              <PInput
                value={values.email}
                onChange={e => handlechange(e)}
                name="email"
                label="Email"
                type="email"
                placeholder="Email Address"
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col>
              <PPhoneNumInput
                label="Phone Number"
                name="phone"
                placeholder="Phone Nummber"
                phoneNumber={values.phone}
                onPhoneNumberChange={value => setValues({ ...values, phone: value })}
              />
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default withTheme(EditClient);
