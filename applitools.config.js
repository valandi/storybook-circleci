module.exports = {
  concurrency: 20,
  readStoriesTimeout: 300000,
  waitBeforeScreenshots: 3000,
  browser: [
    { width: 800, height: 600, name: "chrome" }
    // { width: 800, height: 600, name: "firefox" },
    // { width: 1200, height: 800, name: "chrome" },
    // { width: 1200, height: 800, name: "firefox" }
  ],
  dontCloseBatches: true
};