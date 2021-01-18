import Page from '../page';


class RegisterStep2Page extends Page {

    get header() {
        return $("//h5");
    }

    get inputFieldCountry() {
        return $("//input[@id='user_login_countryName']");
    }

    get inputFieldPhone() {
        return $("//input[@id='user_login_phone']");
    }

    get submitBtn() {
        return $("//button[@class='ant-btn ant-btn-primary ant-btn-lg']");
    }

    get skipBtn() {
        return $("//button[@class='ant-btn ant-btn-link ant-btn-lg text-right']");
    }


}

export default new RegisterStep2Page();