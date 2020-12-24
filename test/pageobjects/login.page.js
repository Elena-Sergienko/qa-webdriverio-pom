import Page from './page';
import MenuPage from "./menu.page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#normal_login_email')
    }

    get inputPassword() {
        return $('#normal_login_password')
    }

    get btnSubmit() {
        return $('button[type="submit"]')
    }

    get errorAuthFailed() {
        return $("//div[@class='ant-notification-notice-message']")
    }

    get errorNotValidEmail() {
        return $("//div[@class='ant-form-item-explain ant-form-item-explain-error']")
    }

    get usernameValidation () {
        return $('//div[@class=\'ant-col ant-form-item-control\' and div//input[@id=\'normal_login_email\']]//div[@role=\'alert\']')
    }

    get passwordValidation() {
        return $("//div[@class='ant-col ant-form-item-control' and div//input[@id='normal_login_password']]//div[@role='alert']")
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    setUsername (username){
        this.inputUsername.setValue(username); // зачем прописывать из здесь, мы же можем прям в it написать setValue? не усложняет ли это
    }

    clearUsername(){
        this.clearInput(this.inputUsername);
    }

    setPassword(password){
        this.inputPassword.setValue(password);
    }

    clickSubmit() {
        this.btnSubmit.click();
    }

    login(username, password) {
        this.open();
        this.setUsername(username);
        this.setPassword(password);
        this.clickSubmit();
        MenuPage.topMenu.waitForExist(); //?? нормально ли подтягивать сюда с другой page

    }

    // inputEmailPassword(username, password) {
    //     this.inputUsername.setValue(username);
    //     this.inputPassword.setValue(password);
    // }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return browser.url('/user/login');
    }
}

export default new LoginPage();
