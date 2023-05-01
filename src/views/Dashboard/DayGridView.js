import React, { useState, useRef } from "react";
import { withTheme } from "styled-components";
import { DayGridStyledContainer } from "./styled";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { LockFilled } from "@ant-design/icons";

const DayGridView = ({ handleEventClick, handleDateClick, handleChange }) => {
  const calenderRef = useRef();
  const [defaultTimezons, setDefaultTimezons] = useState("America/Regina");
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
              {eventInfo.event.title}, {eventInfo.timeText}, {booking.paid_by},{" "}
              {booking.paid_by_2 && <span>{booking.paid_by_2}</span>}
            </span>
          </>
        )}
      </div>
    );
  };

  return (
    <DayGridStyledContainer>
      <FullCalendar
        ref={calenderRef}
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        timeZone={defaultTimezons}
        initialView="timeGridDay"
        headerToolbar={{
          left: "title",
          right: ""
        }}
        footerToolbar={{
          center: "prev today next"
        }}
        events={handleChange}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventContent={handleEventRender}
        eventStartEditable={false}
        eventDurationEditable={false}
      />
    </DayGridStyledContainer>
  );
};

export default withTheme(DayGridView);
