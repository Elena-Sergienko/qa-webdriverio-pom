import userLogin from "./api/userLogin";

export async function getUserId(email, password) {
    let userId = (await userLogin(email, password)).user._id;
    return userId;
}

export async function getUserToken(email, password) {
    let userToken = (await userLogin(email, password)).token;
    return userToken;
}
