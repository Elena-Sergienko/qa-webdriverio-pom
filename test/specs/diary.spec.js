import LoginPage from "../pageobjects/login.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import MenuPage from "../pageobjects/menu.page"
import DiaryPage from "../pageobjects/modules/diary/diary.page"


describe('Diary', () => {

    const report = "Day report 1. Day report 1. Day report 1";

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
        DiaryPage.inputFieldHours.click();
        browser.keys(['ArrowDown', "ArrowDown", "ArrowDown", 'Enter']);
        DiaryPage.inputFieldDescription.setValue(report);
        DiaryPage.createBtn.scrollIntoView();
        DiaryPage.createBtn.click();

        DiaryPage.notificationDiaryCreated.waitForExist();
        expect(DiaryPage.notificationDiaryCreated.getText()).toEqual("Diary created");

    })


})