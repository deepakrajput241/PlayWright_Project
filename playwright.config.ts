import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  testMatch: ["tests/webScraping.spec.ts"],
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/",
    headless: true,
    trace: "retain-on-failure",
    screenshot: "on",
    video: "retain-on-failure",
    actionTimeout: 2000000,
    // channel: "chrome"
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile:"jsonReports/jsonReport.json"
  }], ['experimental-allure-playwright']]
};

export default config;
