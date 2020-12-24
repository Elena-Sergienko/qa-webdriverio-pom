import Page from './page';
import ProfilePage from "./profile.page";
import SettingsProfilePage from "./settings/settingsProfile.page";
import AdminUsersPage from "./adminUsers.page";

class MenuPage extends Page {

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

    get adminDropdownMenu() {
        return $("//div[@id='top-menu']/a");
    }

    get selectAdminUsers() {
        return $("//a[.='Users']");
    }

    goToProfile(){
        this.profileDropdown.click();
        this.selectProfile.waitForDisplayed();
        this.selectProfile.click();
    }

    goToSettingsProfile(){
        this.profileDropdown.click();
        this.selectSettings.waitForDisplayed();
        this.selectSettings.click();
    }

    goToSettingsLinks(){
        this.profileDropdown.click();
        this.selectSettings.waitForDisplayed();
        this.selectSettings.click();
        SettingsProfilePage.linkLinks.click();
    }

    goToAdminUsers(){
        this.adminDropdownMenu.click();
        this.selectAdminUsers.waitForDisplayed();
        this.selectAdminUsers.click();
        AdminUsersPage.inputFieldName.waitForDisplayed();
    }

}

export default new MenuPage();
