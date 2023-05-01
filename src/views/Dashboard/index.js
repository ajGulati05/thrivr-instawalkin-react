import React, { useEffect, useState } from "react";
import { withTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment-timezone";
import { isEmpty } from "lodash";
import { DashboardStyledContainer } from "./styled";
import DayGridView from "./DayGridView";
import BarGridChart from "./BarGridChart";
import { Row, Col, Card, Modal, Tooltip, Typography } from "antd";
import { getDashboardAnalyticsReqAction, getGoogleAnalyticsReqAction } from "../../store/actions/dashboard";
import {
  getBookingsReqAction,
  modifyBookingReqAction,
  getBookingDetailsReqAction,
  getPaymentTypeReqAction
} from "../../store/actions/bookings";
import { getAllEndorsementsReqAction } from "../../store/actions/endorsement";
import PButton from "../../components/PButton";
import ReviewsChart from "./ReviewsChart";
import TopTreatment from "./TopTreatments";
import Endorsement from "./Endorsement";
import CreateBooking from "../Calender/CreateBooking";
import BookingDetails from "../Calender/BookingDetails";
import ModifyBooking from "../Calender/ModifyBooking";

const { Text } = Typography;

const Dashboard = ({ theme }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector(({ dashboard }) => dashboard.dasahboardAnalytics);
  const userAllAccess = useSelector(({ profile }) => profile.userAllAccess);
  const googleData = useSelector(({ dashboard }) => dashboard.googleAnalytics);
  const bookings = useSelector(({ bookingDetails }) => bookingDetails.bookings);
  const profile = useSelector(({ profile: { profileData } }) => profileData);
  const endorsement = useSelector(({ endorsement }) => endorsement.endorsements);
  const confirmBooking = useSelector(({ bookingDetails }) => bookingDetails.modifyBooking);
  const confirmCancel = useSelector(({ bookingDetails }) => bookingDetails.confirmCancel);
  const newBooking = useSelector(({ bookingDetails }) => bookingDetails.newBooking);
  const reviewStats = data.reviewStats?.reviewAnalytics;
  const topTreatments = data.topTreaments?.topTreaments;
  const defaultData = data.uniqueClients && [
    ...Object.keys(data.uniqueClients.data).map(item => ({
      name: item,
      client: data.uniqueClients.data[item]
    }))
  ];

  const [chartData, setChartdata] = useState();
  const [type, setType] = useState("client");
  const [dataKey, setDataKey] = useState("client");
  const [dataKey1, setDataKey1] = useState("");
  const [dataKeyLabel, setDataKeyLabel] = useState("Clients");
  const [dataKeyLabel1, setDataKeyLabel1] = useState("");
  const [createBooking, setCreateBooking] = useState(false);
  const [dates, setdates] = useState({ start: "" });
  const [bookingDetails, setBookingDetalis] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [event, setEvent] = useState();
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [mobileView, setMobileView] = useState(false);
  const [desktopView, setDesktopView] = useState(false);
  const [modifyBooking, setModifyBooking] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 900) {
      setMobileView(true);
    } else {
      setDesktopView(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 900) {
        setMobileView(true);
        setDesktopView(false);
      } else {
        setMobileView(false);
        setDesktopView(true);
      }
    });
  }, []);

  useEffect(() => {
    if (!isEmpty(newBooking)) {
      setBookingDetalis(true);
      setCreateBooking(false);
      setModifyBooking(false);
    }
  }, [newBooking]);

  useEffect(() => {
    if (history.location.hash && window.innerWidth < 768) {
      setMobileView(false);
      setBookingDetalis(true);
      const slug = history.location.hash.split("#")[1];
      dispatch(getBookingDetailsReqAction(slug));
    }
  }, []);

  useEffect(() => {
    dispatch(getDashboardAnalyticsReqAction(365));
    dispatch(getGoogleAnalyticsReqAction(365));
    dispatch(getAllEndorsementsReqAction());
    dispatch(getPaymentTypeReqAction());
  }, [dispatch]);

  useEffect(() => {
    if (dateRange.start && dateRange.end) {
      dispatch(
        getBookingsReqAction({
          startDate: moment.tz(dateRange.start, profile.timezone).format(),
          endDate: moment.tz(dateRange.end, profile.timezone).format()
        })
      );
    }
  }, [newBooking, confirmBooking]);

  useEffect(() => {
    if (!isEmpty(profile)) {
      if (!userAllAccess) {
        setDataKey("phone");
        setDataKey1("");
        setType("phone");
        setDataKeyLabel("Phone Calls");
        setDataKeyLabel1("");
      }
    }
  }, []);

  const colGridStyle = {
    xs: 24
  };

  const handleChangeData = value => {
    if (value === "client") {
      setDataKey("client");
      setDataKey1("");
      setDataKeyLabel("Clients");
      setDataKeyLabel1("");
      const newData = data.uniqueClients && [
        ...Object.keys(data.uniqueClients.data).map(item => ({
          name: item,
          client: data.uniqueClients.data[item]
        }))
      ];
      setChartdata(newData);
    } else if (value === "phone") {
      setDataKey("phone");
      setDataKey1("");
      setDataKeyLabel("Phone Calls");
      setDataKeyLabel1("");
      const newData =
        googleData.phoneClicks &&
        googleData.phoneClicks.rows.map(item => ({
          name: item[0],
          phone: item[1]
        }));
      setChartdata(newData);
      setType(value);
    } else if (value === "totalBookings") {
      //TODO
      setDataKey("client");
      setDataKey1("");
      setDataKeyLabel("Total Bookings");
      setDataKeyLabel1("");
      const newData = data.totalBookings && [
        ...Object.keys(data.totalBookings.data).map(item => ({
          name: item,
          client: data.totalBookings.data[item][0].total
        }))
      ];
      setChartdata(newData);
      setType(value);
    } else if (value === "pageViews") {
      setDataKey("pageViews");
      setDataKey1("uniqueViews");
      setDataKeyLabel("Page Views");
      setDataKeyLabel1("Unique Views");
      const newData =
        googleData.googlePageViews &&
        googleData.googlePageViews.rows.map(item => ({
          name: item[0],
          pageViews: item[1],
          uniqueViews: item[2]
        }));

      setChartdata(newData);
      setType(value);
    } else if (value === "session") {
      setDataKey("session");
      setDataKey1("avgSession");
      setDataKeyLabel("Session");
      setDataKeyLabel1("Average Session");
      const newData =
        googleData.sessionStats &&
        googleData.sessionStats.rows.map(item => ({
          name: item[0],
          session: item[1],
          avgSession: item[2]
        }));

      setChartdata(newData);
      setType(value);
    } else if (value === "profileClicks") {
      setDataKey("profileClicks");
      setDataKey1("");
      setDataKeyLabel("Profile Views");
      setDataKeyLabel1("");
      const newData =
        googleData.profileClicks &&
        googleData.profileClicks.rows.map(item => ({
          name: item[0],
          profileClicks: item[1]
        }));

      setChartdata(newData);
      setType(value);
    } else {
      setDataKey("billed");
      setDataKey1("tips");
      setDataKeyLabel("Total Billed");
      setDataKeyLabel1("Total Tips");
      const newData =
        data.getTotalBilled &&
        data.getTotalBilled.data.map(item => ({
          name: item.filterValue,
          billed: item.total,
          tips: item.total_tip
        }));
      setChartdata(newData);
      setType(value);
    }
  };

  const handleClick = days => {
    dispatch(getDashboardAnalyticsReqAction(days));
    dispatch(getGoogleAnalyticsReqAction(days));
  };

  useEffect(() => {
    handleChangeData(type);
  }, [data]);

  const handleDateClick = arg => {
    setdates({ start: arg.dateStr });
    setCreateBooking(true);
    setBookingDetalis(false);
  };

  const handleBookingDetails = () => {
    setMobileView(true);
    setCreateBooking(false);
    setBookingDetalis(false);
  };

  const handleEventClick = e => {
    setEvent(e);
    setCreateBooking(false);
    dispatch(getBookingDetailsReqAction(e.event.id));
    setBookingDetalis(true);
    setMobileView(false);
    window.innerWidth < 768 && history.push(`${history.location.pathname}#${e.event.id}`);
  };

  const handleCancelBooking = value => {
    if (value) {
      setIsModalVisible(!isModalVisible);
      value === "ok" &&
        dispatch(
          modifyBookingReqAction({
            url: confirmCancel["callback-url"]
          })
        );
    } else {
      setIsModalVisible(false);
    }
  };

  const handleChange = (e, successCallback) => {
    if (e.startStr !== dateRange.start && e.endStr !== dateRange.end) {
      dispatch(
        getBookingsReqAction({
          startDate: moment.tz(e.startStr, profile.timezone).format(),
          endDate: moment.tz(e.endStr, profile.timezone).format()
        })
      );
      setDateRange({ start: e.startStr, end: e.endStr });
    }
    if (!isEmpty(bookings)) {
      successCallback(
        bookings.map(event => {
          return {
            title: event.client.name + " - " + event.project.description,
            booking: event,
            start: event.start_datetime,
            end: event.end,
            id: event.slug,
            color: event.status === "Cancelled" ? "#ff615c" : event.status === "Rescheduled" ? "#6fcad8" : ""
          };
        })
      );
    }
  };

  const handleViewInSchedule = (e, date) => {
    // event.view.calendar.changeView("timeGridDay", date);
  };

  const handleModifyBooking = () => {
    setModifyBooking(true);
    setCreateBooking(false);
    setBookingDetalis(false);
  };

  return (
    <DashboardStyledContainer>
      <Row className="cal-row">
        {confirmCancel.message && (
          <Modal
            title="Cancel Booking"
            visible={isModalVisible}
            onOk={() => handleCancelBooking("ok")}
            onCancel={() => handleCancelBooking()}
          >
            <p>{confirmCancel.message}</p>
          </Modal>
        )}
        {(mobileView || desktopView) && userAllAccess && (
          <Col {...colGridStyle} className="left-section">
            {userAllAccess && (
              <DayGridView
                handleDateClick={handleDateClick}
                handleEventClick={handleEventClick}
                handleChange={handleChange}
              />
            )}
          </Col>
        )}
        {desktopView || !userAllAccess ? (
          <Col
            className={
              bookingDetails || createBooking || modifyBooking
                ? "bookingdetails-section-right"
                : `bookingdetails-section${!userAllAccess ? " bookingdetails-full-section" : ""}`
            }
          >
            {/* Days Selection */}
            <Row className="dashboard-btn">
              <Col span={24} style={{ display: "flex", flexWrap: "wrap" }}>
                <PButton pname="Last 7 Days" onClick={() => handleClick(7)} />
                <PButton pname="Last 15 Days" onClick={() => handleClick(15)} />
                <PButton pname="Last 30 Days" onClick={() => handleClick(30)} />
                <PButton pname="Last 90 Days" onClick={() => handleClick(90)} />
                <PButton pname="Last 365 Days" onClick={() => handleClick(365)} />
              </Col>
            </Row>

            {/* Total Selection */}
            <Row className="dashboard-section">
              <Col span={24} style={{ display: "flex" }}>
                <Row gutter={[10]} style={{ width: "100%" }}>
                  {userAllAccess ? (
                    <>
                      <Col md={4}>
                        <Card className="dashboard-total-card" onClick={() => handleChangeData("client")}>
                          <div
                            className="card-box"
                            style={{
                              display: "grid",
                              textAlign: "center"
                            }}
                          >
                            <span>
                              Unique Clients{" "}
                              <Tooltip
                                title={data?.uniqueClients?.tooltip ? data?.uniqueClients?.tooltip : "Unique clients"}
                              >
                                <i className="fa fa-question-circle" />
                              </Tooltip>
                            </span>
                            <span>{data.uniqueClients && data.uniqueClients.total}</span>
                          </div>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="dashboard-total-card" onClick={() => handleChangeData("totalBookings")}>
                          <div
                            className="card-box"
                            style={{
                              display: "grid",
                              textAlign: "center"
                            }}
                          >
                            <span>
                              Total Bookings{" "}
                              <Tooltip
                                title={data?.totalBookings?.tooltip ? data?.totalBookings?.tooltip : "Total Bookings"}
                              >
                                <i className="fa fa-question-circle" />
                              </Tooltip>
                            </span>
                            <span>{data.totalBookings && data.totalBookings.total}</span>
                          </div>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="dashboard-total-card" onClick={() => handleChangeData("totalBilled")}>
                          <div
                            className="card-box"
                            style={{
                              display: "grid",
                              textAlign: "center"
                            }}
                          >
                            <span>
                              Total Billed{" "}
                              <Tooltip
                                title={data?.getTotalBilled?.tooltip ? data?.getTotalBilled?.tooltip : "Total Billed"}
                              >
                                <i className="fa fa-question-circle" />
                              </Tooltip>
                            </span>
                            <span>{data.getTotalBilled && data.getTotalBilled.totalBilled}</span>
                            <Text type="success">Tip ${data?.getTotalBilled?.totalTip}</Text>
                          </div>
                        </Card>
                      </Col>
                    </>
                  ) : (
                    <Col md={4}>
                      <Card className="dashboard-total-card" onClick={() => handleChangeData("phone")}>
                        <div
                          className="card-box"
                          style={{
                            display: "grid",
                            textAlign: "center"
                          }}
                        >
                          <span>
                            Phone Clicks{" "}
                            <Tooltip
                              title={
                                googleData?.phoneClicks?.tooltip ? googleData?.phoneClicks?.tooltip : "Phone Clicks"
                              }
                            >
                              <i className="fa fa-question-circle" />
                            </Tooltip>
                          </span>
                          <span>{googleData.phoneClicks && googleData.phoneClicks.total["ga:totalEvents"]}</span>
                        </div>
                      </Card>
                    </Col>
                  )}

                  <Col md={4}>
                    <Card className="dashboard-total-card" onClick={() => handleChangeData("pageViews")}>
                      <div
                        className="card-box"
                        style={{
                          display: "grid",
                          textAlign: "center"
                        }}
                      >
                        <span>
                          Page Views{" "}
                          <Tooltip
                            title={
                              googleData?.googlePageViews?.tooltip ? googleData?.googlePageViews?.tooltip : "Page Views"
                            }
                          >
                            <i className="fa fa-question-circle" />
                          </Tooltip>
                        </span>
                        <span>{googleData.googlePageViews && googleData.googlePageViews.total["ga:pageviews"]}</span>
                      </div>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="dashboard-total-card" onClick={() => handleChangeData("profileClicks")}>
                      <div
                        className="card-box"
                        style={{
                          display: "grid",
                          textAlign: "center"
                        }}
                      >
                        <span>
                          Profile Clicks{" "}
                          <Tooltip
                            title={
                              googleData?.profileClicks?.tooltip ? googleData?.profileClicks?.tooltip : "Profile Clicks"
                            }
                          >
                            <i className="fa fa-question-circle" />
                          </Tooltip>
                        </span>
                        <span>{googleData.profileClicks && googleData.profileClicks.total["ga:totalEvents"]}</span>
                      </div>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="dashboard-total-card" onClick={() => handleChangeData("session")}>
                      <div
                        className="card-box"
                        style={{
                          display: "grid",
                          textAlign: "center"
                        }}
                      >
                        <span>
                          Session Status{" "}
                          <Tooltip
                            title={
                              googleData?.sessionStats?.tooltip ? googleData?.sessionStats?.tooltip : "Session Status"
                            }
                          >
                            <i className="fa fa-question-circle" />
                          </Tooltip>
                        </span>
                        <span>{googleData.sessionStats && googleData.sessionStats.total["ga:sessionDuration"]}</span>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Bar Chart */}
            <Row className="dashboard-chart" style={{ height: "calc(100vh - 170px)" }}>
              <Col md={24} style={{ height: "100%", width: "100%" }}>
                <BarGridChart
                  chartData={chartData ? chartData : defaultData}
                  dataKey={dataKey}
                  dataKey1={dataKey1}
                  dataKeyLabel={dataKeyLabel}
                  dataKey1={dataKeyLabel1}
                />
              </Col>
            </Row>

            {/* Bar Chart and Endorsement*/}
            <Row className="dashboard-review">
              <Col sm={24} md={12} lg={12} className="chart-box">
                {reviewStats && <ReviewsChart data={reviewStats} />}
              </Col>
              <Col sm={24} md={12} lg={12} className="chart-box">
                {topTreatments && userAllAccess && <TopTreatment data={topTreatments} />}
              </Col>
              <Col sm={24} md={12} lg={12} className="chart-box">
                <Endorsement endorsement={endorsement} data={data} />
              </Col>
            </Row>
          </Col>
        ) : null}
        {createBooking && (
          <Col className="booking-full">
            <CreateBooking
              handleBookingDetails={handleBookingDetails}
              startDate={dates.start}
              timezone={profile.timezone}
            />
          </Col>
        )}
        {bookingDetails && (
          <Col className="booking-full">
            <BookingDetails
              handleBookingDetails={handleBookingDetails}
              handleModifyBooking={handleModifyBooking}
              handleCancelBooking={handleCancelBooking}
              handleViewInSchedule={handleViewInSchedule}
            />
          </Col>
        )}
        {modifyBooking && (
          <Col className="booking-full">
            <ModifyBooking
              handleBookingDetails={() => {
                setModifyBooking(false);
                setBookingDetalis(true);
              }}
              timezone={profile.timezone}
            />
          </Col>
        )}
      </Row>
    </DashboardStyledContainer>
  );
};

export default withTheme(Dashboard);
