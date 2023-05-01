import React, { useEffect, useState, useRef } from "react";
import { withTheme } from "styled-components";
import { Row, Col, Modal } from "antd";
import { useHistory } from "react-router-dom";
import moment from "moment-timezone";
import { useSelector, useDispatch } from "react-redux";
import { LockFilled } from "@ant-design/icons";
import { WeekGridStyledContainer } from "./styled";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  getBookingsReqAction,
  cancelBookingReqAction,
  getBookingDetailsReqAction,
  getPaymentTypeReqAction
} from "../../store/actions/bookings";
import PDatePicker from "../../components/PDatePicker";
import { isEmpty } from "lodash";
import CreateBooking from "./CreateBooking";
import BookingDetails from "./BookingDetails";
import ModifyBooking from "./ModifyBooking";

const WeekGridView = ({ theme }) => {
  const bookings = useSelector(({ bookingDetails }) => bookingDetails.bookings);
  const confirmBooking = useSelector(({ bookingDetails }) => bookingDetails.modifyBooking);
  const confirmCancel = useSelector(({ bookingDetails }) => bookingDetails.confirmCancel);
  const newBooking = useSelector(({ bookingDetails }) => bookingDetails.newBooking);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const dispatch = useDispatch();
  const history = useHistory();
  const calenderRef = useRef();
  const [createBooking, setCreateBooking] = useState(false);
  const [modifyBooking, setModifyBooking] = useState(false);
  const [bookingDetails, setBookingDetalis] = useState(false);
  const [defaultTimezons, setDefaultTimezons] = useState("America/Regina");
  const profile = useSelector(({ profile: { profileData } }) => profileData);
  const [dates, setdates] = useState({ start: "" });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [event, setEvent] = useState();
  const [mobileView, setMobileView] = useState(false);
  const [desktopView, setDesktopView] = useState(false);

  // Mount
  useEffect(() => {
    dispatch(getPaymentTypeReqAction());
    if (!isEmpty(profile)) {
      setDefaultTimezons(profile.timezone);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobileView(true);
    } else {
      setDesktopView(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setMobileView(true);
        setDesktopView(false);
      } else {
        setMobileView(false);
        setDesktopView(true);
      }
    });
  }, []);

  useEffect(() => {
    if (history.location.hash && window.innerWidth < 768) {
      setMobileView(false);
      setBookingDetalis(true);
      const slug = history.location.hash.split("#")[1];
      dispatch(getBookingDetailsReqAction(slug));
    }
  }, []);

  useEffect(() => {
    if (!isEmpty(newBooking)) {
      setBookingDetalis(true);
      setCreateBooking(false);
      setModifyBooking(false);
    }
  }, [newBooking]);

  useEffect(() => {
    if (dateRange.start && dateRange.end) {
      dispatch(
        getBookingsReqAction({
          startDate: moment.tz(dateRange.start, profile.timezone).format(),
          endDate: moment.tz(dateRange.end, profile.timezone).format()
        })
      );
    }
  }, [newBooking, confirmBooking, confirmCancel]);

  useEffect(() => {
    if (!isEmpty(profile)) {
      setDefaultTimezons(profile.timezone);
    }
  }, [profile]);

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
            title: event.client.name,
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

  const handleDateClick = arg => {
    setMobileView(false);
    setdates({ start: arg.dateStr });
    setCreateBooking(true);
    setModifyBooking(false);
    setBookingDetalis(false);
  };

  const handleEventClick = e => {
    setMobileView(false);
    e.view.calendar.changeView("timeGridWeek");
    setEvent(e);
    setModifyBooking(false);
    setCreateBooking(false);
    dispatch(getBookingDetailsReqAction(e.event.id));
    setBookingDetalis(true);
    window.innerWidth < 768 && history.push(`${history.location.pathname}#${e.event.id}`);
  };

  const handleViewInSchedule = (e, date) => {
    event.view.calendar.changeView("timeGridDay", date);
  };

  const handleBookingDetails = () => {
    setMobileView(true);
    setModifyBooking(false);
    setCreateBooking(false);
    setBookingDetalis(false);
  };

  const handleMouseEnter = e => {};

  const handleModifyBooking = () => {
    setModifyBooking(true);
    setCreateBooking(false);
    setBookingDetalis(false);
  };

  const handleCancelBooking = value => {
    if (value) {
      setIsModalVisible(!isModalVisible);
      value === "ok" &&
        dispatch(
          cancelBookingReqAction({
            url: confirmCancel["callback-url"]
          })
        );
    } else {
      setIsModalVisible(false);
    }
  };

  const handleEventRender = eventInfo => {
    const { booking } = eventInfo.event.extendedProps;
    return (
      <div className="booking">
        {booking.status === "Cancelled" ? (
          <b>
            Cancelled <LockFilled />
          </b>
        ) : booking.status === "Rescheduled" ? (
          <b>
            Rescheduled <LockFilled />
          </b>
        ) : (
          <>
            {booking.status === "Closed" && <LockFilled />}
            <span style={{display: "block",
overflow: "auto"}}>
             {eventInfo.timeText}-{eventInfo.event.title}
              <br/>{booking.project.mobile_name}- {booking.paid_by_description}<br/>
              {booking.paid_by_2 && <span>&{booking.paid_by_2_description}


              </span>}
                {booking.paid_by_2 && <span>&{booking.paid_by_2_description}
              

              </span>}
                {booking.paid_by_2 && <span>&{booking.paid_by_2_description}
              

              </span>}  {booking.paid_by_2 && <span>&{booking.paid_by_2_description}
              

              </span>}  {booking.paid_by_2 && <span>&{booking.paid_by_2_description}
              

              </span>}  {booking.paid_by_2 && <span>&{booking.paid_by_2_description}
              

              </span>}  {booking.paid_by_2 && <span>&{booking.paid_by_2_description}
              

              </span>}
            </span>
          </>
        )}
      </div>
    );
  };

  return (
    <WeekGridStyledContainer>
      <Row className="cal-row">
        {!isEmpty(confirmCancel) && (
          <Modal
            title="Cancel Booking"
            visible={isModalVisible}
            onOk={() => handleCancelBooking("ok")}
            onCancel={() => handleCancelBooking()}
          >
            <p>{confirmCancel.message}</p>
          </Modal>
        )}
        {(mobileView || desktopView) && (
          <Col
            className="pd-r"
            xs={24}
            md={bookingDetails || createBooking || modifyBooking ? 15 : 24}
            lg={bookingDetails || createBooking || modifyBooking ? 18 : 24}
          >
            <FullCalendar
              ref={calenderRef}
              timeZone={defaultTimezons}
              plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
              initialView={"timeGridWeek"}
              headerToolbar={{
                left: "title",
                right: ""
              }}
              footerToolbar={{
                left: "prev today next timeGridDay timeGridWeek"
              }}
              editable={true}
              selectable={true}
              events={handleChange}
              dateClick={handleDateClick}
              eventClick={handleEventClick}
              eventMouseEnter={handleMouseEnter}
              eventContent={handleEventRender}
              eventStartEditable={false}
              eventDurationEditable={false}
            />
            <PDatePicker
              showTime={false}
              label=""
              containerClassName="calender-datepicker"
              onChange={dateValue => {
                let calendarApi = calenderRef.current.getApi();
                calendarApi.gotoDate(dateValue.format("YYYY-MM-DD"));
              }}
            />
          </Col>
        )}
        {bookingDetails && (
          <Col lg={6} md={9} xs={24} className="booking-full">
            <BookingDetails
              handleBookingDetails={handleBookingDetails}
              handleModifyBooking={handleModifyBooking}
              handleCancelBooking={handleCancelBooking}
              handleViewInSchedule={handleViewInSchedule}
              timezone={profile.timezone}
            />
          </Col>
        )}
        {createBooking && (
          <Col lg={6} md={9} xs={24} className="booking-full">
            <CreateBooking
              handleBookingDetails={handleBookingDetails}
              startDate={dates.start}
              timezone={profile.timezone}
            />
          </Col>
        )}
        {modifyBooking && (
          <Col lg={6} md={9} xs={24} className="booking-full">
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
    </WeekGridStyledContainer>
  );
};

export default withTheme(WeekGridView);
