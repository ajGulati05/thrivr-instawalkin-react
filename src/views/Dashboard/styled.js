import styled from "styled-components";

export const DashboardStyledContainer = styled.div`
  .dashboard-total-card {
    cursor: pointer;
    height: 100%;
    &:hover {
      background: #ff727142;
    }
    .card-box {
      span:nth-child(1) {
        font-size: 14px;
        font-weight: 400;
        white-space: nowrap;
      }
      span:nth-child(2) {
        font-size: 32px;
        font-weight: bold;
        color: #ff7271;
        word-break: break-word;
        line-height: normal;
      }
    }
  }

  .create-booking {
    background-color: #fff;
    padding: 15px;
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

  .dashboard-btn {
    .ant-btn {
      margin-right: 10px;
      margin-bottom: 10px;
    }
    @media (max-width: 768px) {
      .ant-col {
        justify-content: center;
      }
    }
  }
  .dashboard-section {
    background-color: #fff;
    margin: 0px 0 10px;
    border: 1px solid #dadada;
    .ant-col {
      justify-content: space-between;
      .ant-card {
        border: none;
      }
    }
    @media (max-width: 1399px) {
      & > .ant-col {
        overflow-x: scroll;
        .ant-row {
          flex-flow: row;
          .ant-col-md-4 {
            max-width: 100%;
          }
          .dashboard-total-card {
            height: 100%;
            .ant-card-body {
              padding: 15px;
            }
            .card-box {
              span:nth-child(2) {
                font-size: 28px;
                font-weight: bold;
                color: #ff7271;
              }
            }
          }
        }
      }
    }

    @media (max-width: 991px) {
      /* .ant-col {
        flex-wrap: wrap;
        .ant-card {
          width: 33.33% !important;
        }
      } */
    }
    @media (max-width: 991px) {
      & > .ant-col {
        overflow-x: scroll;
        .ant-row {
          flex-flow: row;
          .ant-col-md-4 {
            max-width: 100%;
          }
          .dashboard-total-card {
            height: 100%;
            .ant-card-body {
              padding: 15px;
              width: 140px;
            }
          }
        }
      }
    }
    @media (max-width: 480px) {
    }
  }
  .dashboard-chart {
    padding: 20px;
    background-color: #fff;
    margin: 0px 0 10px;
  }
  .dashboard-review {
    margin: -5px -5px 0;
    .chart-box {
      padding: 5px;
      width: 100%;
      .individual-endorsement {
        img {
          margin-right: 10px;
        }
        &:not(:first-child) {
          margin-top: 10px;
        }
      }
      @media (max-width: 1199px) {
        .recharts-legend-wrapper {
          left: 230px !important;
        }
      }
      @media (max-width: 1199px) {
        .recharts-legend-wrapper {
          left: 175px !important;
        }
        .recharts-wrapper > svg {
          height: 200px !important;
          width: 100%;
        }
        .recharts-wrapper {
          height: auto !important;
          width: 200px !important;
        }
      }
      @media (max-width: 480px) {
        .recharts-wrapper {
          height: auto !important;
          width: 100% !important;
        }
        .recharts-wrapper > svg {
          height: 250px !important;
          width: 100%;
        }
        .recharts-legend-wrapper {
          position: initial !important;
          margin: auto;
        }
      }
    }
  }
  .booking-details {
    background-color: #fff;
    padding: 24px 15px;
    button.save {
      &:hover {
        background-color: #d06162 !important;
      }
      &:focus {
        background-color: #d06162 !important;
      }
    }
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
    .ant-collapse-header {
      padding: 12px 0px;
      .ant-collapse-arrow {
        right: 0;
      }
    }
  }
  .create-booking {
    background-color: #fff;
    padding: 15px;
    .addclient-section {
      .button-section {
        button {
          span {
            font-size: 12px;
          }
        }
      }
    }
    .ant-card-body {
      button.save {
        &:hover {
          background-color: #d06162 !important;
        }
        &:focus {
          background-color: #d06162 !important;
        }
      }
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
  .booking-full {
    width: 320px;
  }
  @media (max-width: 767px) {
    .booking-full {
      padding-top: 30px;
    }
    .pd-r {
      padding-right: 0;
    }
  }
  .pd-r {
    padding-right: 15px;
  }
  @media (min-width: 991px) {
    .booking-full {
      position: absolute;
      right: 0;
      box-shadow: 0px 0px 20px 0 rgba(0, 0, 0, 0.3);
    }
    .bookingdetails-section {
      width: calc(100% - 260px);
      padding-left: 15px;
      &.bookingdetails-full-section {
        width: 100%;
      }
    }
    .left-section {
      width: 260px;
      flex: 0 0 260px;
      max-width: 260px;
    }
    .bookingdetails-section-right {
      width: calc(100% - 260px);
      padding-right: 0px;
      padding-left: 15px;
    }
  }
  @media (max-width: 991px) {
    .booking-full {
      position: initial;
      width: 100%;
      background-color: #fff;
      z-index: 1;
    }
    .bookingdetails-section,
    .bookingdetails-section-right,
    .left-section {
      width: 100%;
    }
  }
  @media (min-width: 1399px) {
    .bookingdetails-section-right {
      width: calc(100% - 580px);
      padding-right: 15px;
      padding-left: 15px;
    }
    .booking-full {
      box-shadow: none;
    }
  }
`;
export const DayGridStyledContainer = styled.div`
  height: calc(100% - 98px);
  position: fixed;
  max-width: inherit;
  width: 260px;
  .fc-theme-standard.fc {
    height: 100%;
  }
  @media (max-width: 991px) {
    width: calc(100% - 30px);
    height: calc(100% - 130px);
  }
  .fc-view-harness {
    .booking {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
