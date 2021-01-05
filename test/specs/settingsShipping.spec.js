import LoginPage from "../pageobjects/login.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import SettingsShippingPage from "../pageobjects/settings/settingsShipping.page"
import MenuPage from "../pageobjects/menu.page";


describe('TS: SETTINGS SHIPPING ADDRESS', () => {
    before(() => {
        browser.maximizeWindow();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
    })
    beforeEach(() => {
        MenuPage.goToSettingsShipping();
    })

    const inpData = {
        fullName: "Anna Ivanova",
        streetAddress: "5420 NE 28 Street, Apt. 298z",
        city: "Redmond",
        postalCode: "981067",
        contactPhone: "123456789"
    }

    const expData = {
        fullName: "Anna Ivanova",
        streetAddress: "5420 NE 28 Street, Apt. 298z",
        city: "Redmond",
        country: "Poland",
        stateProvince: "",
        postalCode: "981067",
        contactPhone: "123456789",
        errorMessage: "Phone number must be min: 9 and max: 10 numbers."
    }


    it('TC: Verify that the input field [Full Name] accepts text (updated full name) and after clicking Save Btn, the name is saved', () => {
        SettingsShippingPage.edit(SettingsShippingPage.inputFieldFullName, inpData.fullName);
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.inputFieldFullName).toHaveValue(expData.fullName);
    })

    it('TC: Verify that the input field [Country] accepts text (updated country) and after clicking Save Btn, the country is saved', () => {
        SettingsShippingPage.dropDownCountry.click();
        SettingsShippingPage.selectPoland.click();
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.dropDownCountry).toHaveText(expData.country);
    })

    it('TC: Verify that the input field [Street Address] accepts text (updated street address) and after clicking Save Btn, the street address is saved', () => {
        SettingsShippingPage.edit(SettingsShippingPage.inputFieldStreet, inpData.streetAddress);
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.inputFieldStreet).toHaveValue(expData.streetAddress);
    })

    it('TC: Verify that the input field [City] accepts text (updated city) and after clicking Save Btn, the city is saved', () => {
        SettingsShippingPage.edit(SettingsShippingPage.inputFieldCity, inpData.city);
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.inputFieldCity).toHaveValue(expData.city);
    })

    it('TC: Verify that the input field [State/Province] accepts text (updated State/Province) and after clicking Save Btn, the State/Province is saved', () => {
        SettingsShippingPage.dropDownState.click();
        browser.keys(['ArrowDown', "ArrowDown", "ArrowDown", 'Enter']);
        expData.stateProvince = SettingsShippingPage.dropDownState.getText();

        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.dropDownState).toHaveText(expData.stateProvince);
    })

    it('TC: Verify that the input field [Postal Code] accepts text (updated Postal Code) and after clicking Save Btn, the Postal Code is saved', () => {
        SettingsShippingPage.edit(SettingsShippingPage.inputFieldPostalCode, inpData.postalCode);
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.inputFieldPostalCode).toHaveValue(expData.postalCode);
    })

    it('TC: Verify that the input field [Contact Phone] accepts text (updated Contact Phone) and after clicking Save Btn, the Contact Phone is saved', () => {
        SettingsShippingPage.edit(SettingsShippingPage.inputFieldContactPhone, inpData.contactPhone);
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.inputFieldContactPhone).toHaveValue(expData.contactPhone);
    })

    it('TC: Verify that the error message appears if the phone number user entered does not match the required length of characters', () => {
        SettingsShippingPage.edit(SettingsShippingPage.inputFieldContactPhone, inpData.contactPhone + inpData.contactPhone);
        SettingsShippingPage.errorMessage.waitForDisplayed();
        expect(SettingsShippingPage.errorMessage).toHaveText(expData.errorMessage);
    })
})