import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/profile.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import MenuPage from "../pageobjects/menu.page";
import AdminUsersPage from "../pageobjects/admin/adminUsers.page";


describe('Settings Profile', () => {

    const inpData = {
        firstName: "Elena",
        lastName: "A",
        phone: "11111111111",
        about: "About me",
        goal: "My goal - QA engineer"
    }

    const expData = {
        firstName: "Elena",
        lastName: "A",
        phone: "11111111111",
        about: "About me",
        goal: "My goal - QA engineer",
        country: "Russia",
        english: "Advanced",
        size: "Women - XS"
    }


    before(() => {
        browser.maximizeWindow();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
    })
    beforeEach(() => {
        MenuPage.goToSettingsProfile();
    })


    it('TC: Verify that the user can change the First name', () => {
        SettingsProfilePage.edit(SettingsProfilePage.inputFieldFirstName, inpData.firstName);
        SettingsProfilePage.saveBtn.click();

        MenuPage.goToProfile();
        expect(ProfilePage.firstName()).toEqual(expData.firstName);
    })

    it('TC: Verify that the user can change the Last name', () => {
        SettingsProfilePage.edit(SettingsProfilePage.inputFieldLastName, inpData.lastName);
        SettingsProfilePage.saveBtn.click();

        MenuPage.goToProfile();
        expect(ProfilePage.lastName()).toEqual(expData.lastName);
    })

    it('TC: Verify that the user can change the Phone number', () => {
        SettingsProfilePage.edit(SettingsProfilePage.inputFieldPhone, inpData.phone);
        SettingsProfilePage.saveBtn.click();

        MenuPage.goToAdminUsers();
        AdminUsersPage.inputFieldEmail.setValue(SettingsProfilePage.credentials[0].username);
        AdminUsersPage.email.waitForDisplayed();

        expect(AdminUsersPage.phone).toHaveText(expData.phone);

    })

    it('TC: Verify that the user can change About section', () => {
        SettingsProfilePage.edit(SettingsProfilePage.inputFieldAbout, inpData.about);
        SettingsProfilePage.saveBtn.click();

        MenuPage.goToAdminUsers();
        AdminUsersPage.inputFieldEmail.setValue(SettingsProfilePage.credentials[0].username);
        AdminUsersPage.email.waitForDisplayed();

        expect(AdminUsersPage.about).toHaveText(expData.about);

        MenuPage.goToProfile();
        expect(ProfilePage.aboutSection).toHaveText(expData.about);
    })

    it('TC: Verify that the user can change the Goal', () => {
        SettingsProfilePage.edit(SettingsProfilePage.inputFieldMyGoals, inpData.goal);
        SettingsProfilePage.saveBtn.click();

        MenuPage.goToAdminUsers();
        AdminUsersPage.inputFieldEmail.setValue(SettingsProfilePage.credentials[0].username);
        AdminUsersPage.email.waitForDisplayed();

        expect(AdminUsersPage.goal).toHaveText(expData.goal);

        MenuPage.goToProfile();
        expect(ProfilePage.goalsSection).toHaveText(expData.goal);
    })

    it('TC: Verify that the user can change the Country of residence', () => {
        SettingsProfilePage.inputFieldCountry.click();
        // SettingsProfilePage.countryAzerbaijan.scrollIntoView(); // ?? scroll не работает так. Как скролить
        // SettingsProfilePage.countryAzerbaijan.click();

        SettingsProfilePage.countryRussia.click();
        SettingsProfilePage.saveBtn.click();

        MenuPage.goToAdminUsers();
        AdminUsersPage.inputFieldEmail.setValue(SettingsProfilePage.credentials[0].username);
        AdminUsersPage.email.waitForDisplayed();
        AdminUsersPage.country.scrollIntoView();

        expect(AdminUsersPage.country).toHaveTextContaining(expData.country);
    })

    it('TC: Verify that the user can change the information about the level of English proficiency', () => {
        SettingsProfilePage.inputFieldEnglishLevel.click();
        SettingsProfilePage.englishAdvanced.click();        // ?? как проверить этот тест? где отображается уровень английского (с чем сравнить)
        SettingsProfilePage.saveBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsProfile();

        expect(SettingsProfilePage.inputFieldEnglishLevel).toHaveText(expData.english);
    })

    it('TC: Verify that the user can change the size of the T-shirt', () => {
        SettingsProfilePage.inputFieldTShirtSize.click();
        SettingsProfilePage.sizeWomenXS.click();
        SettingsProfilePage.saveBtn.click();

        MenuPage.goToLogout();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.goToSettingsProfile();

        expect(SettingsProfilePage.inputFieldTShirtSize).toHaveText(expData.size);
    })

    it('TC: Verify that the data is saved after clicking the Save button', () => {
        SettingsProfilePage.saveBtn.waitForDisplayed();
        SettingsProfilePage.saveBtn.click();
        MenuPage.profileDropdown.click();
        MenuPage.selectProfile.click();

        expect(ProfilePage.userName).toHaveText(expData.firstName + ' ' + expData.lastName);
    })

})