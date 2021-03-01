import LoginPage from "../../pageobjects/login.page";
import SettingsPasswordPage from "../../pageobjects/settings/settingsPassword.page"
import MenuPage from "../../pageobjects/menu.page"
import MainMenu from "../../pageobjects/menu.page";


describe('TS: SETTINGS PASSWORD', () => {


    const inpData = {
        oldPassword: "111111",
        newPassword: "test222222",
        confirmNew: "test222222",
        email: "test@account.com",
    }

    const expData = {
        alertText: "New passwords do not match.",
        errorText: "User settings update password. Fail"
    }


    before(() => {
        LoginPage.login(inpData.email, inpData.oldPassword);
    })

    beforeEach(() => {
        MenuPage.goToSettingsPassword();
    })

    it('Verify that it is possible to update the password', () => {
        SettingsPasswordPage.inputFieldOldPassword.setValue(inpData.oldPassword);
        SettingsPasswordPage.inputFieldNewPassword.setValue(inpData.newPassword);
        SettingsPasswordPage.inputFieldConfirm.setValue(inpData.confirmNew);
        SettingsPasswordPage.updatePasswordBtn.waitForClickable();
        SettingsPasswordPage.updatePasswordBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(inpData.email, inpData.newPassword);

        expect(MainMenu.topMenu).toBeExisting();
    })

    it('TC: Verify that Error handling works correctly', () => {
        SettingsPasswordPage.inputFieldOldPassword.setValue(inpData.newPassword);
        SettingsPasswordPage.inputFieldNewPassword.setValue(inpData.oldPassword);
        SettingsPasswordPage.inputFieldConfirm.setValue(inpData.newPassword);

        expect(SettingsPasswordPage.alertPasswordDoNotMatch).toHaveText(expData.alertText);

        SettingsPasswordPage.updatePasswordBtn.click();
        expect(SettingsPasswordPage.errorMessage).toHaveText(expData.errorText);
    })

    after(() => {
        browser.refresh()
        MenuPage.goToSettingsPassword();

        SettingsPasswordPage.inputFieldOldPassword.setValue(inpData.newPassword);
        SettingsPasswordPage.inputFieldNewPassword.setValue(inpData.oldPassword);
        SettingsPasswordPage.inputFieldConfirm.setValue(inpData.oldPassword);
        SettingsPasswordPage.updatePasswordBtn.waitForClickable();
        SettingsPasswordPage.updatePasswordBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(inpData.email, inpData.oldPassword);

        expect(MainMenu.topMenu).toBeExisting();
    })
})
