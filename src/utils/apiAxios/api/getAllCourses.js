const axios = require('axios');

export default function userSearchByEmail(token_role){
    return axios({
        method: 'get',
        url: 'https://server-stage.pasv.us/course',
        headers: {
            Authorization: token_role
        },
    }).then(res => res.data)
      .catch(err => console.log(err.response.data))
}