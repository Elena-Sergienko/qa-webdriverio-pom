const syncrq = require('sync-request');

class Requests {

    getAllUsers(url) {
        let data = {};
        try {
            const res = syncrq('GET', url, {
                headers: {
                    Authorization: process.env.ADMIN_TOKEN,
                },
            });
            data = JSON.parse(res.getBody('utf8'));
        } catch (err) {
            console.log('Failed to retrieve data');
        }
        return data;
    }

    getAllGroups(url) {
        let data = {};
        try {
            const res = syncrq('GET', url, {
                headers: {
                    Authorization: process.env.ADMIN_TOKEN,
                },
            });
            data = JSON.parse(res.getBody('utf8'));
        } catch (err) {
            console.log('Failed to retrieve data');
        }
        return data;
    }

}

export default new Requests();