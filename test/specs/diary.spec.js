import LoginPage from "../pageobjects/login.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import MenuPage from "../pageobjects/menu.page"
import CoursesPage from "../pageobjects/modules/courses/courses.page"
import ContentsJSSPage from "../pageobjects/modules/courses/javaScriptSyntax/contentsJSS.page"
import Jss_1_1Page from "../pageobjects/modules/courses/javaScriptSyntax/jss_1_1.page"


describe('Diary', () => {


    before(() => {
        browser.maximizeWindow();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
    })

    it('Create day report', () => {
        MenuPage.menuDiary.click();



    })


})