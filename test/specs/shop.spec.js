import LoginPage from "../pageobjects/login.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import SettingsShippingPage from "../pageobjects/settings/settingsShipping.page"
import MenuPage from "../pageobjects/menu.page";


describe('TS: SETTINGS SHIPPING ADDRESS', () => {

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

    before(() => {
        browser.maximizeWindow();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
    })
    beforeEach(() => {
        MenuPage.menuShop.click();
    })

    it('', () => {

    })


})