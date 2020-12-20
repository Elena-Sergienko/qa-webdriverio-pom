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


}

export default new ProfilePage();
