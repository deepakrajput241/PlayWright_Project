import { PlaywrightTestConfig, chromium } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  testMatch: ["**.spec.ts"],
   // Fail the build on CI if you accidentally left test.only in the source code.
   forbidOnly: !!process.env.CI,

   // Retry on CI only.
   retries: process.env.CI ? 1 : 0,
 
   // Opt out of parallel tests on CI.
   workers: process.env.CI ? 1 : 2,
   
  use: {
    baseURL: process.env.STAGING === '1' ? 'https://tmastaging.com/' : 'https://tmastaging.com/Login?ReturnUrl=%2F',
    headless: process.env.CI ? true : false,
    
    // channel: "chrome",
    screenshot: process.env.CI ? "off" : "on",
    video: process.env.CI ? "off" : "on",
    actionTimeout: 2000000,
     // Whether to ignore HTTPS errors during navigation.
    ignoreHTTPSErrors: true,
    trace: process.env.CI ? "off" : "on",
    contextOptions: {
      permissions: ["clipboard-read"]
    },
     // Whether to emulate network being offline.
     offline: false, 
     launchOptions: {
      slowMo: 0,
    },   
  },
  
  timeout: 1 * 30 * 1000,
  expect: {
    timeout: 5000
  },
 
  fullyParallel: !true,
  reporter: process.env.CI ? [["junit", {
    outputFile: "result.xml"
  }]] : [["dot"], ["json", {
    outputFile:"test-result.json"
  }], ["html", {
    open: "on-failure"
  }], ["allure-playwright"]],
};

export default config;
