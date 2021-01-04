import LoginPage from "../pageobjects/login.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import SettingsEmailPage from "../pageobjects/settings/settingsEmail.page"
import MenuPage from "../pageobjects/menu.page"
import MainMenu from "../pageobjects/menu.page";


describe('TS: SETTINGS PASSWORD', () => {

    const inpData = {
        oldEmail: "test2@account.com",
        newEmail: "test3@account.com",
        confirmNew: "test3@account.com",
        password: "111111"
    }

    before(() => {
        browser.maximizeWindow();
        LoginPage.login(inpData.oldEmail, inpData.password);
    })

    xit('TC: Verify that the Email Update functionality works correctly', () => { // не получается т.к. невозможно подтвердить новый email (в результате входит под старым)
        MenuPage.goToSettingsEmail();                                                    // ?? как тестировать в таких случаях (когда возможнсоть отправки писем заблокирована)

        SettingsEmailPage.inputFieldOldEmail.setValue(inpData.oldEmail);
        SettingsEmailPage.inputFieldNewEmail.setValue(inpData.newEmail);
        SettingsEmailPage.inputFieldConfirm.setValue(inpData.confirmNew);
        SettingsEmailPage.updateEmailBtn.waitForClickable();
        SettingsEmailPage.updateEmailBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(inpNewEmail, 111111);

        expect(MainMenu.topMenu).toBeExisting();
    })

})