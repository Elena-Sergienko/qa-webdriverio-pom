module.exports = {
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        './test/specs/settingsProfile.spec.js',
        './test/specs/diary.spec.js',
        './test/specs/settingsLinks.spec.js',
        './test/specs/settingsPassword.spec.js',
        './test/specs/settingsShipping.spec.js',
        './test/specs/shop.spec.js'
    ],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 15000,
    connectionRetryCount: 3,

    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: ['@babel/register']
    }
}
