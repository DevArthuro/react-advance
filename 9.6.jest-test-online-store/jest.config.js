const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  setupFile: ["<rootDir>/.jest/setupEnv.js"],
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
