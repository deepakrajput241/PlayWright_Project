import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  testMatch: ["tests/LoginTest.spec.ts"],
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/",
    headless: true,
    screenshot: "on",
    video: "retain-on-failure",
    actionTimeout: 2000000
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile:"jsonReports/jsonReport.json"
  }], ["html", {
    open: "never"
  }]]
};

export default config;
