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

    it('Create day report', () => {
        MenuPage.menuDiary.click();
        DiaryPage.createDayReportBtn.click();
        expect(DiaryPage.titleDrawer).toHaveText("Create day report");

        DiaryPage.marks["iUnderstood"].click();
        DiaryPage.marks["watchedLectures"].click();
        DiaryPage.marks["helpedClassmates"].click();
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

    it('Edit day report', () => {
        const userName = ProfilePage.getUserName();
        MenuPage.menuDiary.click();
        // DiaryPage.inputFieldSelectStudentName.setValue(userName); // не работает поиск по имени
        DiaryPage.inputFieldKeyword.setValue(report) // поэтому ищу по полю поиска по ключевым словам
        DiaryPage.verticalMenu.moveTo();
        DiaryPage.editDayReport.click();
        expect(DiaryPage.titleDrawer).toHaveText("Edit Diary");

        DiaryPage.marks.iNeedHelp.click();
        DiaryPage.marks["iUnderstood"].click();
        DiaryPage.marks["watchedLectures"].click();
        DiaryPage.marks["helpedClassmates"].click();
        DiaryPage.marks["readDocumentation"].click();
        DiaryPage.marks["codePractice"].click();

        DiaryPage.marks.quizPractice.click();
        DiaryPage.marks.interviewPreparation.click();
        DiaryPage.marks.recruiterPhoneCall.click();
        DiaryPage.marks.interviewScreen.click();
        DiaryPage.marks.interviewOnsite.click();
        DiaryPage.marks.gotJobOffer.click();


        DiaryPage.editInputFieldMorale.click();
        DiaryPage.morale8.click();

        DiaryPage.inputFieldHours.click();
        browser.keys(['ArrowDown', 'ArrowDown', 'Enter']); // 'ArrowDown'.replace() не работает почему-то
        const oldDescription = DiaryPage.inputFieldDescription.getText();
        DiaryPage.inputFieldDescription.setValue("Edited report: " + oldDescription);
        DiaryPage.updateBtn.scrollIntoView();
        DiaryPage.updateBtn.click();

        MenuPage.goToProfile();
        expect(ProfilePage.lastDailyReport.getText()).toEqual("Edited report: " + oldDescription);

        MenuPage.menuDiary.click();
        // DiaryPage.inputFieldSelectStudentName.setValue(userName); // не работает поиск по имени
        // expect(DiaryPage.lastDayReport).toHaveTextContaining("Edited report: " + report);

        DiaryPage.inputFieldKeyword.setValue("Edited report: " + oldDescription);
        expect(DiaryPage.lastDayReport).toHaveTextContaining("Edited report: " + oldDescription);

    })

    it('Delete day report', () => {
        browser.refresh();
        MenuPage.menuDiary.click();
        DiaryPage.inputFieldKeyword.setValue("Edited report: " + report)
        DiaryPage.verticalMenu.moveTo();
        DiaryPage.deleteDayReport.click();
        DiaryPage.modalConfirmDelete.waitForDisplayed();
        expect(DiaryPage.modalConfirmDelete).toHaveText("Do you want to delete diary?");
        expect(DiaryPage.modalConfirmDelContent).toHaveText(("Edited report: " + report).slice(0, 50));

        if (DiaryPage.modalConfirmDelContent.getText() === ("Edited report: " + report).slice(0, 50)) {
            DiaryPage.deleteOkBtn.click();
            DiaryPage.createDayReportBtn.waitForDisplayed();
            browser.refresh();
        }

        MenuPage.goToProfile();
        ProfilePage.dailyReportHeader.scrollIntoView();
        expect(ProfilePage.lastDailyReport).not.toHaveText("Edited report: " + report);

    })


})