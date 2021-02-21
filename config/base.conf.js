module.exports = {
    specs: [
        './test/specs/settings/settingsProfile.spec.js',
        './test/specs/settings/settingsShipping.spec.js',
        // './test/specs/**/*.js'
    ],
    exclude: [
        // './test/specs/settings/settingsProfile.spec.js',
        // './test/specs/modules/diary/diary.spec.js',
        // './test/specs/settings/settingsLinks.spec.js',
        // './test/specs/settings/settingsPassword.spec.js',
        './test/specs/register.spec.js',
        './test/specs/registerAPI.spec.js',
        // './test/specs/shop/shop.spec.js'
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
