import Page from '../page';

class SettingsPasswordPage extends Page {

    get inputFieldOldPassword() {
        return $("//input[@id='oldPassword']");
    }

    get inputFieldNewPassword() {
        return $("//input[@id='newPassword']");
    }

    get inputFieldConfirm() {
        return $("//input[@id='confirmPassword']");
    }

    get updatePasswordBtn() {
        return $("//button");
    }

    get alertPasswordDoNotMatch() {
        return $("//div[@class='ant-alert-message']");
    }

    get errorMessage() {
        return $("//div[@class='ant-notification-notice-message']");
    }


}

export default new SettingsPasswordPage();