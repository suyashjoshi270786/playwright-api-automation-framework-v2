const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "report",                // where cucumber-report.json is stored
  reportPath: "report/html",        // where HTML should be created
  reportName: "Playwright API Cucumber Report",
  pageTitle: "Playwright API Test Report",
  openReportInBrowser: false,
  metadata: {
    browser: {
      name: "chromium",
      version: "latest",
    },
    platform: {
      name: "Windows",
      version: "10",
    },
    device: "Local Machine",
  },
});
