import LoginPage from "../pageobjects/login.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import MenuPage from "../pageobjects/menu.page"
import DiaryPage from "../pageobjects/modules/diary/diary.page"


describe('Diary', () => {


    before(() => {
        browser.maximizeWindow();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
    })

    it.only('Create day report', () => {
        MenuPage.menuDiary.click();
        DiaryPage.createDayReportBtn.click();
        DiaryPage.marks["watchedLectures"].click();
        DiaryPage.marks["readDocumentation"].click();
        DiaryPage.marks["codePractice"].click();
        DiaryPage.inputFieldMorale.click();
        DiaryPage.morale9.click();
        browser.pause(6000)
        DiaryPage.inputFieldHours.click();
        DiaryPage.hours4.click();
        DiaryPage.inputFieldDescription.setValue("gggfgffggfggfgffggfgfgfgfgfgfgfgfgfgfg");
        DiaryPage.createBtn.click();

    })


})