import Page from '../page';

class SettingsEmailPage extends Page {

    get inputFieldOldEmail() {
        return $("//input[@id='oldEmail']");
    }

    get inputFieldNewEmail() {
        return $("//input[@id='newEmail']");
    }

    get inputFieldConfirm() {
        return $("//input[@id='confirmEmail']");
    }

    get updateEmailBtn() {
        return $("//button");
    }


}

export default new SettingsEmailPage();