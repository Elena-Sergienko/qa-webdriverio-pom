import Page from '../page';


class RegisterStep1Page extends Page {

    get header() {
        return $("//h1");
    }

    get inputFieldFirstName() {
        return $("//input[@id='user_login_firstName']");
    }

    get inputFieldLastName() {
        return $("//input[@id='user_login_lastName']");
    }

    get inputFieldEmail() {
        return $("//input[@id='user_login_email']");
    }

    get inputFieldPassword() {
        return $("//input[@id='user_login_password']");
    }

    get checkBoxIHaveRead() {
        return $("//input[@id='user_login_agreement']");
    }

    get registerBtn() {
        return $("//button[@class='ant-btn ant-btn-primary ant-btn-lg']");
    }

    get loginLink() {
        return $("//a[.='Log in']");
    }

    openRegister() {
        browser.url('/user/register');
    }

    setFirstName(firstName) {
        this.inputFieldFirstName.setValue(firstName);
    }

    setLastLast(lastName) {
        this.inputFieldLastName.setValue(lastName);
    }

    setEmail(email) {
        this.inputFieldEmail.setValue(email);
    }

    setPassword(password) {
        this.inputFieldPassword.setValue(password);
    }

    createUser(firstName, lastName, email, password){
        this.inputFieldFirstName.setValue(firstName);
        this.inputFieldLastName.setValue(lastName);
        this.inputFieldEmail.setValue(email);
        this.inputFieldPassword.setValue(password);
        this.checkBoxIHaveRead.click();
        this.registerBtn.click();
    }

}

export default new RegisterStep1Page();
