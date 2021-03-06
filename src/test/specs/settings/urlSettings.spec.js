import LoginPage from "../../pageobjects/login.page";
import SettingsProfilePage from "../../pageobjects/settings/settingsProfile.page"
import SettingsEmailPage from "../../pageobjects/settings/settingsEmail.page"
import SettingsPasswordPage from "../../pageobjects/settings/settingsPassword.page"
import SettingsLinksPage from "../../pageobjects/settings/settingsLinks.page"
import SettingsShippingPage from "../../pageobjects/settings/settingsShipping.page"
import MenuPage from "../../pageobjects/menu.page";
import { getUserId } from "../../../utils/getUserData";


describe('URL Settings', () => {
    let urlUI;

    describe('Admin user', () => {
        let adminId;

        before(() => {
            LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
            MenuPage.goToSettingsProfile();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Profile Settings page (Admin)', async () => {
            adminId = await getUserId(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(adminId, "profile"));
        })

        it("Go to Password tab", () => {
            SettingsProfilePage.linkPassword.click();
            expect(SettingsPasswordPage.inputFieldOldPassword).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Password Settings page (Admin)', () => {
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(adminId, "password"));
        })

        it("Go to Email Tab", () => {
            SettingsProfilePage.linkEmail.click();
            expect(SettingsEmailPage.inputFieldOldEmail).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Email Settings page (Admin)', () => {
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(adminId, "email"));
        })

        it("Go to Links Tab", () => {
            SettingsProfilePage.linkLinks.click();
            expect(SettingsLinksPage.inputFieldGDResumeLink).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Links Settings page (Admin)', () => {
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(adminId, "links"));
        })

        it("Go to Shipping Tab", () => {
            SettingsProfilePage.linkShippingAddress.click();
            expect(SettingsShippingPage.inputFieldFullName).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Shipping Settings page (Admin)', () => {
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(adminId, "delivery"));
        })

        after(() => {
            MenuPage.goToLogout();
        })
    })

    describe('New user', () => {
        let newId;

        before(() => {
            LoginPage.login(SettingsProfilePage.credentials[1].username, SettingsProfilePage.credentials[1].password);

            // SettingsProfilePage.notification.waitForDisplayed();    // убрать когда починят ошибку
            // SettingsProfilePage.closeErrorMessage.click();          // убрать когда починят ошибку
            // MenuPage.profileDropdown.waitForDisplayed();            // убрать когда починят ошибку

            MenuPage.goToSettingsProfile();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Profile Settings page (New)', async () => {
            newId = await getUserId(SettingsProfilePage.credentials[1].username, SettingsProfilePage.credentials[1].password);
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(newId, "profile"));
        })

        it("Go to Password tab", () => {
            SettingsProfilePage.linkPassword.click();
            expect(SettingsPasswordPage.inputFieldOldPassword).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Password Settings page (New)', () => {
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(newId, "password"));
        })

        it("Go to Email Tab", () => {
            SettingsProfilePage.linkEmail.click();
            expect(SettingsEmailPage.inputFieldOldEmail).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Email Settings page (New)', () => {
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(newId, "email"));
        })

        it("Go to Links Tab", () => {
            SettingsProfilePage.linkLinks.click();
            expect(SettingsLinksPage.inputFieldGDResumeLink).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Links Settings page (New)', () => {
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(newId, "links"));
        })

        it("Go to Shipping Tab", () => {
            SettingsProfilePage.linkShippingAddress.click();
            expect(SettingsShippingPage.inputFieldFullName).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Shipping Settings page (New)', () => {
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(newId, "delivery"));
        })
    })

})