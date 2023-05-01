import styled from "styled-components";
import { palette } from "styled-theme";
import { transition, borderRadius } from "../../utils/styleHelper";
import WithDirection from "../../utils/rtlHelper";

const ClientComponentWrapper = styled.div`
  padding: 0;
  display: flex;
  height: 100%;
  min-height: 300px;
  background: none;

  @media only screen and (max-width: 767px) {
    padding: 0;
    height: auto;
    flex-direction: column;

    &.ant-layout.ant-layout-has-sider {
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 767px) and (max-width: 990px) {
    padding: 0;
  }

  .header {
    margin-right: 10px;
    .ant-tabs-tab-btn {
      color: #fd7271 !important;
      height: 25px;
      width: 70px;
      border-radius: 3px;
      text-align: center;
    }
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    background-color: #fd7271;
    color: #fff !important;
  }

  .isoReviewListSidebar {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    background: transparent !important;
    .ant-input-search {
      margin-bottom: 10px;
      border-color: #cccccc;
      display: inline-block;
      input {
        width: calc(100% - 50px);
        height: 25px;
      }
      .ant-input-suffix {
        display: inline-block;
      }
    }
    .isoReviewList {
      background-color: #fff;
      border: 1px solid #cccccc;
      border-radius: 4px;
      ul {
        list-style: none;
        padding-left: 0;
        li {
          padding: 10px 15px;
          border-top: 1px solid #eeeeee;
          border-bottom: 1px solid #eeeeee;
          margin-bottom: -1px;
          &:hover {
            background-color: #eeeeee;
          }
          &.active {
            background-color: #ff7271;
          }
        }
      }
    }
    .ant-row {
      .ant-col {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 3em 0 0;
        img {
          width: 40px;
        }
        span {
          font-size: 0.5em;
        }
      }
    }
    ${"" /* height: 100%; */} background: #ffffff;
    border-left: ${props => (props["data-rtl"] === "rtl" ? 1 : 0)}px solid ${palette("border", 0)};

    @media only screen and (min-width: 767px) and (max-width: 990px) {
      width: 260px !important;
      flex: 0 0 260px !important;
      max-width: none !important;
      min-width: 0 !important;
    }
    @media only screen and (max-width: 767px) {
      width: auto !important;
      max-width: 100% !important;
      min-width: 0 !important;
      margin-bottom: 30px;
      flex: 0 !important;
      overflow: hidden;
      overflow-y: auto;
      margin-right: 0;
    }
  }

  .site-card-border-less-wrapper {
    width: 100%;
  }

  .card-wrapper {
    .ant-card-body {
      display: flex;
      justify-content: space-between;
    }
  }

  .isoReviewpadWrapper {
    background: #ffffff;

    .isoHeader {
      height: auto;
      line-height: inherit;
      padding: 20px 30px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-direction: row;
      background-color: #ffffff;
      border-bottom: 1px solid ${palette("border", 0)};

      @media only screen and (max-width: 480px) {
        padding: 20px;
      }

      @media only screen and (max-width: 400px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      .isoColorChooseWrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        margin-right: ${props => (props["data-rtl"] === "rtl" ? "inherit" : "auto")};
        margin-left: ${props => (props["data-rtl"] === "rtl" ? "auto" : "inherit")};

        span {
          font-size: 13px;
          color: ${palette("grayscale", 0)};
        }

        .isoColorChooser {
          width: 20px;
          height: 20px;
          cursor: pointer;
          border: 0;
          margin: ${props => (props["data-rtl"] === "rtl" ? "0 0 0 15px" : "0 15px 0 0")};
          padding: 0;
          ${borderRadius("3px")};

          &:empty {
            visibility: visible;
          }
        }
      }

      .isoAddReviewBtn {
        background-color: ${palette("primary", 0)};
        border: 0;
        padding: 5px 15px;
        margin-left: ${props => (props["data-rtl"] === "rtl" ? "inherit" : "auto")};
        margin-right: ${props => (props["data-rtl"] === "rtl" ? "auto" : "inherit")};
        ${borderRadius("3px")};
        ${transition()};

        @media only screen and (max-width: 400px) {
          margin: ${props => (props["data-rtl"] === "rtl" ? "15px 0 0 0" : "15px 0 0 0")};
        }

        span {
          font-size: 12px;
          font-weight: 400;
          padding: 0;
          text-transform: uppercase;
          color: #ffffff;
        }

        &:hover {
          background-color: ${palette("primary", 1)};
        }
      }
    }

    .isoReviewEditingArea {
      display: flex;
      height: 100%;

      @media (max-width: 800px) {
        height: 300px;
      }

      .isoReviewTextbox {
        font-size: 14px;
        color: ${palette("text", 2)};
        line-height: 24px;
        width: 100%;
        height: calc(100% - 30px);
        border: 0;
        outline: 0;
        padding: 20px 30px;
        resize: none;

        &:focus {
          box-shadow: none;
        }

        @media only screen and (max-width: 480px) {
          padding: 20px;
        }
      }
    }

    @media (max-width: 767px) {
      .isoReviewListSidebar.ant-layout-sider {
        width: auto !important;
        margin-bottom: 30px;
        flex: 0 0 450px !important;
      }
    }
  }

  .addclient-section {
    width: 100%;
    .ant-row {
      margin-bottom: 15px;
    }
    .button-section {
      margin-bottom: 15px;
    }
    .selected-flag {
      padding: 0 0 0 11px;
    }
  }
  .client-details {
    .ant-card-body {
      flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      padding: 24px 15px;
      .card-box {
        width: 24%;
        padding: 0 10px;
      }
      @media (max-width: 650px) {
        padding: 15px;
        .card-box {
          width: 50%;
          &:nth-child(1),
          &:nth-child(2) {
            padding-bottom: 15px;
          }
        }
      }
    }
  }
  .booking-details {
    background-color: #fff;
    padding: 24px 15px;
    .ant-collapse-content-box {
      padding: 0 15px;
    }
    .ant-divider-horizontal {
      margin: 15px 0;
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
  .intakeform-section, .charts-section {
    .ant-card-body {
      padding: 20px;
    }
    .ant-item {
      margin-bottom: 15px;
      label {
        font-size: 14px;
        margin-bottom: 5px;
        display: inline-block;
        margin-right: 10px;
      }
      .react-tel-input {
        .form-control,
        .flag-dropdown {
          border-width: 1px;
        }
        .form-control {
          width: 100%;
        }
      }
      .ant-radio {
        &:hover {
          .ant-radio-inner {
            border-color: #fd7271;
          }
        }
      }
      .ant-radio-checked {
        .ant-radio-inner {
          border-color: #fd7271;
          &:after {
            background-color: #fd7271;
          }
        }
      }
      .checkbox {
        width: 20%;
        label {
          width: 100%;
          &:hover {
            .ant-checkbox-inner {
              border-color: #fd7271;
            }
          }
          .ant-checkbox-checked {
            .ant-checkbox-inner {
              background-color: #fd7271;
              border-color: #fd7271;
            }
            &:after {
              border-color: #fd7271;
            }
          }
          & > span:not(.ant-checkbox) {
            width: calc(100% - 16px);
            display: inline-block;
            vertical-align: top;
          }
        }
      }
    }
    @media (max-width: 1450px) {
      .checkbox {
        width: 25% !important;
      }
    }
    @media (max-width: 1250px) {
      .checkbox {
        width: 33% !important;
      }
    }
    @media (max-width: 991px) {
      label:not(.ant-radio-wrapper) {
        width: 100%;
      }
      .checkbox {
        width: 50% !important;
      }
    }
    @media (max-width: 520px) {
      .checkbox {
        width: 100% !important;
      }
    }
  }
  .tab-section {
    .header {
      padding: 8px 12px;
      border-radius: 3px;
      margin-right: 0;
      &.active {
        background-color: #fd7271;
        color: #fff !important;
      }
      &:hover {
        color: #d06162 !important;
      }
    }
  }
  .booking-covid {
    .ant-item {
      margin-bottom: 10px;
      .checkbox {
        width: 100%;
        label {
          margin: 0;
          width: 100%;
        }
      }
      label {
        display: inline-block;
        padding-bottom: 5px;
      }
    }
    @media only screen and (max-width: 991px) {
      .ant-item {
        .checkbox {
          width: 50%;
        }
      }
    }
    @media only screen and (max-width: 767px) {
      .ant-item {
        .checkbox {
          width: 33.33%;
        }
      }
    }
    @media only screen and (max-width: 576px) {
      .ant-item {
        .checkbox {
          width: 50%;
        }
      }
    }
    @media only screen and (max-width: 400px) {
      .ant-item {
        .checkbox {
          width: 100%;
        }
      }
    }
  }
`;

