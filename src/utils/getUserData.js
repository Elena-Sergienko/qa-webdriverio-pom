import userLogin from "./api/userLogin";

export async function getUserId(email, password) {
    let userId = (await userLogin(email, password)).user._id;
    return userId;
}
