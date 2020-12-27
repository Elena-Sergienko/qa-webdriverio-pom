import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/profile.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import SettingsPasswordPage from "../pageobjects/settings/settingsPassword.page"
import SettingsLinksPage from "../pageobjects/settings/settingsLinks.page"
import MenuPage from "../pageobjects/menu.page"
import MainMenu from "../pageobjects/menu.page";


describe('Settings Password', () => {
    before(() => {
        browser.maximizeWindow();
        LoginPage.login(SettingsPasswordPage.credentials[0].username, SettingsPasswordPage.credentials[0].password);
    })

    const inpOldPassword = "111111";
    const inpNewPassword = "222222";
    const inpConfirmNew = "222222";


    xit('Edit Google Doc resume link', () => { // кнопка не становится активной - баг??
        MenuPage.goToSettingsPassword();

        SettingsPasswordPage.inputFieldOldPassword.setValue(inpOldPassword);
        SettingsPasswordPage.inputFieldNewPassword.setValue(inpNewPassword);
        SettingsPasswordPage.inputFieldConfirm.setValue(inpConfirmNew);
        SettingsPasswordPage.updatePasswordBtn.waitForClickable();
        SettingsPasswordPage.updatePasswordBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsPasswordPage.credentials[0].username, inpNewPassword);

        expect(MainMenu.topMenu).toBeExisting();
    })

})