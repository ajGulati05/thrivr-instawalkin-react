module.exports = {
  verbose: true,
  coverageDirectory: "<rootDir>/coverage/",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}", "!**/node_modules/**"],
  setupFilesAfterEnv: ["./src/setupTests.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: ["./src/setupTests.js"],
  // roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest"
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$", "^.+\\.module\\.(css|sass|scss)$"],
  testPathIgnorePatterns: ["node_modules/", "src/assets/"],
  coveragePathIgnorePatterns: ["node_modules/", "src/assets/", "src/constants/", "src/utils/", "src/serviceWorker.js"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(svg)$": "<rootDir>/__mocks__/svgMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
