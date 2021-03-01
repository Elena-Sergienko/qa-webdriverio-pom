const axios = require('axios');

export const userLogin = async (userEmail, userPassword) =>
 axios({
        method: 'post',
        url: 'https://server-stage.pasv.us/user/login',
        data: {
            email: `${userEmail}`,
            password: `${userPassword}`
        }
    }).then(res => res.data)
      .catch(err => console.log(err.response.data))

// process.env.USERNEW_ID = loginNewUser.id;


// export default function userLogin(userEmail, userPassword){
//     return axios({
//         method: 'post',
//         url: 'https://server-stage.pasv.us/user/login',
//         data: {
//             email: `${userEmail}`,
//             password: `${userPassword}`
//         }
//     }).then(res => res.data.user._id)
//       .catch(err => console.log(err.response.data))
// }