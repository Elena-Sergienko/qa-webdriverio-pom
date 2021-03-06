import LoginPage from "../../pageobjects/login.page";
import ProfilePage from "../../pageobjects/profile.page";
import SettingsProfilePage from "../../pageobjects/settings/settingsProfile.page"
import SettingsShippingPage from "../../pageobjects/settings/settingsShipping.page"
import MenuPage from "../../pageobjects/menu.page";
import faker from 'faker';
import userRegister from "../../../utils/api/userRegister";
import userLogin from "../../../utils/api/userLogin";



describe('TS: SETTINGS SHIPPING ADDRESS', () => {

    let userId;
    let userToken;
    let userRole;

    const visa = {
        email: "new@qa6.us",
        number: "4242 4242 4242 4242",
        expDate: "08/23",
        cvc: "521",
        name: "Ivan Ivanov",
        zip: "30096"
    }
    const amex = {
        email: "new@qa6.us",
        number: " ",
        expDate: "08/23",
        cvc: "1234",
        name: "Ivan Ivanov",
        zip: "30096"
    }

    let user = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: '11111111111'
    }


    // before(async () => {
    //     await userRegister("shop34@gmail.com", "111111", user.firstName, user.lastName);
    //
    //
    //     //register              API
    //     //confirm email         API
    //     //check status learner  UI
    //     //buy course            UI
    //     //check status student  UI
    //     //delete user           API
    // })

    // after(() => {
    //     //delete
    // })
    // beforeEach(() => {
    // })

    // it('Verify the user created and role - new', () => {
    //     LoginPage.login('shop34@gmail.com', '111111');
    //     expect(ProfilePage.role).toHaveText("new")
    //
    //
    // })

    it.only('Verify the user created and role - new', async () => {
        userId = (await userLogin('shop34@gmail.com', '111111')).user._id;
        userToken = (await userLogin('shop34@gmail.com', '111111')).token;
        userRole = (await userLogin('shop34@gmail.com', '111111')).user.roles[0]; // как получить оба  и id, и role за 1 логин

        // LoginPage.login('shop34@gmail.com', '111111');
        // expect(ProfilePage.role).toHaveText(userRole)

        console.log("44444444444444444444444444444444444444444444444444444444444444444444444444")
        console.log(userId)
        console.log(userToken)
        console.log(userRole)
        console.log("44444444444444444444444444444444444444444444444444444444444444444444444444")

    })

    it('Get User Id', async () => {
        userId = (await userLogin('shop34@gmail.com', '111111')).user._id;
    })

    it('Confirm Email', async () => {

    })

    it('Verify that role - learner', () => {

    })

    it('Buy course', () => {
        // MenuPage.menuShop.click();

    })

    it('Verify - course is available', async () => {

    })


    it('Verify role - student',  () => {

    })

    it('Delete user', async () => {

    })

})