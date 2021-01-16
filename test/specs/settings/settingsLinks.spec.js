import LoginPage from "../../pageobjects/login.page";
import ProfilePage from "../../pageobjects/profile.page";
import SettingsProfilePage from "../../pageobjects/settings/settingsProfile.page"
import SettingsLinksPage from "../../pageobjects/settings/settingsLinks.page"
import MenuPage from "../../pageobjects/menu.page"


describe('Settings Links', () => {
    before(() => {
        browser.maximizeWindow();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
    })
    const inpData = {
        googleResumeLink: "https://docs.google.com/document/d/1U1O7hDDLujUfNmcvs_a5vd23G7xIHR2mKVUPDXaoQhw/edit?usp=sharing",
        linkedinLink: "https://www.linkedin.com/in/adam--ali/",
        facebookLink: "https://www.facebook.com/test.test.73345",
        gitHubLink: "https://github.com/test",
        codewarsLink: "https://www.codewars.com/users/somoire"
    }

    const expData = {
        googleResumeLink: "https://docs.google.com/document/d/1U1O7hDDLujUfNmcvs_a5vd23G7xIHR2mKVUPDXaoQhw/edit?usp=sharing",
        linkedinLink: "https://www.linkedin.com/in/adam--ali/",
        facebookLink: "https://www.facebook.com/test.test.73345",
        gitHubLink: "https://github.com/test",
        codewarsLink: "https://www.codewars.com/users/somoire",
        errorGoogle: "The link has to refer to https://docs.google.com/document/",
        errorLinkedin: "The link has to refer to https://www.linkedin.com/in/",
        errorFacebook: "The link has to refer to https://www.facebook.com/",
        errorGitHub: "The link has to refer to https://github.com/",
        errorCodewars: "The link has to refer to https://www.codewars.com/users/"
    }


    describe('Sub-Suite: GOOGLE DOC RESUME LINK', () => {

        it('TC: Verify that the field accepts a new value (Google Doc resume link) and the error warning does not appear', () => {
            MenuPage.goToSettingsLinks();
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldGDResumeLink, inpData.googleResumeLink);

            expect(SettingsLinksPage.inputFieldGDResumeLink).toHaveValue(expData.googleResumeLink);
            expect(SettingsLinksPage.errorGoogle).not.toBeExisting();
        })

        it('TC: Verify that an error warning appears when entering invalid data (link does not match)', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldGDResumeLink, inpData.codewarsLink);
            SettingsLinksPage.errorGoogle.waitForDisplayed();

            expect(SettingsLinksPage.errorGoogle).toHaveText(expData.errorGoogle);
        })

        it('TC: Verify that saving the correct data (new Google Doc resume link) works correctly', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldGDResumeLink, inpData.googleResumeLink);
            SettingsLinksPage.saveBtn.click();
            MenuPage.goToProfile();

            expect(ProfilePage.iconGDResume).toHaveAttr("href", expData.googleResumeLink);   // ?? как проверить еще и на открывающейся сторонней странице (googleDoc, gitHub, codewars...)
        })
    })

    describe('Sub-Suite: LINKEDIN PROFILE LINK', () => {

        it('TC: Verify that the field accepts a new value (LinkedIn profile link) and the error warning does not appear', () => {
            MenuPage.goToSettingsLinks();
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldLinkedinLink, inpData.linkedinLink);

            expect(SettingsLinksPage.inputFieldLinkedinLink).toHaveValue(expData.linkedinLink);
            expect(SettingsLinksPage.errorLinkedin).not.toBeExisting();
        })

        it('TC: Verify that an error warning appears when entering invalid data (link does not match)', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldLinkedinLink, inpData.googleResumeLink);
            SettingsLinksPage.errorLinkedin.waitForDisplayed();

            expect(SettingsLinksPage.errorLinkedin).toHaveText(expData.errorLinkedin);
        })

        it('TC: Verify that saving the correct data (new LinkedIn profile link) works correctly', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldLinkedinLink, inpData.linkedinLink);
            SettingsLinksPage.saveBtn.click();
            MenuPage.goToProfile();

            expect(ProfilePage.iconLinkedin).toHaveAttr("href", expData.linkedinLink);   // ?? как проверить еще и на открывающейся сторонней странице (googleDoc, gitHub, codewars...)
        })
    })

    describe('Sub-Suite: FACEBOOK PROFILE LINK', () => {

        it('TC: Verify that the field accepts a new value (Facebook profile link) and the error warning does not appear', () => {
            MenuPage.goToSettingsLinks();
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldFacebookLink, inpData.facebookLink);

            expect(SettingsLinksPage.inputFieldFacebookLink).toHaveValue(expData.facebookLink);
            expect(SettingsLinksPage.errorFacebook).not.toBeExisting();
        })

        it('TC: Verify that an error warning appears when entering invalid data (link does not match)', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldFacebookLink, inpData.googleResumeLink);
            SettingsLinksPage.errorFacebook.waitForDisplayed();

            expect(SettingsLinksPage.errorFacebook).toHaveText(expData.errorFacebook);
        })

        it('TC: Verify that saving the correct data (new Facebook profile link) works correctly', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldFacebookLink, inpData.facebookLink);
            SettingsLinksPage.saveBtn.click();
            MenuPage.goToProfile();

            expect(ProfilePage.iconFacebook).toHaveAttr("href", expData.facebookLink);   // ?? как здесь проверить еще и на открывающейся сторонней странице (googleDoc, gitHub, codewars...)
        })
    })

    describe('Sub-Suite: GITHUB PROFILE LINK', () => {

        it('TC: Verify that the field accepts a new value (GitHub profile link) and the error warning does not appear', () => {
            MenuPage.goToSettingsLinks();
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldGitHubLink, inpData.gitHubLink);

            expect(SettingsLinksPage.inputFieldGitHubLink).toHaveValue(expData.gitHubLink);
            expect(SettingsLinksPage.errorGitHub).not.toBeExisting();
        })

        it('TC: Verify that an error warning appears when entering invalid data (link does not match)', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldGitHubLink, inpData.codewarsLink);
            SettingsLinksPage.errorGitHub.waitForDisplayed();

            expect(SettingsLinksPage.errorGitHub).toHaveText(expData.errorGitHub);
        })

        it('TC: Verify that saving the correct data (new GitHub profile link) works correctly', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldGitHubLink, inpData.gitHubLink);
            SettingsLinksPage.saveBtn.click();
            MenuPage.goToProfile();

            expect(ProfilePage.iconGitHub).toHaveAttr("href", expData.gitHubLink);   // ?? как проверить еще и на открывающейся сторонней странице (googleDoc, gitHub, codewars...)
        })
    })

    describe('Sub-Suite: CODEWARS PROFILE LINK', () => {

        it('TC: Verify that the field accepts a new value (Codewars profile link) and the error warning does not appear', () => {
            MenuPage.goToSettingsLinks();
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldCodewarsLink, inpData.codewarsLink);

            expect(SettingsLinksPage.inputFieldCodewarsLink).toHaveValue(expData.codewarsLink);
            expect(SettingsLinksPage.errorCodewars).not.toBeExisting();
        })

        it('TC: Verify that an error warning appears when entering invalid data (link does not match)', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldCodewarsLink, inpData.googleResumeLink);
            SettingsLinksPage.errorCodewars.waitForDisplayed();

            expect(SettingsLinksPage.errorCodewars).toHaveText(expData.errorCodewars);
        })

        it('TC: Verify that saving the correct data (new Codewars profile link) works correctly', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldCodewarsLink, inpData.codewarsLink);
            SettingsLinksPage.saveBtn.click();
            MenuPage.goToProfile();

            expect(ProfilePage.iconCodewars).toHaveAttr("href", expData.codewarsLink);   // ?? как проверить еще и на открывающейся сторонней странице (googleDoc, gitHub, codewars...)
        })
    })


})