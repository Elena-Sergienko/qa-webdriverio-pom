import userLogin from "../api/userLogin";


const getUserId = async (email, password) => {
    let userId = (await userLogin(email, password)).user._id;
    return userId;
}

module.exports = getUserId;