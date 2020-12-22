import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/profile.page";
import CoursesPage from "../pageobjects/courses.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"


describe('Settings Profile', () => {
    before(() => {
        browser.maximizeWindow();
        LoginPage.login("admin@gmail.com", "111111");

        ProfilePage.profileDropdown.click();
        ProfilePage.selectSettings.click();
    })

    // beforeEach(() => {         // нужно ли перед каждым it обновлять или логин каждый раз или можно ничего из этого, просто переходить по вкладкам ?
    //     browser.refresh();
    // })

    const inpFirstName = "Anna";
    const expFirstName = "Anna";

    const inpLastName = "Ivanova";
    const expLastName = "Ivanova";


    it('Edit First Name', () => {
        SettingsProfilePage.edit(SettingsProfilePage.inputFieldFirstName, inpFirstName);
        let checkNewName = SettingsProfilePage.inputFieldFirstName.getValue();
        expect(checkNewName).toEqual(expFirstName)
    })

    it('Edit Last Name', () => {
        SettingsProfilePage.edit(SettingsProfilePage.inputFieldLastName, inpLastName);
        let checkNewName = SettingsProfilePage.inputFieldLastName.getValue();
        expect(checkNewName).toEqual(expLastName)
    })

    it('Edit Phone', () => {
        SettingsProfilePage.edit(SettingsProfilePage.inputFieldPhone, "22222222222");
        let checkNewPhone = SettingsProfilePage.inputFieldPhone.getValue();
        expect(checkNewPhone).toEqual("22222222222")
    })

    it('Edit About', () => {
        SettingsProfilePage.edit(SettingsProfilePage.inputFieldAbout, "Improving  skills");
        let checkNewAbout = SettingsProfilePage.inputFieldAbout.getValue();
        expect(checkNewAbout).toEqual("Improving  skills")
    })

    it('Edit My goals', () => {
        SettingsProfilePage.edit(SettingsProfilePage.inputFieldMyGoals, "QA engineer");
        let checkNewGoals = SettingsProfilePage.inputFieldMyGoals.getValue();
        expect(checkNewGoals).toEqual("QA engineer");
    })

    it('Edit Country', () => {
        SettingsProfilePage.inputFieldCountry.click();
        SettingsProfilePage.countryRussia.click();
        let newCountry = SettingsProfilePage.inputFieldCountry.getText();
        expect(newCountry).toEqual("Russia");
    })

    it('Edit English level', () => {
        SettingsProfilePage.inputFieldEnglishLevel.click();
        SettingsProfilePage.englishAdvanced.click();
        let newEnglishLevel = SettingsProfilePage.inputFieldEnglishLevel.getText();
        expect(newEnglishLevel).toEqual("Advanced");
    })

    it('Edit English level', () => {
        SettingsProfilePage.inputFieldEnglishLevel.click();
        SettingsProfilePage.englishAdvanced.click();
        let newEnglishLevel = SettingsProfilePage.inputFieldEnglishLevel.getText();
        expect(newEnglishLevel).toEqual("Advanced");
    })

    it('Edit T-Shirt size', () => {
        SettingsProfilePage.inputFieldTShirtSize.click();
        SettingsProfilePage.sizeWomenXS.click();
        let newSize = SettingsProfilePage.inputFieldTShirtSize.getText();
        expect(newSize).toEqual("Women - XS");
    })

    it('Save btn', () => {
        SettingsProfilePage.saveBtn.waitForDisplayed();
        SettingsProfilePage.saveBtn.click();
        ProfilePage.profileDropdown.click();
        ProfilePage.selectProfile.click();
        let checkName = ProfilePage.userName.getText();
        expect(checkName).toEqual(expFirstName + ' ' + expLastName);
    })

})