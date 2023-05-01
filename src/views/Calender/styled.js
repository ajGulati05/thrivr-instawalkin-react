import styled from "styled-components";

export const CalenderStyledContainer = styled.div`
  .calender-main-row {
    // height: calc(100vh - 80px);
    & > .ant-col,
    .cal-row,
    .cal-row > .ant-col {
      height: inherit;
    }
  }
  .fc-view-harness {
    z-index: 0;
    height: calc(100vh - 195px) !important;
    @media (max-width: 649px) {
      height: calc(100vh - 245px) !important;
    }
    .booking {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const WeekGridStyledContainer = styled.div`
  height: inherit;
  .fc-theme-standard.fc {
    height: 100%;
 @media (max-width: 991px) {
    width: calc(100% - 30px);
    height: calc(100% - 130px);
  }
    .fc-toolbar-chunk {
      .fc-today-button,
      .fc-timeGridDay-button,
      .fc-timeGridWeek-button {
        text-transform: capitalize;
      }
    }
  }
  .pd-r {
    padding-right: 15px;
  }
  .calender-datepicker {
    width: fit-content;
    position: absolute;
    right: 0;
    bottom: 0;
    @media (max-width: 490px) {
      .ant-picker {
        width: 37px;
        height: 0;
        .ant-picker-input input {
          height: 0;
          width: 0;
        }
      }
    }
  }
  .booking-details {
    background-color: #fff;
    padding: 24px 15px;
    .ant-card-body {
      padding: 0;
      .btngrp {
        .ant-btn {
          border-radius: 2px;
          margin-bottom: 10px;
          margin-right: 10px;
        }
      }
    }
    .client-name {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .ant-collapse-header {
      padding: 12px 0px;
      .ant-collapse-arrow {
        right: 0;
      }
    }
  }
  .create-booking,
  .booking-details {
    background-color: #fff;
    padding: 15px;
    button.save {
      &:hover {
        background-color: #d06162 !important;
      }
      &:focus {
        background-color: #d06162 !important;
      }
    }
    .ant-card-body {
      padding: 0px;
      @media (max-width: 1199px) {
        .ant-row {
          margin-bottom: 10px;
          label {
            margin-bottom: 5px;
            display: inline-block;
          }
        }
      }
    }
    .ant-select {
      width: 100%;
      border-bottom: 0;
    }
  }
  @media (max-width: 767px) {
    .booking-full {
      padding-top: 30px;
    }
    .pd-r {
      padding-right: 0;
    }
  }
  .time-picker {
    .ant-picker {
      width: 100%;
      &:hover {
        border-color: #fd7271;
      }
    }
  }
  .custom-checkbox {
    .ant-checkbox-inner {
      height: 16px;
      width: 16px;
      border-width: 1px;
    }
    .ant-checkbox-checked {
      .ant-checkbox-inner {
        background-color: #fd7271;
        border-color: #fd7271 !important;
      }
    }
    .ant-checkbox-checked {
      &:after {
        border-color: #fd7271;
      }
    }
    &:hover {
      .ant-checkbox-checked {
        &:after {
          border-color: #fd7271;
        }
      }
      .ant-checkbox-inner {
        border-color: #fd7271 !important;
      }
    }
  }
`;
