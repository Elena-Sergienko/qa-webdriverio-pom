import LoginPage from "../../pageobjects/login.page";
import SettingsProfilePage from "../../pageobjects/settings/settingsProfile.page"
import SettingsShippingPage from "../../pageobjects/settings/settingsShipping.page"
import MenuPage from "../../pageobjects/menu.page";


describe('TS: SETTINGS SHIPPING ADDRESS', () => {
    before(() => {
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
    })
    beforeEach(() => {
        MenuPage.goToSettingsShipping();
    })

    const inpData = {
        fullName: "Anna Ivanova",
        streetAddress: "5420 NE 28 Street, Apt. 298z",
        city: "Redmond",
        country: {
            poland: "Poland",
            russia: "Russia"
        },
        postalCode: "981067",
        contactPhone: "1234567890"
    }

    const expData = {
        fullName: "Anna Ivanova",
        streetAddress: "5420 NE 28 Street, Apt. 298z",
        city: "Redmond",
        country: {
            poland: "Poland",
            russia: "Russia"
        },
        stateProvince: "",
        postalCode: "981067",
        contactPhone: "1234567890",
        errorMessage1: "Phone number must be min: 9 and max: 10 numbers.",
        errorMessage2: "Phone number must be min: 10 and max: 11 numbers."
    }


    it('TC: Verify that the input field [Full Name] accepts text (updated full name) and after clicking Save Btn, the name is saved', () => {
        SettingsShippingPage.edit(SettingsShippingPage.inputFieldFullName, inpData.fullName);
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.inputFieldFullName).toHaveValue(expData.fullName);
    })

    it('TC: Verify that the user can select the country (updated country) and after clicking Save Btn, the country is saved', () => {
        let selectedCountry = SettingsShippingPage.dropDownCountry.getText();
        let newCountry;
        let expNewCountry;
        if (selectedCountry === inpData.country.poland) {
            newCountry = inpData.country.russia;
            expNewCountry = expData.country.russia;
        } else {
            newCountry = inpData.country.poland;
            expNewCountry = expData.country.poland;
        }

        SettingsProfilePage.scrollDownCountry(SettingsShippingPage.dropDownCountry, newCountry)
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.dropDownCountry).toHaveText(expNewCountry);
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
        browser.keys(['ArrowDown'.repeat(3), 'Enter']);
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

    it.skip('TC: Verify that the input field [Contact Phone] accepts text (updated Contact Phone) and after clicking Save Btn, the Contact Phone is saved', () => {
        SettingsShippingPage.edit(SettingsShippingPage.inputFieldContactPhone, inpData.contactPhone); // баг - если страна Россия, то в телефонном номере не сохраняются 7
        SettingsShippingPage.saveAddressBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsShipping();

        expect(SettingsShippingPage.inputFieldContactPhone).toHaveValue(expData.contactPhone);
    })

    it('TC: Verify that the error message appears if the phone number user entered does not match the required length of characters', () => {
        SettingsShippingPage.edit(SettingsShippingPage.inputFieldContactPhone, inpData.contactPhone + inpData.contactPhone);
        SettingsShippingPage.errorMessage.waitForDisplayed();
        if(SettingsShippingPage.prefixPhone.getText().length === 2){
        expect(SettingsShippingPage.errorMessage).toHaveText(expData.errorMessage2);
        } else {
        expect(SettingsShippingPage.errorMessage).toHaveText(expData.errorMessage1);
        }

    })
})