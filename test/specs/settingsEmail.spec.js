import LoginPage from "../pageobjects/login.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import SettingsEmailPage from "../pageobjects/settings/settingsEmail.page"
import MenuPage from "../pageobjects/menu.page"
import MainMenu from "../pageobjects/menu.page";


describe('Settings Password', () => {

    const inpOldEmail = "test2@account.com";
    const inpNewEmail = "test3@account.com";
    const inpConfirmNew = "test3@account.com";

    before(() => {
        browser.maximizeWindow();
        LoginPage.login(inpOldEmail, 111111);
    })

    xit('Edit Google Doc resume link', () => { // не получается т.к. невозможно подтвердить новый email (в результате входит под старым)
        MenuPage.goToSettingsEmail();                 // ?? как тестировать в таких случаях (когда возможнсоть отправки писем заблокирована)

        SettingsEmailPage.inputFieldOldEmail.setValue(inpOldEmail);
        SettingsEmailPage.inputFieldNewEmail.setValue(inpNewEmail);
        SettingsEmailPage.inputFieldConfirm.setValue(inpConfirmNew);
        SettingsEmailPage.updateEmailBtn.waitForClickable();
        SettingsEmailPage.updateEmailBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(inpNewEmail, 111111);

        expect(MainMenu.topMenu).toBeExisting();
    })

})