const ClientListSidebar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 128px);

  @media only screen and (max-width: 767px) {
    max-height: 60vh;
  }

  .isoSearchReviews {
    flex-shrink: 0;
    max-height: none;
    width: 100%;
    height: 77px;
    padding: 0 15px;
    padding-left: ${props => (props["data-rtl"] === "rtl" ? "15px" : "35px")};
    padding-right: ${props => (props["data-rtl"] === "rtl" ? "35px" : "15px")};
    border: 0;
    border-bottom: 1px solid rgba(230, 230, 230, 0.7);
    outline: 0 !important;
    /* overflow: hidden; */
    background-color: #ffffff;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    border-radius: 0;
    box-shadow: none;
    ${transition()};

    @media only screen and (max-width: 767px) {
      height: 50px;
    }

    &.ant-input-affix-wrapper:focus,
    &.ant-input-affix-wrapper-focused {
      border-color: rgba(230, 230, 230, 0.7);
    }

    .ant-input {
      font-size: 14px;
      font-weight: 400;
      color: ${palette("text", 0)};
      line-height: inherit;
    }

    &:hover,
    &:focus {
      .ant-input {
        border-color: rgba(230, 230, 230, 0.7) !important;
      }
    }
  }

  .ant-input-suffix {
    left: ${props => (props["data-rtl"] === "rtl" ? "auto" : "10px")};
    right: ${props => (props["data-rtl"] === "rtl" ? "10px" : "auto")};
    color: ${palette("grayscale", 0)};

    .ant-input-search-icon {
      &:before {
        display: none;
      }
    }
  }

  .isoReviewList {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow: hidden;
    overflow-y: auto;

    .isoList {
      width: 100%;
      margin: 0;
      display: flex;
      justify-content: flex-start;
      flex-shrink: 0;
      padding: 0;
      border-bottom: 1px solid ${palette("border", 0)};
      text-align: ${props => (props["data-rtl"] === "rtl" ? "right" : "left")};
      position: relative;

      .isoReviewBGColor {
        width: 5px;
        display: flex;
        margin: ${props => (props["data-rtl"] === "rtl" ? "0 0 0 15px" : "0 15px 0 0")};
        flex-shrink: 0;
      }

      .isoReviewText {
        width: calc(100% - 60px);
        margin: ${props => (props["data-rtl"] === "rtl" ? "0 0 0 20px" : "0 20px 0 0")};
        padding: 20px 0;
        cursor: pointer;

        h3 {
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: ${palette("secondary", 2)};
          font-weight: 500;
        }

        .isoReviewCreatedDate {
          font-size: 13px;
          color: ${palette("grayscale", 0)};
        }
      }

      .isoDeleteBtn {
        width: 24px;
        height: 24px;
        background-color: transparent;
        flex-shrink: 0;
        position: absolute;
        top: 5px;
        right: ${props => (props["data-rtl"] === "rtl" ? "inherit" : "5px")};
        left: ${props => (props["data-rtl"] === "rtl" ? "5px" : "inherit")};
        padding: 0;
        border: 0;
        font-size: 14px;
        color: ${palette("grayscale", 0)};
        ${transition()};

        &:hover {
          color: ${palette("primary", 0)};
        }
      }
    }

    .isoNotlistNotice {
      font-size: 14px;
      font-weight: 400;
      color: ${palette("grayscale", 0)};
      line-height: inherit;
      padding: 30px 20px;
    }

    .isoNoResultMsg {
      padding: 15px 20px;
      text-align: center;
      color: ${palette("secondary", 2)};
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

export default WithDirection(ClientComponentWrapper);
const ClientListWrapper = WithDirection(ClientListSidebar);
export { ClientListWrapper };
