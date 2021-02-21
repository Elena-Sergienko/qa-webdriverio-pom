import Page from '../page';

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

        let valueOfCountry; // в этой переменной будет записываться значение атрибута title каждого селектора (согласно той стране, на которую наведена стрелка)
        let arr = [];       // для наглядности создаю массив всех значений, которые пробегает стрелка до того как найдет нужную нам страну

        let iteration = true; // данная переменная для цикла 'do while' - пока true - итерации осуществляются, false - прекращается цикл
        do {
            browser.keys(['ArrowUp']);
            // this.activeCountry.waitForExist(); // если нужно, ждем пока динамический селектор появится
            valueOfCountry = this.activeCountry.getAttribute("title"); // отслеживание по атрибуту именно активного селектора, (а активным селектор становиться только когда на него наводят стрелкой


            console.log("--------------------------debug mode-------------------------")
            arr.push(valueOfCountry); // каждую страну, которую проходим, пушим в массив, чтобы видеть в консоли весь массив предыдущих значений и последнее в массиве должно быть наше(text)
            console.log(valueOfCountry)
            console.log(arr)
            console.log(`Our country: ${arr[arr.length - 1]}`)
            console.log("-------------------------------------------------------------")


            if (valueOfCountry === text) {
                browser.keys(['Enter']);  // если находит нашу страну (text), то нажимается Enter - чтобы выбрать именно ее
                iteration = false              // останавливаем цикл
            }
        } while (iteration);
    }

}

export default new SettingsProfilePage();