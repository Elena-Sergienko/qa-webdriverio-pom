import Page from './page';

class ProfilePage extends Page {

    get topMenu() {
        return $("//div[@id ='top-menu']")
    }

    get menuCourses() {
        return $("//div[@data-qa='topmenu-Courses']");
    }

    get menuCards() {
        return $("//div[@data-qa='topmenu-Cards']");
    }

    get menuDiary() {
        return $("//div[@data-qa='topmenu-Diary']");
    }

    get menuGroups() {
        return $("//div[@data-qa='topmenu-Groups']");
    }

    get menuChallenges() {
        return $("//div[@data-qa='topmenu-Challenges']");
    }

    get menuShop() {
        return $("//div[@data-qa='topmenu-Shop']");
    }

    get menuChat() {
        return $("//div[@data-qa='topmenu-Chat']");
    }

    get menuGoal() {
        return $("//div[@data-qa='topmenu-Goals']");
    }

    get menuAdmin() {
        return $("//div[@id='top-menu']/a[@class='ant-dropdown-trigger ant-dropdown-link']");
    }

    get profileDropdown() {
        return $("//span[@class='anticon anticon-down']");
    }

    get selectProfile() {
        return $("//li[@data-qa='profile']");
    }

    get selectSettings() {
        return $("//li[@data-qa='settings']");
    }

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




}

export default new ProfilePage();
