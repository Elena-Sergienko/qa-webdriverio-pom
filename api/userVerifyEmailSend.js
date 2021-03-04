const axios = require('axios');

export default function userVerifyEmailSend(userEmail, userId){
    return axios({
        method: 'post',
        url: `https://server-stage.pasv.us/user/verify/${userEmail}/send`,
        headers: {
            "Content-Type": "application/json",
            Authorization: process.env.ADMIN_TOKEN
        },
        data: {
            userId: `${userId}`,
        }
    })
        .then(res => res.data)
        .catch(err => console.log(err.response.data))
}