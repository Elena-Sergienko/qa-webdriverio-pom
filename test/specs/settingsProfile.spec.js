import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/profile.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import MenuPage from "../pageobjects/menu.page";
import AdminUsersPage from "../pageobjects/admin/adminUsers.page";
import MainMenu from "../pageobjects/menu.page";


describe('Settings Profile', () => {
    before(() => {
        browser.maximizeWindow();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
    })
    beforeEach(() => {
        MenuPage.goToSettingsProfile();
    })
    // beforeEach(() => {         // нужно ли перед каждым it обновлять или логин каждый раз или можно ничего из этого, просто переходить по вкладкам ?
    //     browser.refresh();
    // })

    const inpFirstName = "Elena";
    const expFirstName = "Elena";

    const inpLastName = "A";
    const expLastName = "A";

    const inpPhone = "11111111111";
    const expPhone = "11111111111";

    const inpAbout = "About me";
    const expAbout = "About me";

    const inpGoal = "My goal - QA engineer";
    const expGoal = "My goal - QA engineer";

    const expCountry = "Russia";
    const expEnglish = "Advanced";
    const expSize = "Women - XS";


    it('Edit First Name', () => {
        SettingsProfilePage.edit(SettingsProfilePage.inputFieldFirstName, inpFirstName);
        SettingsProfilePage.saveBtn.click();

        MenuPage.goToProfile();
        expect(ProfilePage.firstName()).toEqual(expFirstName);
    })

    it('Edit Last Name', () => {
        SettingsProfilePage.edit(SettingsProfilePage.inputFieldLastName, inpLastName);
        SettingsProfilePage.saveBtn.click();

        MenuPage.goToProfile();
        expect(ProfilePage.lastName()).toEqual(expLastName);
    })

    it('Edit Phone', () => {
        SettingsProfilePage.edit(SettingsProfilePage.inputFieldPhone, inpPhone);
        SettingsProfilePage.saveBtn.click();

        MenuPage.goToAdminUsers();
        AdminUsersPage.inputFieldEmail.setValue(SettingsProfilePage.credentials[0].username);
        browser.pause(4000) // как можно поставить паузу иначе в данном случае? waitUntil (что?)
        expect(AdminUsersPage.phone.getText()).toEqual(expPhone);

    })

    it('Edit About', () => {
        SettingsProfilePage.edit(SettingsProfilePage.inputFieldAbout, inpAbout);
        SettingsProfilePage.saveBtn.click();

        MenuPage.goToAdminUsers();
        AdminUsersPage.inputFieldEmail.setValue(SettingsProfilePage.credentials[0].username);
        browser.pause(4000) // как можно поставить паузу иначе в данном случае? waitUntil (что?)

        expect(AdminUsersPage.about.getText()).toEqual(expAbout);

        MenuPage.goToProfile();
        expect(ProfilePage.aboutSection.getText()).toEqual(expAbout);
    })

    it('Edit My goals', () => {
        SettingsProfilePage.edit(SettingsProfilePage.inputFieldMyGoals, inpGoal);
        SettingsProfilePage.saveBtn.click();

        MenuPage.goToAdminUsers();
        AdminUsersPage.inputFieldEmail.setValue(SettingsProfilePage.credentials[0].username);
        browser.pause(4000) // как можно поставить паузу иначе в данном случае? waitUntil (что?)

        expect(AdminUsersPage.goal.getText()).toEqual(expGoal);

        MenuPage.goToProfile();
        expect(ProfilePage.goalsSection.getText()).toEqual(expGoal);
    })

    xit('Edit Country', () => {
        SettingsProfilePage.inputFieldCountry.click();
        // SettingsProfilePage.countryAzerbaijan.scrollIntoView(); // scroll не работает в данной ситуации
        // SettingsProfilePage.countryAzerbaijan.click();

        SettingsProfilePage.countryRussia.click();

        SettingsProfilePage.saveBtn.click();

        MenuPage.goToAdminUsers();
        AdminUsersPage.inputFieldEmail.setValue(SettingsProfilePage.credentials[0].username);
        browser.pause(4000) //
        //
        // // AdminUsersPage.country.scroll();   // scroll не работает или как найти правильный селектор чтобы подтвердить выбранную страну

        browser.pause(5000)
        expect(AdminUsersPage.country.getText()).toEqual(expCountry);
    })

    it('Edit English level', () => {
        SettingsProfilePage.inputFieldEnglishLevel.click();
        SettingsProfilePage.englishAdvanced.click();                // как проверить этот тест? где отображается уровень английского
        SettingsProfilePage.saveBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsProfile();

        let newEnglishLevel = SettingsProfilePage.inputFieldEnglishLevel.getText();
        expect(newEnglishLevel).toEqual(expEnglish);
    })

    it('Edit T-Shirt size', () => {
        SettingsProfilePage.inputFieldTShirtSize.click();
        SettingsProfilePage.sizeWomenXS.click();
        SettingsProfilePage.saveBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsProfile();

        let newSize = SettingsProfilePage.inputFieldTShirtSize.getText();
        expect(newSize).toEqual(expSize);
    })

    it('Save btn', () => {
        SettingsProfilePage.saveBtn.waitForDisplayed();
        SettingsProfilePage.saveBtn.click();
        MenuPage.profileDropdown.click();
        MenuPage.selectProfile.click();
        let checkName = ProfilePage.userName.getText();
        expect(checkName).toEqual(expFirstName + ' ' + expLastName);
    })

})