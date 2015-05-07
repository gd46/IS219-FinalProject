exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    seleniumPort: null,
    seleniumArgs: [],
    specs: [
        './test/e2e/*.spec.js'
    ],
    chromeOnly: true,
    // directConnect: true --> to directly connect to different browsers
    chromeDriver: './node_modules/protractor/selenium/chromedriver',
    capabilities: {
        'browserName': 'chrome'
    },
    baseUrl: 'localhost:8080',
    'loggingPrefs': {
        'browser': 'ALL' // Selenium logging preferences
    },
    onPrepare: function() {
        browser.driver.manage().window().maximize();
        // Can use setSize(1600, 800) instead to test app responsiveness in the future
    },
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        reporter: 'spec',
        timeout: 100000
    }
};
