const axios = require('axios');

export default function userRegister(userEmail, userPassword, firstName, lastName){
    return axios({
        method: 'post',
        url: 'https://server-stage.pasv.us/user',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            email: `${userEmail}`,
            password: `${userPassword}`,
            firstName: `${firstName}`,
            lastName: `${lastName}`,
            phone: "17775551122",
            about: "123123",
            goals: "123123",
            englishLevel: "Pre-Intermediate",
            countryName: "Belarus"

        }
    }).then(res => res.data)
      .catch(err => console.log(err.response.data))
}