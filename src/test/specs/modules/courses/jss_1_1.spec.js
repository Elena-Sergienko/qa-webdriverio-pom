import LoginPage from "../../../pageobjects/login.page";
import SettingsProfilePage from "../../../pageobjects/settings/settingsProfile.page"
import MenuPage from "../../../pageobjects/menu.page"
import CoursesPage from "../../../pageobjects/modules/courses/courses.page"
import ContentsJSSPage from "../../../pageobjects/modules/courses/javaScriptSyntax/contentsJSS.page"
import Jss_1_1Page from "../../../pageobjects/modules/courses/javaScriptSyntax/jss_1_1.page"


describe('Java Script Syntax', () => {


    before(() => {
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

        expect(Jss_1_1Page.playVideo).toBeExisting();
        expect(Jss_1_1Page.playVideo).toBeClickable();
    })

    it.skip('Section 1. Lecture 1. Quiz 1 is available', () => {
        MenuPage.menuCourses.click();
        CoursesPage.javaScriptSyntax.click();
        ContentsJSSPage.section_1_1.click();

        Jss_1_1Page.quize_1.scrollIntoView();

        if (Jss_1_1Page.quize_1_Status.getText() === "Opened") {
            Jss_1_1Page.quize_1.click();
            Jss_1_1Page.startQuizBtn.waitForDisplayed();
            Jss_1_1Page.startQuizBtn.click();
        } else if (Jss_1_1Page.quize_1_Status.getText() === "Just started"){
            Jss_1_1Page.quize_1.click();

        }

        expect(Jss_1_1Page.quizeOpened).toBeDisplayed();
    })
    it.only('Iframe', () => { // не получилось, обращение к элементам iframe, по видео  https://www.youtube.com/watch?v=QOG67ClNMHg

        MenuPage.menuCourses.click();
        CoursesPage.javaScriptSyntax.click();
        ContentsJSSPage.section_1_1.click();



        // driver.switchTo().defaultContent();
        // WebElement frameXpath = driver.findElement(By.xpath("//iframe[@title='frame report']"));
        // driver.switchTo().frame(frameXpath);


        // browser.switchToFrame(ContentsJSSPage.iframeId);
        // browser.switchToParentFrame()
        // browser.switchToFrame($('iframe[id="widget2"]'));
        browser.switchToFrame($('iframe'));
        browser.pause(10000);
        // ContentsJSSPage.buttonPlay.click();
        ContentsJSSPage.linkPlayCourseOnYouTube.click()
        browser.pause(4000)



    })

})