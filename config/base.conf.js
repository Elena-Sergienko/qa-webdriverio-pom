module.exports = {
    specs: [
        // './src/test/specs/settings/settingsProfile.spec.js',
        // './src/test/specs/settings/settingsShipping.spec.js',
        // './src/test/specs/shop/shop.spec.js',
        // './src/test/specs/settings/urlSettings.spec.js',
        // './src/test/specs/modules/diary/diary.spec.js',
        './src/test/specs/**/*.js'
    ],
    exclude: [
        // './src/test/specs/settings/settingsProfile.spec.js',
        // './src/test/specs/settings/settingsLinks.spec.js',
        './src/test/specs/settings/settingsPassword.spec.js',
        './src/test/specs/modules/diary/diary.spec.js',
        './src/test/specs/register.spec.js',
        './src/test/specs/registerAPI.spec.js',
        // './src/test/specs/shop/shop.spec.js'
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
