import axios from "axios";

export default function userSearchByEmail(userEmail){
    return axios({
        method: 'post',
        url: 'https://server-stage.pasv.us/user/search',
        data: {
            email: `${userEmail}`
        },
        headers: {
            Authorization: process.env.ADMON_TOKEN
        },
    }).then(res => res.data)
        .catch(err => console.log(err.response.data))
}