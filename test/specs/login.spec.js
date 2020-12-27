import LoginPage from '../pageobjects/login.page';
import MainMenu from '../pageobjects/menu.page';
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page";

describe('My Login application', () => {
    beforeEach(() => {
    browser.refresh();
        LoginPage.open();
        browser.maximizeWindow();
    })

    for (const iteration of SettingsProfilePage.credentials) {
        it('should login with valid credentials', () => {
            LoginPage.login(iteration.username, iteration.password);
            expect(MainMenu.topMenu).toBeExisting();
        });
    }

    it('submit button should be disabled if input fields are empty', () => {
        expect(LoginPage.btnSubmit).not.toBeClickable();
    })

    it('authorization fails if wrong credentials provided', () => { // ? падает когда 2-3 spec, когда 1 чаще нет
        LoginPage.setUsername('example@example.com');
        LoginPage.setPassword('111111');
        LoginPage.clickSubmit();
        LoginPage.notification.waitForExist();
        expect(LoginPage.notification).toHaveText('Auth failed');
    });

    it('email format validation', () => {  // ? падает когда 2-3 spec, когда 1 чаще нет
        LoginPage.setUsername('123');
        expect(LoginPage.usernameValidation).toHaveText(`'email' is not a valid email`);
    })

    it('email required validation', () => {
        LoginPage.setUsername('123');
        LoginPage.clearUsername();
        expect(LoginPage.usernameValidation).toHaveText('Required');
    })

});


