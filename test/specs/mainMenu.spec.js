import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/profile.page";
import CoursesPage from "../pageobjects/courses.page";
import CardsPage from "../pageobjects/cards.page";
import DiaryPage from "../pageobjects/diary.page";
import GroupPage from "../pageobjects/groups.page";
import ChallengesPage from "../pageobjects/challenges.page";
import ShopPage from "../pageobjects/shop.page";
import ChatPage from "../pageobjects/chat.page";
import GoalsPage from "../pageobjects/goals.page";
import AdminPage from "../pageobjects/admin.page";

describe('Menu', () => {
    before(() => {
        browser.maximizeWindow();
        LoginPage.login("admin@gmail.com", "111111");
    })

    // beforeEach(() => {         // нужно ли перед каждым it обновлять или логин каждый раз или можно ничего из этого, просто переходить по вкладкам ?
    //     browser.refresh();
    // })

    it('Menu/courses', () => {
        ProfilePage.menuCourses.click();

        CoursesPage.header1.waitUntil(function () {
            return CoursesPage.header1.getText() === 'Courses'
        }, {
            timeout: 2000
        });

        expect(browser).toHaveUrl('https://stage.localcoding.us/course');
        expect(CoursesPage.header1.getText()).toEqual("Courses"); // Interactive Courses
    })

    it('Menu/cards', () => {
        ProfilePage.menuCards.click();
        expect(browser).toHaveUrl('https://stage.localcoding.us/flash');
        expect(CardsPage.header1.getText()).toEqual("Interview practice cards");
    })

    it('Menu/Diary', () => {
        ProfilePage.menuDiary.click();

        DiaryPage.header1.waitUntil(function () {
            return CoursesPage.header1.getText() === 'Daily reports'
        }, {
            timeout: 2000
        });

        expect(browser).toHaveUrl('https://stage.localcoding.us/diary')
        expect(DiaryPage.header1.getText()).toEqual("Daily reports"); // ? "Day Report Landing page"
    })

    it('Menu/Groups', () => {
        ProfilePage.menuGroups.click();
        expect(browser).toHaveUrl('https://stage.localcoding.us/group');
        expect(GroupPage.header1.getText()).toEqual("Groups");
    })

    it('Menu/Challenges', () => {
        ProfilePage.menuChallenges.click();
        expect(browser).toHaveUrl('https://stage.localcoding.us/challenge');
        expect(ChallengesPage.header1.getText()).toEqual("Challenges");
    })

    it('Menu/Shop', () => {
        ProfilePage.menuShop.click();
        expect(browser).toHaveUrl('https://stage.localcoding.us/shop');
        expect(ShopPage.header1.getText()).toEqual("Products");
    })

    it('Menu/Chat', () => {
        ProfilePage.menuChat.click();
        expect(browser).toHaveUrl('https://stage.localcoding.us/chat');
        expect(ChatPage.chatMenu.isDisplayed()).toEqual(true);
    })

    it('Menu/Goals', () => {
        ProfilePage.menuGoal.click();
        expect(browser).toHaveUrl('https://stage.localcoding.us/goal');
        expect(GoalsPage.header1.getText()).toEqual("Goals");
    })

    it('Menu/Admin', () => {
        ProfilePage.menuAdmin.click();
        AdminPage.dropdownMenu.waitForDisplayed();
        expect(AdminPage.dropdownMenu.isDisplayed()).toEqual(true);
    })
})