import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/profile.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import SettingsPasswordPage from "../pageobjects/settings/settingsPassword.page"
import SettingsLinksPage from "../pageobjects/settings/settingsLinks.page"
import MenuPage from "../pageobjects/menu.page"
import MainMenu from "../pageobjects/menu.page";


describe('Settings Password', () => {

    const inpOldPassword = "111111";
    const inpNewPassword = "test222222";
    const inpConfirmNew = "test222222";

    before(() => {
        browser.maximizeWindow();
        LoginPage.login("test@account.com", inpOldPassword);
    })

    xit('Edit Google Doc resume link', () => { // кнопка не становится активной - баг??
        MenuPage.goToSettingsPassword();

        SettingsPasswordPage.inputFieldOldPassword.setValue(inpOldPassword);
        SettingsPasswordPage.inputFieldNewPassword.setValue(inpNewPassword);
        SettingsPasswordPage.inputFieldConfirm.setValue(inpConfirmNew);
        SettingsPasswordPage.updatePasswordBtn.waitForClickable();
        SettingsPasswordPage.updatePasswordBtn.click();

        MenuPage.goToLogout();
        LoginPage.login("test@account.com", inpNewPassword);

        expect(MainMenu.topMenu).toBeExisting();
    })

})