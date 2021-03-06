import Page from '../page';

class SettingsLinksPage extends Page {

    get inputFieldGDResumeLink() {
        return $("//input[@id='resume']");
    }

    get inputFieldLinkedinLink() {
        return $("//input[@id='linkedIn']");
    }

    get inputFieldFacebookLink() {
        return $("//input[@id='facebook']");
    }

    get inputFieldGitHubLink() {
        return $("//input[@id='github']");
    }

    get inputFieldCodewarsLink() {
        return $("//input[@id='codewarsUsername']");
    }

    get saveBtn() {
        return $("//button");
    }

    get errorGoogle() {
        return $("//div[@class='ant-form-item-explain ant-form-item-explain-error']/div[.='The link has to refer to https://docs.google.com/document/']");
    }

    get errorLinkedin() {
        return $("//div[@class='ant-form-item-explain ant-form-item-explain-error']/div[.='The link has to refer to https://www.linkedin.com/in/']");
    }

    get errorFacebook() {
        return $("//div[@class='ant-form-item-explain ant-form-item-explain-error']/div[.='The link has to refer to https://www.facebook.com/']");
    }

    get errorGitHub() {
        return $("//div[@class='ant-form-item-explain ant-form-item-explain-error']/div[.='The link has to refer to https://github.com/']");
    }

    get errorCodewars() {
        return $("//div[@class='ant-form-item-explain ant-form-item-explain-error']/div[.='The link has to refer to https://www.codewars.com/users/']");
    }

}

export default new SettingsLinksPage();