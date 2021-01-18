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

}

export default new RegisterStep1Page();
