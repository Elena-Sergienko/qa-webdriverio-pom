const axios = require('axios');

export default function userSearchByEmail(){
    return axios({
        method: 'get',
        url: 'https://server-stage.pasv.us/course',
        headers: {
            Authorization: process.env.ADMIN_TOKEN
        },
    }).then(res => res.data)
      .catch(err => console.log(err.response.data))
}