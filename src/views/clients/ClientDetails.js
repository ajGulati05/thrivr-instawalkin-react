import React, { useEffect, useState } from "react";
import { Card, Row, Col, Divider, List, Tabs, Dropdown, Menu, Modal, Button, Input } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useHistory, withRouter } from "react-router-dom";
import { withTheme } from "styled-components";
import { Slide } from "react-awesome-reveal";
import { useSelector, useDispatch } from "react-redux";
import PButton from "../../components/PButton";
import {
  getClientBookingsReqAction,
  getClientDetailReqAction,
  unblockClientReqAction,
  getClientAnalyticsReqAction,
  sendEmailReqAction,
  sendEmailFormReqAction,
  intakeFormReqAction,
  createClientGuestAction
} from "../../store/actions/clients";
import { takeEvery, put, call, all } from "redux-saga/effects";

import { getBookingDetailsReqAction, modifyBookingReqAction } from "../../store/actions/bookings";
import Bookings from "./Bookings";
import BlockClient from "./BlockClient";
import EditClient from "./EditClient";
import IntakeForm from "./IntakeForm";
import BookingDetails from "../Calender/BookingDetails";
import ModifyBooking from "../Calender/ModifyBooking";
import { isEmpty } from "lodash";
import CovidForm from "./CovidForm";
import Charts from "./Charts";
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import { clientsApi } from "../../services";


