import styled from "styled-components";

export const AvailabilityStyledContainer = styled.div`
  .select-wrapper {
    display: flex;
  }
  .ant-tabs {
    background-color: #fff;
    padding: 5px 20px 20px;
    overflow: visible;
    .ant-tabs-tab-active,
    .ant-tabs-tab:hover {
      .ant-tabs-tab-btn {
        color: #ff7271;
      }
    }
    .ant-tabs-tab:active {
      color: #ff7271;
    }
    .ant-tabs-ink-bar {
      background: #ff7271;
    }
    .icon-check {
      color: #28a745;
      margin-left: 10px;
    }
    button {
      background-color: #ff7271;
      span {
        color: #fff;
      }
      &:hover {
        background-color: #d06162 !important;
      }
    }
    .ant-picker {
      width: 200px;
      .ant-picker-input input {
        width: 140px;
      }
    }
  }
`;
