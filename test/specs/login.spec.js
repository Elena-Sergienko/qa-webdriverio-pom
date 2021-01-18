import LoginPage from '../pageobjects/login.page';
import MainMenu from '../pageobjects/menu.page';
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page";

describe('TS: LOGIN', () => {

    const inpData = {
        short: "123",
        nonExistent: "example@example.com",
        correctPassword: "111111"
    }

    const alert = {
        required: "Required",
        notValid: "'email' is not a valid email",
        authFailed: "Auth failed"
    }


    beforeEach(() => {
        LoginPage.openLoginPage();
        browser.maximizeWindow();
    })


    for (const role of SettingsProfilePage.credentials) {
        it('TC: Should login with valid credentials', () => {
            LoginPage.login(role.username, role.password);
            expect(MainMenu.topMenu).toBeExisting();
        });
    }

    it('TC: Submit button should be disabled if input fields are empty', () => {
        expect(LoginPage.btnSubmit).not.toBeClickable();
    })

    it('TC: Authorization fails if wrong credentials provided', () => {
        LoginPage.setUsername(inpData.nonExistent);
        LoginPage.setPassword(inpData.correctPassword);
        LoginPage.clickSubmit();
        LoginPage.notification.waitForExist();
        expect(LoginPage.notification).toHaveText(alert.authFailed);
    });

    it('TC: Email format validation', () => {
        LoginPage.setUsername(inpData.short);
        expect(LoginPage.usernameValidation).toHaveText(alert.notValid);
    })

    it('TC: Email required validation', () => {
        LoginPage.setUsername(inpData.short);
        LoginPage.clearUsername();
        expect(LoginPage.usernameValidation).toHaveText(alert.required);
    })

});