const ClientDetails = ({ clientDetails, showUserDetails }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [visible, setVisible] = useState(true);
  const intakeFormDetail = useSelector(({ clients }) => clients.intakeForm);
  const bookings = useSelector(({ clients }) => clients.clientsBookings);
  const profile = useSelector(({ profile: { profileData } }) => profileData);
  const confirmCancel = useSelector(({ bookingDetails }) => bookingDetails.confirmCancel);
  const clientsAnalytics = useSelector(({ clients }) => clients.clientsAnalytics);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const client = useSelector(({ clients }) => clients.clientsDetail);
  const [editClient, setEditClient] = useState(false);
  const [count, setCount] = useState(3);
  const [activeKey, setActive] = useState(1);
  const [showGuestForm, setShowGuestForm] = useState(false);
  const [clientBookings, setClientBooking] = useState({
    all: [],
    totalCount: 0,
    upcoming: []
  });
  const [bookingDetails, setBookingDetails] = useState(false);
  const [intakeForm, setIntakeForm] = useState({
    visible: false,
    details: {},
    covidForm: false
  });
  const [isVisible, setIsVisible] = useState(false);
  const [modifyBooking, setModifyBooking] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [charts, setCharts] = useState(false);
  useEffect(() => {
    const id = history.location.hash.split("#/")[1];
    dispatch(getClientBookingsReqAction(id));
    dispatch(getClientDetailReqAction(id));
    dispatch(getClientAnalyticsReqAction(id));
    dispatch(intakeFormReqAction(id));
    setVisible(false);
    setEditClient(false);
    setIntakeForm(false);
    setCharts(false);
  }, [dispatch]);

  // Client Booking Data Binding
  useEffect(() => {
    if (!isEmpty(bookings)) {
      setClientBooking({
        all: [...bookings.confirmedBookings, ...bookings.upcomingBookings],
        totalCount: bookings.confirmedBookingsCount + bookings.upcomingBookingsCount,
        upcoming: [...bookings.upcomingBookings]
      });
    }
  }, [bookings]);

  useEffect(() => {
    setIntakeForm({
      ...intakeForm,
      visible: false,
      covidForm: false
    });
    setVisible(false);
    setCharts({
      visible: false
    });
  }, []);

  let list = [setIntakeForm, setVisible, setCharts];

  if (bookings.upcomingBookings) {
    for (let i = 0; i < count; i++) {
      bookings.upcomingBookings[i] && list.push(bookings.upcomingBookings[i]);
    }
  }

  const handleBookingDetails = (item, show) => {
    dispatch(getBookingDetailsReqAction(item && item.slug));
    setBookingDetails(show ? false : true);
    if (window.innerWidth < 768) {
      setMobileView(true);
    }
  };

  const handleBlock = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleUnblock = () => {
    dispatch(unblockClientReqAction(clientDetails.id));
  };

  const handleClientEdit = () => {
    setEditClient(true);
  };

  const handleSendEmail = () => {
    dispatch(sendEmailReqAction(client.id));
  };

  const handleMenuClick = details => {
    setIntakeForm({ visible: true, details: details, covidForm: false });
  };

  const handleModifyBooking = () => {
    setModifyBooking(true);
    setBookingDetails(false);
  };

  const handleCancelBooking = value => {
    if (value) {
      setIsVisible(!isVisible);
      value === "ok" &&
        dispatch(
          modifyBookingReqAction({
            url: confirmCancel["callback-url"]
          })
        );
    } else {
      setIsVisible(false);
    }
  };
  const handleFillFormEmail = () => {
    dispatch(sendEmailFormReqAction(client.id));
  };

  const intakeFormDetails =
    !isEmpty(intakeFormDetail.intakeform) &&
    intakeFormDetail.intakeform.slice().sort((a, b) => {
      return a.active === b.active ? 0 : a.active ? -1 : 1;
    });
  const menu = (
    <Menu>
      {!isEmpty(intakeFormDetails) &&
        intakeFormDetails.map((details, index) => {
          return details.active ? (
            <Menu.Item key={index + 1} onClick={() => handleMenuClick(details)}>
              {`Active - ${details?.consent_date}`}
            </Menu.Item>
          ) : (
            <Menu.Item key={index + 1} onClick={() => handleMenuClick(details)}>
              {`${details?.consent_date}`}
            </Menu.Item>
          );
        })}
    </Menu>
  );

  const seeMore = bookings.upcomingBookings && (
    <>
      {count === 3 ? (
        <a href="javascript:void(0)" onClick={() => setCount(bookings.upcomingBookings.length)}>
          +{bookings.upcomingBookingsCount} more upcomings...{" "}
        </a>
      ) : (
        <a href="javascript:void(0)" onClick={() => setCount(3)}>
          See less{" "}
        </a>
      )}
      <br />
      <br />
      <span>
        {client.name} has {bookings.upcomingBookingsCount} upcoming bookings
      </span>
      <br />
      <br />
      <a href="javascript:void(0)" onClick={() => setVisible(true)}>
        See all {clientBookings.totalCount} bookings{" "}
      </a>
    </>
  );

  const guest = client && client.id && client.id.split(":")[0];

  const active =
    !visible && !editClient && !intakeForm.visible && !intakeForm.covidForm && !charts.visible ? "active" : "";

  return (
    <div className="site-card-border-less-wrapper client-details">
      <h1>{client.name}</h1>
      <Row gutter={16} className="tab-section">
        {confirmCancel.message && (
          <Modal
            title="Cancel Booking"
            visible={isVisible}
            onOk={() => handleCancelBooking("ok")}
            onCancel={() => handleCancelBooking()}
          >
            <p>{confirmCancel.message}</p>
          </Modal>
        )}
        <Col xs={24} lg={bookingDetails || modifyBooking ? 16 : 24} xl={bookingDetails || modifyBooking ? 18 : 24}>
          <Row gutter={[16, 16]}>
            <Col>
              <a
                onClick={() => {
                  setVisible(false);
                  setIntakeForm({ visible: false, covidForm: false });
                  setCharts({
                    visible: false
                  });
                }}
                className={`header ${active}`}
                tab="Profile"
                key="1"
              >
                Profile
              </a>
            </Col>
            <Col>
              <a
                onClick={() => {
                  setVisible(true);
                  setIntakeForm({
                    ...intakeForm,
                    visible: false,
                    covidForm: false
                  });
                  setCharts({
                    visible: false
                  });
                }}
                className={`header ${visible && "active"}`}
                tab="Intake Form"
                key="2"
              >
                Bookings
              </a>
            </Col>
            <Col>
              <a
                onClick={() => {
                  setIntakeForm({
                    details: intakeFormDetails[0],
                    visible: true,
                    covidForm: false
                  });
                  setVisible(false);
                  setCharts({
                    visible: false
                  });
                }}
                className={`header ${intakeForm.visible && "active"}`}
                tab="Bookings"
                key="3"
              >
                Intake Form
              </a>
            </Col>
            <Col>
              <a
                onClick={() => {
                  setIntakeForm({
                    ...intakeForm,
                    visible: false,
                    covidForm: false
                  });
                  setVisible(false);
                  setCharts({
                    visible: true
                  });
                }}
                className={`header ${charts.visible && "active"}`}
                tab="Charts"
                key="4"
              >
                Charts
              </a>
            </Col>
          </Row>
          {!mobileView && !visible && !editClient && !intakeForm.visible && !intakeForm.covidForm && !charts.visible && (
            <>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Card bordered={false} className="card-wrapper">
                    <div
                      className="card-box"
                      style={{
                        display: "grid",
                        textAlign: "center"
                      }}
                    >
                      <span>{clientsAnalytics.confirmed_appointments}</span>
                      <span>Past Bookings</span>
                    </div>
                    <div
                      className="card-box"
                      style={{
                        display: "grid",
                        textAlign: "center"
                      }}
                    >
                      <span>{clientsAnalytics.upcoming_appointments}</span>
                      <span>Upcoming Bookings</span>
                    </div>

                    <div
                      className="card-box"
                      style={{
                        display: "grid",
                        textAlign: "center"
                      }}
                    >
                      <span>{clientsAnalytics.no_show}</span>
                      <span>No Shows</span>
                    </div>

                    <div
                      className="card-box"
                      style={{
                        display: "grid",
                        textAlign: "center"
                      }}
                    >
                      <span>{clientsAnalytics.last_visit_in_days}</span>
                      <span>Days Since Last Visit</span>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col xs={24} lg={bookingDetails ? 24 : 12} xl={12}>
                  <Card bordered={false}>
                    <Row gutter={16}>
                      <Col
                        span={24}
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <span>
                          <i className="fa fa-user fa-2x" />
                          {"  "}
                          {client.name}
                        </span>
                        {guest === "User" ? (
                          client.blocked ? (
                            <div>
                              <PButton onClick={handleUnblock} width="100%" pname="Unblock" />
                            </div>
                          ) : (
                            <div>
                              <PButton onClick={handleBlock} width="100%" pname="Block" />
                            </div>
                          )
                        ) : (
                          <i onClick={handleClientEdit} className="fa fa-pencil fa-lg" />
                        )}
                      </Col>
                    </Row>
                    <Divider />
                    <Row gutter={16}>
                      <Col span={24}>
                        <span>
                          <i className="fa fa-phone fa-2x" />
                          {client.phone ? <a href={`tel:${client.phone}`}>{client.phone}</a> : "No Phone Numbers"}
                        </span>
                      </Col>
                    </Row>
                    <Divider />
                    <Row gutter={16}>
                      <Col span={24}>
                        <div>
                          <i className="fa fa-envelope fa-2x" />
                          <span>
                            {client.email ? <a href={`mailto:${client.email}`}>{client.email}</a> : "No Email Address"}
                          </span>
                          <br />
                          <span>
                            {!client.verifed && guest !== "User" && (
                              <p>
                                {client.name} has not verified that this email address belongs to them and that they are
                                successfully receiving emails from Thrivr Inc.{" "}
                                <a href="javascript:void(0)" onClick={handleSendEmail}>
                                  Click here
                                </a>{" "}
                                to remind {client.name} to confirm their email address.
                              </p>
                            )}
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col xs={24} lg={bookingDetails ? 24 : 12} xl={12}>
                  <Card bordered={false}>
                    <Row gutter={16}>
                      <Col
                        span={24}
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <span>
                          <i className="fa fa-calendar fa-2x" /> {client.firstname}
                          's next visits
                        </span>
                      </Col>
                      <Col span={24}>
                        <List
                          className="demo-loadmore-list"
                          itemLayout="horizontal"
                          loadMore={seeMore}
                          dataSource={list}
                          renderItem={(item, index) => (
                            <List.Item key={index + 1}>
                              <span onClick={() => handleBookingDetails(item, false)}>
                                {item.project && `${item.project.description} on ${item.start}`}
                              </span>
                            </List.Item>
                          )}
                        />
                      </Col>
                    </Row>
                  </Card>
                </Col>
                {client.guest ? null : (
                  <Col xs={24} lg={12}>
                    <Card>
                      <div>
                        <h4>Guests</h4>
                      </div>

                      <Row gutter={16}>
                        {client.guests?.map(guest => {
                          return (
                            <Col span={24} style={{ minHeight: "25px" }}>
                              <div>{guest.name}</div>
                            </Col>
                          );
                        })}
                      </Row>

                      <Row>
                        <Col span={24}>
                          <Form
                            name="customized_form_controls"
                            layout="inline"
                            onFinish={(data)=>{
                              data.client_id = client.client_id;
                              showUserDetails(client,client.id)
                              dispatch(createClientGuestAction(data));
                            }}
                            initialValues={{
                              guest_name:''
                            }}
                          >
                            <FormItem name="name"    rules={[{ required: true }]} >
                              <Input placeholder="Guest name..." />
                            </FormItem>
                            <FormItem>
                              
                              <Button type="danger" htmlType="submit">
                                Add Guest
                              </Button>
                            </FormItem>
                          </Form>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                )}

                <Col xs={24} lg={bookingDetails ? 24 : 12} xl={12}>
                  <Card bordered={false}>
                    <div>
                      <h4>Forms</h4>
                    </div>
                    <Row gutter={16}>
                      <Col span={24} className="btn-grp">
                        {/* Intake form button */}
                        {!isEmpty(intakeFormDetails) && (
                          <Dropdown.Button
                            onClick={() => {
                              setIntakeForm(true);
                            }}
                            overlay={menu}
                            icon={<CaretDownOutlined />}
                            style={{ margin: "0 10px" }}
                          >
                            View Form
                          </Dropdown.Button>
                        )}

                        {/* Covid form Button */}
                        {!isEmpty(intakeFormDetails?.["covid-form"]?.[0]?.form) && (
                          <PButton
                            pname="Covid Form"
                            onClick={() => {
                              setIntakeForm({
                                ...intakeForm,
                                visible: false,
                                covidForm: true
                              });
                            }}
                          />
                        )}
                        {/* Email form button */}
                        {!isEmpty(intakeFormDetail["covid-form"]) &&
                        !intakeFormDetail?.["covid-form"]?.[0]?.form &&
                        !intakeFormDetail?.["covid-form"]?.[0]?.["booking-date"] ? (
                          <PButton pname="Email to fill forms" onClick={handleFillFormEmail} />
                        ) : null}
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>{" "}
            </>
          )}
        </Col>
        {visible && !charts.visible && (
          <Col xs={24} lg={bookingDetails ? 16 : 24} xl={bookingDetails ? 18 : 24}>
            <Bookings client={client} bookings={clientBookings} handleBookingDetails={handleBookingDetails}></Bookings>
          </Col>
        )}
        {intakeForm.visible && !charts.visible && (
          <Col xs={24} lg={24} xl={24} className="intakeform-section">
            <IntakeForm intakeFormDetail={intakeForm.details} />
          </Col>
        )}
        {intakeForm.covidForm && !charts.visible && (
          <Col xs={24} lg={24} xl={24} className="intakeform-section">
            <CovidForm covidFormDetail={intakeFormDetail["covid-form"][0].form} />
          </Col>
        )}
        {charts.visible && (
          <Col xs={24} lg={24} xl={24} className="charts-section">
            <Charts />
          </Col>
        )}
        {bookingDetails && (
          <Col xs={24} lg={8} xl={6}>
            <Slide direction="right">
              <BookingDetails
                handleBookingDetails={() => {
                  setMobileView(false);
                  setBookingDetails(false);
                }}
                handleModifyBooking={handleModifyBooking}
                handleCancelBooking={handleCancelBooking}
                handleViewInSchedule={() => history.push("/calender")}
              />
            </Slide>
          </Col>
        )}
        {modifyBooking && (
          <Col xs={24} lg={8} xl={6}>
            <Slide direction="right">
              <ModifyBooking
                handleBookingDetails={() => {
                  setMobileView(false);
                  setModifyBooking(false);
                }}
                timezone={profile.timezone}
              />
            </Slide>
          </Col>
        )}
      </Row>

      {isModalVisible && <BlockClient isModalVisible={isModalVisible} showModal={handleBlock} clientDetails={client} />}
      {editClient && <EditClient clientDetails={client} />}
    </div>
  );
};

export default withRouter(withTheme(ClientDetails));
