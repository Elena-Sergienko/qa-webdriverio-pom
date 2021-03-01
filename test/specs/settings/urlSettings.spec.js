import LoginPage from "../../pageobjects/login.page";
import SettingsProfilePage from "../../pageobjects/settings/settingsProfile.page"
import SettingsEmailPage from "../../pageobjects/settings/settingsEmail.page"
import SettingsPasswordPage from "../../pageobjects/settings/settingsPassword.page"
import SettingsLinksPage from "../../pageobjects/settings/settingsLinks.page"
import SettingsShippingPage from "../../pageobjects/settings/settingsShipping.page"
import MenuPage from "../../pageobjects/menu.page";
import userLogin from "../../../api/userLogin";
const axios = require('axios');


describe('URL Settings', () => {
    let urlUI;

    describe('Admin', () => {

        before(() => {
            browser.maximizeWindow();
            LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
            MenuPage.goToSettingsProfile();
            urlUI = browser.getUrl();
        })

        it('Adm URL profile', async () => {
            let id = (await userLogin("admin@gmail.com", "111111")).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "profile"));
        })

        it("Go to Password tab", () => {
            SettingsProfilePage.linkPassword.click();
            expect(SettingsPasswordPage.inputFieldOldPassword).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Adm URL password', async () => {
            let id = (await userLogin("admin@gmail.com", "111111")).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "password"));
        })

        it("Go to Email Tab", () => {
            SettingsProfilePage.linkEmail.click();
            expect(SettingsEmailPage.inputFieldOldEmail).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Adm URL email', async () => {
            let id = (await userLogin("admin@gmail.com", "111111")).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "email"));
        })

        it("Go to Links Tab", () => {
            SettingsProfilePage.linkLinks.click();
            expect(SettingsLinksPage.inputFieldGDResumeLink).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Adm URL Links', async () => {
            let id = (await userLogin("admin@gmail.com", "111111")).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "links"));
        })

        it("Go to Shipping Tab", () => {
            SettingsProfilePage.linkShippingAddress.click();
            expect(SettingsShippingPage.inputFieldFullName).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Adm URL Shipping', async () => {
            let id = (await userLogin("admin@gmail.com", "111111")).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "delivery"));
        })
    })

    describe('New', () => {

        before(() => {
            browser.maximizeWindow();
            LoginPage.login(SettingsProfilePage.credentials[1].username, SettingsProfilePage.credentials[1].password);
            MenuPage.goToSettingsProfile();
            urlUI = browser.getUrl();
        })

        it('Adm URL profile', async () => {
            let id = (await userLogin(SettingsProfilePage.credentials[1].username, SettingsProfilePage.credentials[1].password)).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "profile"));
        })

        it("Go to Password tab", () => {
            SettingsProfilePage.linkPassword.click();
            expect(SettingsPasswordPage.inputFieldOldPassword).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Adm URL password', async () => {
            let id = (await userLogin(SettingsProfilePage.credentials[1].username, SettingsProfilePage.credentials[1].password)).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "password"));
        })

        it("Go to Email Tab", () => {
            SettingsProfilePage.linkEmail.click();
            expect(SettingsEmailPage.inputFieldOldEmail).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Adm URL email', async () => {
            let id = (await userLogin(SettingsProfilePage.credentials[1].username, SettingsProfilePage.credentials[1].password)).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "email"));
        })

        it("Go to Links Tab", () => {
            SettingsProfilePage.linkLinks.click();
            expect(SettingsLinksPage.inputFieldGDResumeLink).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Adm URL Links', async () => {
            let id = (await userLogin(SettingsProfilePage.credentials[1].username, SettingsProfilePage.credentials[1].password)).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "links"));
        })

        it("Go to Shipping Tab", () => {
            SettingsProfilePage.linkShippingAddress.click();
            expect(SettingsShippingPage.inputFieldFullName).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Adm URL Shipping', async () => {
            let id = (await userLogin(SettingsProfilePage.credentials[1].username, SettingsProfilePage.credentials[1].password)).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "delivery"));
        })
    })

})