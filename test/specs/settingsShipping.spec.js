import LoginPage from "../pageobjects/login.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import SettingsShippingPage from "../pageobjects/settings/settingsShipping.page"
import MenuPage from "../pageobjects/menu.page";
import MainMenu from "../pageobjects/menu.page";


describe('Settings Shipping address', () => {
    before(() => {
        browser.maximizeWindow();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
    })
    beforeEach(() => {
        MenuPage.goToSettingsShipping();
    })
    // beforeEach(() => {         // нужно ли перед каждым it обновлять или логин каждый раз или можно ничего из этого, просто переходить по вкладкам ?
    //     browser.refresh();
    // })

    after(() => {
        MainMenu.goToLogout();
    })

    const inpFullName = "Anna Ivanova";
    const expFullName = "Anna Ivanova";

    const inpStreetAddress = "5420 NE 28 Street, Apt. 298z";
    const expStreetAddress = "5420 NE 28 Street, Apt. 298z";

    const inpCity = "Redmond";
    const expCity = "Redmond";

    const inpPostalCode = "981067";
    const expPostalCode = "981067";

    const inpContactPhone = "12345678";
    const expContactPhone = "12345678";

    const expErrorMessage = "Phone number must be min: 8 and max: 9 numbers.";


    it('Input and Save Full Name', () => {
        SettingsShippingPage.edit(SettingsShippingPage.inputFieldFullName, inpFullName);
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.inputFieldFullName.getValue()).toEqual(expFullName);
    })

    it('Select and save Country', () => {
        SettingsShippingPage.dropDownCountry.click();
        SettingsShippingPage.selectBelarus.click();
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.dropDownCountry.getText()).toEqual("Belarus");
    })

    it('Input and Save Street address', () => {
        SettingsShippingPage.edit(SettingsShippingPage.inputFieldStreet, inpStreetAddress);
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.inputFieldStreet.getValue()).toEqual(expStreetAddress);
    })

    it('Input and Save City', () => {
        SettingsShippingPage.edit(SettingsShippingPage.inputFieldCity, inpCity);
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.inputFieldCity.getValue()).toEqual(expCity);
    })

    xit('Select and save State/Province', () => {
        SettingsShippingPage.dropDownState.click(); // не получается выбрать селектор правильно
        browser.pause(3000)
        SettingsShippingPage.selectMinsk.click();
        browser.pause(3000)
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.dropDownState.getText()).toEqual("Minsk");
    })

    it('Input and Save Postal Code', () => {
        SettingsShippingPage.edit(SettingsShippingPage.inputFieldPostalCode, inpPostalCode);
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.inputFieldPostalCode.getValue()).toEqual(expPostalCode);
    })

    it('Input and Save Contact Phone', () => {
        SettingsShippingPage.edit(SettingsShippingPage.inputFieldContactPhone, inpContactPhone);
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.inputFieldContactPhone.getValue()).toEqual(expContactPhone);
    })

    it('Error message Contact Phone', () => {
        SettingsShippingPage.edit(SettingsShippingPage.inputFieldContactPhone, inpContactPhone + inpContactPhone);
        SettingsShippingPage.errorMessage.waitForDisplayed();
        expect(SettingsShippingPage.errorMessage.getText()).toEqual(expErrorMessage);
    })
})