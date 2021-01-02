import LoginPage from "../pageobjects/login.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import MenuPage from "../pageobjects/menu.page"
import DiaryPage from "../pageobjects/modules/diary/diary.page"
import ProfilePage from "../pageobjects/profile.page";


describe('Diary', () => {

    const report = "Day report 2. Day report 2. Day report 2";

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
        browser.keys(['ArrowDown', "ArrowDown", "ArrowDown", 'Enter']); // 'ArrowDown'.replace(4) не работает почему-то
        DiaryPage.inputFieldDescription.setValue(report);
        DiaryPage.createBtn.scrollIntoView();
        DiaryPage.createBtn.click();

        DiaryPage.notificationDiaryCreated.waitForExist();
        expect(DiaryPage.notificationDiaryCreated.getText()).toEqual("Diary created");

        MenuPage.goToProfile();
        const userName = ProfilePage.userName.getText();
        expect(ProfilePage.lastDailyReport.getText()).toEqual(report);

        MenuPage.menuDiary.click();
        DiaryPage.inputFieldSelectStudentName.setValue(userName);
        expect(DiaryPage.lastDayReport).toHaveTextContaining(report);


    })


})