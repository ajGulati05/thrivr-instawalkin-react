import styled from "styled-components";

export const Container = styled.div`

  &:not(:first-of-type) {
    margin-top: 15px;
  }

  .canvas-container {
    position: relative;
    display: flex;
    flex-direction: row;

    
    .chart-buttons {
      display: flex;
      flex-direction: column;

      &.locked {
        display: none;
      }
      
      .button-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        padding: 0;
        border-radius: 5px;
        overflow: hidden;
        border: 0.5px solid #a6a6a6;
        /* border: 1px solid gray; */
      }
      button {
        /* border-radius: 5px;
        margin-bottom: 5px; */
        width: 30px;
        height: 30px;
        border: none;
        background: #fff;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:not(:last-child) {
          border-bottom: 0.5px solid #a6a6a6;
        }

        .brush-size {
          background: #000;
          border-radius: 50%;

          &.small {
            width: 6px;
            height: 6px;
          }
          &.medium {
            width: 8px;
            height: 8px;
          }
          &.large {
            width: 10px;
            height: 10px;
          }
        }

        i {
          margin: 0;
        }

        &.selected {
          background: radial-gradient(circle, rgba(175, 212, 196, 0.4) 0%, rgba(99, 95, 85, 0.4) 100%);
        }
      }
    }
  }

  .canvas {
    border: 1px solid #a6a6a6;
    margin-left: 10px;
    overflow: hidden;

    &.move {
      cursor: move;
    }
  }

  .ql-editor {
    min-height: 120px;
  }
`;

export const ChartContainerDiv = styled.div`
  -webkit-box-shadow: 0px 0px 6px 1px rgba(143, 133, 143, 1);
  -moz-box-shadow: 0px 0px 6px 1px rgba(143, 133, 143, 1);
  box-shadow: 0px 0px 6px 1px rgba(143, 133, 143, 1);

  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  /* position: relative;
  display: flex;
  flex-direction: row; */

  .chart-header {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 1em;
  }

  .accordion {
    width: 100%;
    
    &-content {
      position: relative;
      z-index: 1;
      max-height: 0px;
      overflow: hidden;
      transition: all 0.5s cubic-bezier(1, 0, 1, 0);
      &.show {
        max-height: 9999px;
        transition: all 0.5s cubic-bezier(1, 0, 1, 0);
      }
    }
  }

  .container-header,
  .container-footer {
    background: #f5f5f5;
    padding: 15px 15px;
    z-index: 0;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
    }

    i {
      cursor: pointer;
      transition: all 0.5s;
      &.right {
        transform: rotate(-90deg);
      }
    }

    button {
      outline: none;
      border: none;
    }
  }

  .chart-content-container {
    padding: 15px 15px 25px 15px;
    -webkit-box-shadow: 0px 0px 6px 1px rgba(143, 133, 143, 1);
    -moz-box-shadow: 0px 0px 6px 1px rgba(143, 133, 143, 1);
    box-shadow: 0px 0px 6px 1px rgba(143, 133, 143, 1);
    z-index: 5;
    position: relative;
  }
`;
