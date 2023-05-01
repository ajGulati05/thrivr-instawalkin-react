test("API Config: load api config without issue", () => {
  // setup
  jest.resetModules(); // to make sure that require will return a new module instance
  jest.mock("../apiConfig", () => ({ api: "base_api_url" })); // mock whatever you want, even constants

  // test
  const apiConfig = require("../apiConfig");

  // assertions
  expect(apiConfig.api).toBe("base_api_url");

  // cleanup
  jest.resetModules(); // not required if you resetModules() at the beginning of each test case
});
