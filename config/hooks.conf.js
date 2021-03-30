const axios = require('axios');

module.exports = {

    before: async function beforeHook() {
        const user = await axios({
            method: 'post',
            url: 'https://server-stage.pasv.us/user/login',
            data: {
                email: 'admin@gmail.com',
                password: '111111',
            }
        })
            .then((res) => res.data)
            .catch((err) => err.response.data);
        process.env.ADMIN_TOKEN = user.token;

        // browser.maximizeWindow();
    },

    afterTest: function (test, context, {error, result, duration, passed, retries}) {
        if (error) {
            browser.takeScreenshot();
        }
    }
};