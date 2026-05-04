module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testTimeout: 30000, 

  testEnvironment: "allure-jest/node",
  testEnvironmentOptions: {
    resultsDir: "./allure-results",
  },
};