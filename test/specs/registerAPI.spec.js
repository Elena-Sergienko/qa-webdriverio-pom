import RegisterStep1Page from "../pageobjects/register/registerStep1.page";
import LoginPage from "../pageobjects/login.page";
import faker from 'faker';
import userSearchByEmail from "../../api/userSearchByEmail";
import userDeleteByEmail from "../../api/userDeleteByEmail";


describe('USER REGISTRATION', () => {

    let inpData = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email().replace(/[^a-z0-9.@]/g, ''),
        password: faker.internet.password(),
        phone: '11111111111'
    }
    let newUserEmail;

    before(() => {
        LoginPage.openLoginPage();
        LoginPage.createOneLink.click();
    });

    it('should register a new user', () => {
        RegisterStep1Page.createUser(inpData.firstName, inpData.lastName, inpData.email, inpData.password);
        expect(browser).toHaveUrl('https://stage.localcoding.us/user/register-step2');
    });

    it('should verify registration of the new user in DB', async () => {
        const response = await userSearchByEmail(inpData.email);
        newUserEmail = response.items[0].email;
        expect(newUserEmail).toEqual(inpData.email);
    });
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        console.log(inpData.email)
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

    it('should delete the new user', async () => {
        const response = await userDeleteByEmail(inpData.email);
        expect(response.success).toEqual(true);
    });
});