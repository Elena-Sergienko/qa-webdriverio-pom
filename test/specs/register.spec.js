import RegisterStep1Page from "../pageobjects/register/registerStep1.page";
import RegisterStep2Page from "../pageobjects/register/registerStep2.page";
import LoginPage from "../pageobjects/login.page";
import faker from 'faker';
import MenuPage from "../pageobjects/menu.page";
import AdminUsersPage from "../pageobjects/admin/adminUsers.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page";
import DeleteUserPage from "../pageobjects/admin/deleteUser.page";
import userSearchByEmail from "../../api/userSearchByEmail";
import userDeleteByEmail from "../../api/userDeleteByEmail";
const axios = require('axios');


describe('TS: REGISTER', () => {

    let inpData = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: '11111111111'
    }

    before(() => {
        LoginPage.openLoginPage();
        browser.maximizeWindow();
    })

    it('Register New user', () => {
        LoginPage.createOneLink.click();
        expect(RegisterStep1Page.header).toHaveText("Create an account")
        RegisterStep1Page.createUser(inpData.firstName, inpData.lastName, inpData.email, inpData.password)

        expect(browser).toHaveUrl('https://stage.localcoding.us/user/register-step2');

        // RegisterStep2Page.skipBtn.click(); // можно и пропустить 2 шаг
        RegisterStep2Page.inputFieldPhone.setValue('1111111111');
        RegisterStep2Page.submitBtn.click();

        MenuPage.goToLogout();
        LoginPage.openLoginPage();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);


        console.log("-----------------------------------------------------------");
        console.log(inpData.firstName + " " + inpData.lastName);
        console.log(inpData.email);
        console.log(inpData.password);
        console.log("------------------------------------------------------------");

        MenuPage.goToAdminUsers();

        if (AdminUsersPage.somethingWentWrongMessage.isDisplayed()) {
            AdminUsersPage.somethingWentWrongMessage.click();
        }

        AdminUsersPage.inputFieldEmail.setValue(inpData.email);

        expect(AdminUsersPage.lastUserInformation).toHaveTextContaining(inpData.lastName);
        expect(AdminUsersPage.role).toHaveText("new");
    })

    // it('Should verify that new user exist', async () => {
    //     const response = await userSearchByEmail(inpData.email);
    //     const newUserEmail = response.items[0].email;
    //     expect(newUserEmail).toEqual(inpData.email);
    // });

    // it('should delete the new user', async () => {
    //     const response = await userDeleteByEmail(inpData.email);
    //     expect(response.success).toEqual(true);
    // });
    //
    it('Delete new user', () => {
        AdminUsersPage.dropdownMenuLastUser.click();
        AdminUsersPage.deleteUser.click();
        // expect(DeleteUserPage.titleUserDelete).toHaveText("User Delete") //когда уберут баг - сообщение об ошибке в admin->users
        DeleteUserPage.deleteUserBtn.click();

        AdminUsersPage.inputFieldEmail.scrollIntoView();
        expect(AdminUsersPage.lastUserInformation).not.toBeDisplayed();
    })

})