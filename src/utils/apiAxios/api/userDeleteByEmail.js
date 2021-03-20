const axios = require('axios');

export default function userDeleteByEmail(userEmail){
    return axios({
        method: 'delete',
        url: `https://server-stage.pasv.us/user/email/${userEmail}`,
        headers: {
            Authorization: process.env.ADMIN_TOKEN
        },
    })
        .then(res => res.data)
        .catch(err => console.log(err.response.data))
}