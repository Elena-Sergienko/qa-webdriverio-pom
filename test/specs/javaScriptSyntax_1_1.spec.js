import LoginPage from "../pageobjects/login.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import MenuPage from "../pageobjects/menu.page"
import CoursesPage from "../pageobjects/modules/courses/courses.page"
import ContentsJSSPage from "../pageobjects/modules/courses/javaScriptSyntax/contentsJSS.page"
import Section_1_1Page from "../pageobjects/modules/courses/javaScriptSyntax/section_1_1.page"


describe('Java Script Syntax', () => {


    before(() => {
        browser.maximizeWindow();
        LoginPage.login(SettingsProfilePage.credentials[3].username, SettingsProfilePage.credentials[3].password);
    })

    it('Section 1. Lecture 1. Video is displayed', () => {
        MenuPage.menuCourses.click();
        CoursesPage.javaScriptSyntax.click();
        ContentsJSSPage.descriptionJSS.waitForDisplayed();

        if(ContentsJSSPage.alertStartCourse.isExisting()){
            ContentsJSSPage.startCourseBtn.waitForDisplayed();
            ContentsJSSPage.startCourseBtn.click();
            ContentsJSSPage.section_1_1.waitForDisplayed();
            ContentsJSSPage.section_1_1.click();
        } else {
            ContentsJSSPage.section_1_1.click();
        }

        expect(Section_1_1Page.playVideo).toBeExisting();
        expect(Section_1_1Page.playVideo).toBeClickable();
    })

    it('Section 1. Lecture 1. Quiz 1 is available', () => {
        MenuPage.menuCourses.click();
        CoursesPage.javaScriptSyntax.click();
        ContentsJSSPage.section_1_1.click();

        Section_1_1Page.quize_1.scrollIntoView();

        if (Section_1_1Page.quize_1_Status.getText() === "Opened") {
            Section_1_1Page.quize_1.click();
            Section_1_1Page.startQuizBtn.waitForDisplayed();
            Section_1_1Page.startQuizBtn.click();
        } else if (Section_1_1Page.quize_1_Status.getText() === "Just started"){
            Section_1_1Page.quize_1.click();

        }


        // browser.pause(3000)   // ?? как заменить эту паузу в данном случае
        //
        // if (Section_1_1Page.startQuizBtn.isDisplayed()) {
        //     Section_1_1Page.startQuizBtn.click();
        //
        // }

        expect(Section_1_1Page.quizeOpened).toBeDisplayed();
    })

})