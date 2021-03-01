import LoginPage from "../../pageobjects/login.page";
import ProfilePage from "../../pageobjects/profile.page";
import SettingsProfilePage from "../../pageobjects/settings/settingsProfile.page"
import MenuPage from "../../pageobjects/menu.page";
import AdminUsersPage from "../../pageobjects/admin/adminUsers.page";
import {userLogin} from "../../../api/userLogin";


const axios = require('axios');


describe('URL Settings', () => {
    let urlUI;

    before(() => {
        browser.maximizeWindow();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsProfile();
        urlUI = browser.getUrl();
    })

    // afterEach(() => {
    //     if (SettingsProfilePage.notification.isDisplayed()) {  // убрать когда починят ошибку на admin-users
    //         SettingsProfilePage.closeErrorMessage.click();
    //     }
    // })


    it.only('Adm URL', async () => {
        expect(urlUI).toEqual(SettingsProfilePage.urlConstructor("admin@gmail.com", "111111", "profile"));
    })

    // it.only('Adm URL', async () => {
    //     let result = await userLogin("admin@gmail.com", "111111");
    //     expect(urlUI).toEqual(`https://stage.localcoding.us/settings/${result.user._id}/profile`);
    // })

    // it.only('Adm URL', async () => {
    //     const result = await axios({
    //         method: 'post',
    //         url: 'https://server-stage.pasv.us/user/login',
    //         data: {
    //             email: "admin@gmail.com",
    //             password: "111111"
    //         }
    //     }).then(res => res.data.user._id)
    //         .catch(err => console.log(err.response.data))
    //
    //
    //     expect(urlUI).toEqual(`https://stage.localcoding.us/settings/${result}/profile`);
    //
    // })


})