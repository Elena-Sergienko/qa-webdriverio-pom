import LoginPage from "../pageobjects/login.page";
import CoursesPage from "../pageobjects/modules/courses/courses.page";
import CardsPage from "../pageobjects/modules/cards/cards.page";
import DiaryPage from "../pageobjects/modules/diary/diary.page";
import GroupPage from "../pageobjects/modules/groups/groups.page";
import ChallengesPage from "../pageobjects/modules/challenges.page";
import ShopPage from "../pageobjects/modules/shop.page";
import ChatPage from "../pageobjects/modules/chat.page";
import GoalsPage from "../pageobjects/modules/goals.page";
import MenuPage from "../pageobjects/menu.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page";

describe('TS: MAIN MENU', () => {

    const expData = {
        urlCourses: "https://stage.localcoding.us/course",
        textCourses: "Courses",
        urlCards: "https://stage.localcoding.us/flash",
        textCards: "Interview practice cards",
        urlDiary: "https://stage.localcoding.us/diary",
        textDiary: "Daily reports",
        urlGroups: "https://stage.localcoding.us/group",
        textGroups: "Groups",
        urlChallenges: "https://stage.localcoding.us/challenge",
        textChallenges: "Challenges",
        urlShop: "https://stage.localcoding.us/shop",
        textShop: "Products",
        urlChat: "https://stage.localcoding.us/chat",
        urlGoals: "https://stage.localcoding.us/goal",
        textGoals: "Goals"
    }


    before(() => {
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
    })


    it('TC: Verify that clicking the link Courses redirects the user to the Courses page', () => {
        MenuPage.menuCourses.click();
        expect(browser).toHaveUrl(expData.urlCourses);
        expect(CoursesPage.header1).toHaveText(expData.textCourses);
    })

    it('TC: Verify that clicking the link Cards redirects the user to the Cards page', () => {
        MenuPage.menuCards.click();
        expect(browser).toHaveUrl(expData.urlCards);
        expect(CardsPage.header1).toHaveText(expData.textCards);
    })

    it('TC: Verify that clicking the link Diary redirects the user to the Diary page', () => {
        MenuPage.menuDiary.click();
        expect(browser).toHaveUrl(expData.urlDiary)
        expect(DiaryPage.header1).toHaveText(expData.textDiary);
    })

    it('TC: Verify that clicking the link Groups redirects the user to the Groups page', () => {
        MenuPage.menuGroups.click();
        expect(browser).toHaveUrl(expData.urlGroups);
        expect(GroupPage.header1).toHaveText(expData.textGroups);
    })

    it('TC: Verify that clicking the link Challenges redirects the user to the Challenges page', () => {
        MenuPage.menuChallenges.click();
        expect(browser).toHaveUrl(expData.urlChallenges);
        expect(ChallengesPage.header1).toHaveText(expData.textChallenges);
    })

    it('TC: Verify that clicking the link Shop redirects the user to the Shop page', () => {
        MenuPage.menuShop.click();
        expect(browser).toHaveUrl(expData.urlShop);
        expect(ShopPage.header1).toHaveText(expData.textShop);
    })

    it('TC: Verify that clicking the link Chat redirects the user to the Chat page', () => {
        MenuPage.menuChat.click();
        expect(browser).toHaveUrl(expData.urlChat);
        expect(ChatPage.chatMenu).toBeDisplayed();
    })

    it('TC: Verify that clicking the link Goals redirects the user to the Goals page', () => {
        MenuPage.menuGoal.click();
        expect(browser).toHaveUrl(expData.urlGoals);
        expect(GoalsPage.header1).toHaveText(expData.textGoals);
    })

    it('TC: Verify that after clicking on the Admin link, the Admin menu opens', () => {
        MenuPage.menuAdmin.click();
        MenuPage.adminDropdownMenu.waitForDisplayed();
        expect(MenuPage.adminDropdownMenu).toBeDisplayed();
    })

})