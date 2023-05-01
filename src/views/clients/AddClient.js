import React, { useEffect, useState } from "react";
import { withTheme } from "styled-components";
import { Card, Row, Col, Alert } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty, debounce } from "lodash";
import { useHistory, useLocation } from "react-router-dom";
import PInput from "../../components/PInput";
import PPhoneNumInput from "../../components/PPhoneNumInput";
import PButton from "../../components/PButton";
import routes from "../../constants/routes";
import { createGuestClientReqAction, userExistReqAction, userExistResAction } from "../../store/actions/clients";

const AddClient = ({ name }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const userExist = useSelector(({ clients }) => clients.userExist);
  const userLoading = useSelector(({ clients }) => clients.loading);
  const guestClient = useSelector(({ clients }) => clients.guestClient);
  const [typeLoading, setTypeLoading] = useState(false);
  const [showWarning, setShowWarning] = useState({ visible: false, message: "warning" });
  const [stop, setStop] = useState(false);
  const [errorValidation, setErrors] = useState({
    firstname: false,
    lastname: false,
    email: false
  });
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    verify: 0
  });

  useEffect(() => {
    if (!isEmpty(guestClient)) {
      history.push(`${history.location.pathname}#/${guestClient?.id}`);
    }
  }, [guestClient]);

  useEffect(() => {
    setValues({ ...values, firstname: name ? name : values.firstname });
  }, []);

  const userEmailExist = async value => {
    await dispatch(userExistReqAction(value));
    setTypeLoading(false);
    !value.email ? setStop(true) : setStop(false);
  };

  const userExistStatus = () => {
    const user = userExist[0];
    if (user?.name === values.firstname + " " + values.lastname && user.email !== values.email) {
      setShowWarning({ visible: true, type: "warning", message: "Warning !" });
    }
  };

  const debounceHandler = React.useCallback(debounce(userEmailExist, 2000), []);
  const warningHandler = React.useCallback(debounce(userExistStatus, 4000), []);
  useEffect(() => {
    if (values.email && isEmpty(userExist) && !stop && values.firstname && values.lastname.length > 0) {
      debounceHandler({ firstname: values.firstname, lastname: values.lastname, email: "" });
    }
    const user = userExist[0];
    if (
      user?.name?.toLowerCase() === values?.firstname.toLowerCase() + " " + values.lastname.toLowerCase() &&
      user?.email !== values.email
    ) {
      setShowWarning({ visible: true, type: "warning", message: "Warning !" });
    } else if (isEmpty(userExist)) {
      setShowWarning({ ...showWarning, visible: false });
    } else if (userExist[0].email === values.email) {
      setShowWarning({ visible: true, type: "error", message: "Error !" });
    }
  }, [userExist]);

  const handleChange = e => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
    setShowWarning(false);
    if (name === "email" && !value && values.firstname && values.lastname.length > 0) {
      debounceHandler({ firstname: values.firstname, lastname: values.lastname, email: "" });
      warningHandler();
    } else if (values.email) {
      // debounceHandler({ firstname: "", lastname: "", email: values.email });
    }
    if ((name === "email" && errorValidation.email) || value < 1) {
      dispatch(userExistResAction());
    }
    if (name === "firstname") {
      setTypeLoading(true);
      // Email change
    } else if (name === "email" && !errorValidation.email && value.length > 1) {
      setTypeLoading(true);
      debounceHandler({ firstname: "", lastname: "", email: value });
    } else if (name === "lastname") {
      setTypeLoading(true);
      debounceHandler({ firstname: values.firstname, lastname: value, email: "" });
      warningHandler();
    }
  };

  const handleValidation = (data, field) => {
    setErrors({
      ...errorValidation,
      [field]: data ? true : false
    });
  };

  const handleSubmit = verify => {
    setValues({ ...values, verify: verify });
    const value = { ...values, verify: verify };
    if (Object.keys(errorValidation).every(element => !errorValidation[element])) {
      dispatch(createGuestClientReqAction(value));
    }
  };

  const { pathname } = location;
  const isDashboard = pathname === routes.CLIENTS;
  const buttonStyle =
    pathname === routes.CLIENTS
      ? {
          display: "flex",
          justifyContent: "flex-end"
        }
      : { textAlign: "start" };

  return (
    <div className="addclient-section">
      <h1>New Client {`${values.firstname ? "- " + values.firstname : ""} ${values.lastname}`}</h1>
      {/* Warning guest exists */}
      {showWarning.visible && (
        <Alert
          style={{ marginBottom: 10 }}
          message={showWarning.message}
          showIcon
          closable
          description={
            <>
              {showWarning.type === "warning" ? (
                <span>
                  <strong>{`${!isEmpty(userExist) ? userExist?.[0]?.name : values.firstname}`}</strong> This user is
                  already exist{" "}
                </span>
              ) : (
                <span>
                  <strong>{`${userExist?.[0]?.email}`}</strong> User is already exist On This Email{" "}
                </span>
              )}
            </>
          }
          onClose={() => setShowWarning({ ...showWarning, visible: false })}
          type={showWarning.type}
        />
      )}

      {/* Save button group */}
      <div className="button-section" style={buttonStyle} isdashboard={isDashboard}>
        <div style={{ display: "flex" }}>
          <PButton
            onClick={() => history.push(`${history.location.pathname}`)}
            pname="Cancel"
            style={{ marginRight: "10px" }}
          />
          {values.email.length > 0 && !errorValidation?.email && values.firstname && values.lastname.length > 0 && (
            <PButton
              onClick={() => handleSubmit(1)}
              pname="Save & Send Welcome Email"
              pspin={true}
              ploading={userLoading || typeLoading ? true : false}
              style={{ margin: "0 10px" }}
            />
          )}
        </div>
        <PButton
          pspin={true}
          onClick={() => handleSubmit(0)}
          pname="Save"
          mbottom={!isDashboard && "10px"}
          mtop={!isDashboard && "10px"}
          disabled={(values.lastname ? false : true) || showWarning.type === "error"}
          ploading={userLoading || typeLoading ? true : false}
        />
      </div>

      {/* Form */}
      <div className="site-card-border-less-wrapper">
        <Card bordered={false} style={{ width: "100%" }}>
          <Row gutter={16}>
            <Col>
              <PInput
                value={values.firstname}
                name="firstname"
                onChange={handleChange}
                label="First Name"
                placeholder="First Name"
                setElmInputErr={data => handleValidation(data, "firstname")}
                vRequired={true}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col>
              <PInput
                value={values.lastname}
                name="lastname"
                onChange={handleChange}
                label="Last Name"
                placeholder="Last Name"
                setElmInputErr={data => handleValidation(data, "lastname")}
                vRequired={true}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col>
              <PInput
                value={values.email}
                name="email"
                onChange={handleChange}
                label="Email"
                vType="email"
                setElmInputErr={data => handleValidation(data, "email")}
                placeholder="Email Address"
                autocomplete="off"
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

export default withTheme(AddClient);
