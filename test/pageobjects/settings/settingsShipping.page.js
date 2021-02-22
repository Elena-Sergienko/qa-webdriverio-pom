import Page from '../page';

class SettingsShippingPage extends Page {

    get inputFieldFullName() {
        return $("//input[@id='fullName']");
    }

    get dropDownCountry() {
        return $("//span[@class='ant-select-selection-item']");
    }

    get selectBelarus() {
        return $("//div[@title='Belarus']/div[.='Belarus']");
    }

    get selectPoland() {
        return $("//div[@title='Poland']/div[.='Poland']");
    }

    get inputFieldStreet() {
        return $("//input[@id='address']");
    }

    get inputFieldCity() {
        return $("//input[@id='city']");
    }

    get dropDownState() {
        return $("//input[@id='state']/../following-sibling::span");
    }

    get selectMinsk() {
        return $("//div[@title='Minsk']/div[.='Minsk']");
    }

    get inputFieldPostalCode() {
        return $("//input[@id='zipCode']");
    }

    get inputFieldContactPhone() {
        return $("//input[@id='contactPhone']");
    }

    get prefixPhone(){
        return $("//span[@class='ant-input-prefix']");
    }

    get errorMessage() {
        return $("//div[@role='alert']");
    }

    get saveAddressBtn() {
        return $("//button[@class='ant-btn ant-btn-primary']");
    }


}

export default new SettingsShippingPage();