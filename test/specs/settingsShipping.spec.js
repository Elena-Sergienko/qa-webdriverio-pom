import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/profile.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import SettingsShippingPage from "../pageobjects/settings/settingsShipping.page"
import MenuPage from "../pageobjects/menu.page";
import AdminUsersPage from "../pageobjects/adminUsers.page";


describe('Settings Profile', () => {
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

    const inpFullName = "Anna Ivanova";
    const expFullName = "Anna Ivanova";

    const inpStreetAddress = "5420 NE 28 Street, Apt. 298z";
    const expStreetAddress = "5420 NE 28 Street, Apt. 298z";

    const inpCity = "Redmond";
    const expCity = "Redmond";

    const inpState = "CA";
    const expState = "CA";

    const inpPostalCode = "981067";
    const expPostalCode = "981067";

    const inpContactPhone = "2223333333";
    const expContactPhone = "2223333333";

    const expErrorMessage = "Phone number must be min: 10 and max: 11 numbers.";


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

})