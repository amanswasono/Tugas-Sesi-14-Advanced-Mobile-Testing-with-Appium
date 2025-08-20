export const config = {
  runner: 'local',
  specs: ['./test/*.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    // line 8 dan 9, silahkan di sesuaikan dengan device masing2
    'appium:deviceName': '7e220a28',
    'appium:platformVersion': '15',

    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'io.appium.android.apis',
    'appium:appActivity': '.ApiDemos',
    'appium:noReset': true
  }],
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
  }]],
  hostname: 'localhost',
  port: 4723,
  path: '/',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  afterTest: async function (_, __, { passed }) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  }
};
