import LoginPage from "../../pageobjects/login.page";
import SettingsProfilePage from "../../pageobjects/settings/settingsProfile.page"
import SettingsEmailPage from "../../pageobjects/settings/settingsEmail.page"
import SettingsPasswordPage from "../../pageobjects/settings/settingsPassword.page"
import SettingsLinksPage from "../../pageobjects/settings/settingsLinks.page"
import SettingsShippingPage from "../../pageobjects/settings/settingsShipping.page"
import MenuPage from "../../pageobjects/menu.page";
import userLogin from "../../../api/userLogin";
import getUserId from "../../../utils/getId";


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
            adminId = await getUserId("admin@gmail.com", "111111");
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(adminId, "profile"));
        })

        it("Go to Password tab", () => {
            SettingsProfilePage.linkPassword.click();
            expect(SettingsPasswordPage.inputFieldOldPassword).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Password Settings page (Admin)', async () => {
            // let id = (await userLogin(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password)).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(adminId, "password"));
        })

        it("Go to Email Tab", () => {
            SettingsProfilePage.linkEmail.click();
            expect(SettingsEmailPage.inputFieldOldEmail).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Email Settings page (Admin)', async () => {
            let id = (await userLogin(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password)).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "email"));
        })

        it("Go to Links Tab", () => {
            SettingsProfilePage.linkLinks.click();
            expect(SettingsLinksPage.inputFieldGDResumeLink).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Links Settings page (Admin)', async () => {
            let id = (await userLogin(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password)).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "links"));
        })

        it("Go to Shipping Tab", () => {
            SettingsProfilePage.linkShippingAddress.click();
            expect(SettingsShippingPage.inputFieldFullName).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Shipping Settings page (Admin)', async () => {
            let id = (await userLogin(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password)).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "delivery"));
        })
    })

    describe('New user', () => {

        before(() => {
            LoginPage.login(SettingsProfilePage.credentials[1].username, SettingsProfilePage.credentials[1].password);

            SettingsProfilePage.notification.waitForDisplayed();    // убрать когда починят ошибку
            SettingsProfilePage.closeErrorMessage.click();          // убрать когда починят ошибку
            MenuPage.goToSettingsProfile();

            urlUI = browser.getUrl();
        })

        it('Verify the url for the Profile Settings page (New)', async () => {
            let id = (await userLogin(SettingsProfilePage.credentials[1].username, SettingsProfilePage.credentials[1].password)).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "profile"));
        })

        it("Go to Password tab", () => {
            SettingsProfilePage.linkPassword.click();
            expect(SettingsPasswordPage.inputFieldOldPassword).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Password Settings page (New)', async () => {
            let id = (await userLogin(SettingsProfilePage.credentials[1].username, SettingsProfilePage.credentials[1].password)).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "password"));
        })

        it("Go to Email Tab", () => {
            SettingsProfilePage.linkEmail.click();
            expect(SettingsEmailPage.inputFieldOldEmail).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Email Settings page (New)', async () => {
            let id = (await userLogin(SettingsProfilePage.credentials[1].username, SettingsProfilePage.credentials[1].password)).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "email"));
        })

        it("Go to Links Tab", () => {
            SettingsProfilePage.linkLinks.click();
            expect(SettingsLinksPage.inputFieldGDResumeLink).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Links Settings page (New)', async () => {
            let id = (await userLogin(SettingsProfilePage.credentials[1].username, SettingsProfilePage.credentials[1].password)).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "links"));
        })

        it("Go to Shipping Tab", () => {
            SettingsProfilePage.linkShippingAddress.click();
            expect(SettingsShippingPage.inputFieldFullName).toBeExisting();
            urlUI = browser.getUrl();
        })

        it('Verify the url for the Shipping Settings page (New)', async () => {
            let id = (await userLogin(SettingsProfilePage.credentials[1].username, SettingsProfilePage.credentials[1].password)).user._id;
            expect(urlUI).toEqual(SettingsProfilePage.urlConstructor(id, "delivery"));
        })
    })

})