import React from "react";
import { shallow } from "enzyme";
import AppContainer from "./app.js";

jest.mock("react-redux", () => () => <div id="app_provider" />);
jest.mock("react-router-dom", () => () => <div id="app_router" />);
jest.mock("./containers", () => () => <div id="app" />);
jest.mock("./store/configureStore", () => "mock store");

describe("App", () => {
  const wrapper = () => {
    return shallow(<AppContainer />);
  };

  test("Renders without crashing", () => {
    const appWrappper = wrapper().find("div");
    expect(appWrappper.length).toBe(0);
  });
});
