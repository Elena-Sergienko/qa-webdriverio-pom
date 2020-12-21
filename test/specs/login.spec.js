import LoginPage from '../pageobjects/login.page';
import val from '../data/values.json';
import ProfilePage from '../pageobjects/profile.page';

describe('My Login application', () => {
    beforeEach(() => {
        LoginPage.open();
        browser.maximizeWindow();
    })

    it('should login with valid credentials', () => {
        LoginPage.login(val.login.admin.email, val.login.admin.password);
        ProfilePage.topMenu.waitForExist();
        expect(ProfilePage.topMenu.isDisplayed()).toEqual(true);
    });

    xit('shouldn\'t login with invalid credentials (invalid password)', () => {
        LoginPage.login(val.login.negativePassword.email, val.login.negativePassword.password);
        LoginPage.errorAuthFailed.waitForDisplayed();
        expect(LoginPage.errorAuthFailed.isDisplayed()).toEqual(true);
    });

    xit('shouldn\'t login with invalid credentials (invalid email)', () => {
        LoginPage.login(val.login.negativeEmail.email, val.login.negativeEmail.password);
        LoginPage.errorNotValidEmail.waitForDisplayed();
        expect(LoginPage.errorNotValidEmail.isDisplayed()).toEqual(true);
    });


    let credentials = [
        {
            username: "admin@gmail.com",
            password: "111111"
        },
        {
            username: "new@gmail.com",
            password: "111111"
        },
        {
            username: "learner@gmail.com",
            password: "111111"
        },
        {
            username: "student@gmail.com",
            password: "111111"
        }
    ];

    for (const iteration of credentials) {
        it('should login with valid credentials', () => {
            LoginPage.login(iteration.username, iteration.password);
            expect(ProfilePage.topMenu).toBeExisting();
        });
    }

    it('submit button should be disabled if input fields are empty', () => {
        expect(LoginPage.btnSubmit).not.toBeClickable();
    })

    it('authorization fails if wrong credentials provided', () => { // ? падает когда 2 spec, когда only нет
        LoginPage.setUsername('example@example.com');
        LoginPage.setPassword('111111');
        LoginPage.clickSubmit();
        LoginPage.notification.waitForExist();
        expect(LoginPage.notification).toHaveText('Auth failed');
    });

    it('email format validation', () => {  // ? падает когда 2 spec, когда only нет
        LoginPage.setUsername('123');
        expect(LoginPage.usernameValidation).toHaveText(`'email' is not a valid email`);
    })

    it('email required validation', () => {
        LoginPage.setUsername('123');
        LoginPage.clearUsername();
        expect(LoginPage.usernameValidation).toHaveText('Required');
    })


});


