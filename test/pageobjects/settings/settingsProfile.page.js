import Page from '../page';
import LoginPage from '../login.page';

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

    // get selectCountry() {
    //     return $("//div[@data-qa='countries']/span[@class='ant-select-arrow']");  //по селектору не кликает
    // }

    get countryRussia() {
        return $("//div[@title='Russia']");
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

    get inputFieldTShirtSize(){
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

    edit(selectedIF, newName) {
        selectedIF.addValue("")
        selectedIF.keys(['Control', 'a']);
        selectedIF.keys(['Backspace']);
        selectedIF.addValue(newName)
    }

}

export default new SettingsProfilePage();