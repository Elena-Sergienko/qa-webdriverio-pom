import Page from './page';
import ProfilePage from "./profile.page";
import SettingsProfilePage from "./settings/settingsProfile.page";

class MenuPage extends Page {

    goToSettingsLinks(){
        ProfilePage.profileDropdown.click();
        ProfilePage.selectSettings.waitForDisplayed();
        ProfilePage.selectSettings.click();
        SettingsProfilePage.linkLinks.click();
    }

}

export default new MenuPage();
