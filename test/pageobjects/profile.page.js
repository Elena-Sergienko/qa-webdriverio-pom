import Page from './page';

class ProfilePage extends Page {

    get userName() {
        return $("//h1");
    }

    get iconGDResume() {
        return $("//a[@data-qa='resumeIcon']");
    }

    get iconFacebook() {
        return $("//a[@data-qa='facebookIcon']");
    }

    get iconLinkedin() {
        return $("//a[@data-qa='linkedInIcon']");
    }

    get iconGitHub() {
        return $("//a[@data-qa='githubIcon']");
    }

     get iconCodewars() {
        return $("//a[@data-qa='codewarsIcon']");
    }

    get aboutSection() {
        return $("//h3[.='About']/following-sibling::div");
    }

    get goalsSection() {
        return $("//h3[.='Goals']/following-sibling::div")
    }

    get lastDailyReport() {
        return $("//div[@class='ant-row mb-4'][1]")
    }

    firstName(){
        let names = this.userName.getText().split(" ");
        return names[0];
    }

    lastName(){
        let names = this.userName.getText().split(" ");
        return names[1];
    }




}

export default new ProfilePage();
