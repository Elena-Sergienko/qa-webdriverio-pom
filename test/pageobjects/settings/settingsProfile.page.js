import Page from '../page';
import {userLogin} from "../../../api/userLogin";

class SettingsProfilePage extends Page {

    get inputFieldFirstName() {
        return $("//input[@id='editProfile_firstName']");
    }

    get inputFieldLastName() {
        return $("//input[@id='editProfile_lastName']");
    }

    get inputFieldPhone() {
        return $("//input[@id='editProfile_phone']");
    }

    get inputFieldAbout() {
        return $("//textarea[@id='editProfile_about']");
    }

    get inputFieldMyGoals() {
        return $("//textarea[@id='editProfile_goals']");
    }

    get inputFieldCountry() {
        return $("//div[@data-qa='countries']");
    }

    get closeErrorMessage() {
        return $("//a[@class='ant-notification-notice-close']");
    }

    // get selectCountry() {
    //     return $("//div[@data-qa='countries']/span[@class='ant-select-arrow']");  //по селектору не кликает
    // }

    get countryRussia() {
        return $("//div[@title='Russia']");
    }

    get countryAzerbaijan() {
        return $("//div[@title='Azerbaijan']");
    }

    get inputFieldEnglishLevel() {
        return $("//div[@data-qa='englishLevel']");
    }

    // get selectEnglishLevel() {
    //     return $("//div[@data-qa='englishLevel']/span[@class='ant-select-arrow']");
    // }                                                                                //по селектору не кликает

    get englishAdvanced() {
        return $("//div[@title='Advanced']");
    }

    get inputFieldTShirtSize() {
        return $("//div[@data-qa='tShirtSize']");
    }

    // get selectTShirtSize() {
    //     return $("//div[@data-qa='tShirtSize']/span[@class='ant-select-arrow']");  //по селектору не кликает
    // }

    get sizeWomenL() {                      // не выбирает из списка, т.к. находится в нижней его части
        return $("//div[@title='Women - L']");
    }

    get sizeWomenXS() {
        return $("//div[@title='Women - XS']");
    }

    get saveBtn() {
        return $("//button[@type='submit']");
    }

    get linkPassword() {
        return $("//li[@data-qa='password']");
    }

    get linkEmail() {
        return $("//li[@data-qa='email']");
    }

    get linkLinks() {
        return $("//li[@data-qa='links']");
    }

    get linkShippingAddress() {
        return $("//li[@data-qa='shippingAddress']");
    }

    get linkDeactivateAccount() {
        return $("//li[@data-qa='deactivateAccount']");
    }

    get activeCountry() {
        return $("//div[@class='ant-select-item ant-select-item-option ant-select-item-option-active']") // селектор (динамический) который появляется когда на страну навели стрелкой
    }

    get selectedCountry() {
        return $("//div[@class='ant-select-item ant-select-item-option ant-select-item-option-active ant-select-item-option-selected']") // селектор выбранной страны
    }

    scrollDownCountry(elem, text) {
        elem.click();
        let valueOfCountry;
        let iteration = true;
        do {
            browser.keys(['ArrowUp']);
            valueOfCountry = this.activeCountry.getAttribute("title");
            if (valueOfCountry === text) {
                browser.keys(['Enter']);
                iteration = false
            }
        } while (iteration);
    }

    urlConstructor(id, tab){
        const urlSettings = "https://stage.localcoding.us/settings";
        return `${urlSettings}/${id}/${tab}`;
    }

}

export default new SettingsProfilePage();