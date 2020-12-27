import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/profile.page";
import SettingsProfilePage from "../pageobjects/settings/settingsProfile.page"
import SettingsLinksPage from "../pageobjects/settings/settingsLinks.page"
import MenuPage from "../pageobjects/menu.page"
import MainMenu from "../pageobjects/menu.page";


describe('Settings Links', () => {
    before(() => {
        browser.maximizeWindow();
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
    })

    const inpGDResumeLink = "https://docs.google.com/document/d/1U1O7hDDLujUfNmcvs_a5vd23G7xIHR2mKVUPDXaoQhw/edit?usp=sharing";
    const expErrorGoogle = "The link has to refer to https://docs.google.com/document/";
    const expGSResumeLink = "https://docs.google.com/document/d/1U1O7hDDLujUfNmcvs_a5vd23G7xIHR2mKVUPDXaoQhw/edit?usp=sharing";

    const inpLinkedinLink = "https://www.linkedin.com/in/adam--ali/";
    const expErrorLinkedin = "The link has to refer to https://www.linkedin.com/in/";
    const expLinkedinLink = "https://www.linkedin.com/in/adam--ali/";

    const inpFacebookLink = "https://www.facebook.com/test.test.73345";
    const expErrorFacebook = "The link has to refer to https://www.facebook.com/";
    const expFacebookLink = "https://www.facebook.com/test.test.73345";

    const inpGitHubLink = "https://github.com/test";
    const expErrorGitHub = "The link has to refer to https://github.com/";
    const expGitHubLink = "https://github.com/test";

    const inpCodewarsLink = "https://www.codewars.com/users/somoire";
    const expErrorCodewars = "The link has to refer to https://www.codewars.com/users/";
    const expCodewarsLink = "https://www.codewars.com/users/somoire";


    describe('Google Doc resume link', () => {

        it('Edit Google Doc resume link', () => {
            MenuPage.goToSettingsLinks();

            SettingsLinksPage.edit(SettingsLinksPage.inputFieldGDResumeLink, inpGDResumeLink);
            let checkLink = SettingsLinksPage.inputFieldGDResumeLink.getValue();

            expect(checkLink).toEqual(expGSResumeLink);
            expect(SettingsLinksPage.errorGoogle.isExisting()).toEqual(false);
        })

        it('Edit Google Doc resume link - Negative (link does not match)', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldGDResumeLink, inpCodewarsLink);
            SettingsLinksPage.errorGoogle.waitForDisplayed();

            expect(SettingsLinksPage.errorGoogle.getText()).toEqual(expErrorGoogle);
        })

        it('Edit and Save Google Doc resume link', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldGDResumeLink, inpGDResumeLink);
            SettingsLinksPage.saveBtn.click();

            MenuPage.profileDropdown.click();
            MenuPage.selectProfile.click();
            let checkLink = ProfilePage.iconGDResume.getAttribute("href");

            expect(checkLink).toEqual(expGSResumeLink);   // ?? как здесь проверить еще и на открывающейся сторонней странице (googleDoc, gitHub, codewars...)
        })
    })

    describe('LinkedIn profile link', () => {

        it('Edit LinkedIn profile link', () => {
            MenuPage.goToSettingsLinks();

            SettingsLinksPage.edit(SettingsLinksPage.inputFieldLinkedinLink, inpLinkedinLink);
            let checkLink = SettingsLinksPage.inputFieldLinkedinLink.getValue();

            expect(checkLink).toEqual(expLinkedinLink);
            expect(SettingsLinksPage.errorLinkedin.isExisting()).toEqual(false);
        })

        it('Edit LinkedIn profile link - Negative (link does not match)', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldLinkedinLink, inpGDResumeLink);
            SettingsLinksPage.errorLinkedin.waitForDisplayed();

            expect(SettingsLinksPage.errorLinkedin.getText()).toEqual(expErrorLinkedin);
        })

        it('Edit and Save LinkedIn profile link', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldLinkedinLink, inpLinkedinLink);
            SettingsLinksPage.saveBtn.click();

            MenuPage.goToProfile();
            let checkLink = ProfilePage.iconLinkedin.getAttribute("href");

            expect(checkLink).toEqual(expLinkedinLink);   // ?? как здесь проверить еще и на открывающейся сторонней странице (googleDoc, gitHub, codewars...)
        })
    })

    describe('Facebook profile link', () => {

        it('Edit Facebook profile link', () => {
            MenuPage.goToSettingsLinks();

            SettingsLinksPage.edit(SettingsLinksPage.inputFieldFacebookLink, inpFacebookLink);
            let checkLink = SettingsLinksPage.inputFieldFacebookLink.getValue();

            expect(checkLink).toEqual(expFacebookLink);
            expect(SettingsLinksPage.errorFacebook.isExisting()).toEqual(false);
        })

        it('Edit Facebook profile link - Negative (link does not match)', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldFacebookLink, inpGDResumeLink);
            SettingsLinksPage.errorFacebook.waitForDisplayed();

            expect(SettingsLinksPage.errorFacebook.getText()).toEqual(expErrorFacebook);
        })

        it('Edit and Save Facebook profile link', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldFacebookLink, inpFacebookLink);
            SettingsLinksPage.saveBtn.click();

            MenuPage.goToProfile();
            let checkLink = ProfilePage.iconFacebook.getAttribute("href");

            expect(checkLink).toEqual(expFacebookLink);   // ?? как здесь проверить еще и на открывающейся сторонней странице (googleDoc, gitHub, codewars...)
        })
    })

    describe('GitHub profile link', () => {

        it('Edit GitHub profile link', () => {
            MenuPage.goToSettingsLinks();

            SettingsLinksPage.edit(SettingsLinksPage.inputFieldGitHubLink, inpGitHubLink);
            let checkLink = SettingsLinksPage.inputFieldGitHubLink.getValue();

            expect(checkLink).toEqual(expGitHubLink);
            expect(SettingsLinksPage.errorGitHub.isExisting()).toEqual(false);
        })

        it('Edit GitHub profile link - Negative (link does not match)', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldGitHubLink, inpCodewarsLink);
            SettingsLinksPage.errorGitHub.waitForDisplayed();

            expect(SettingsLinksPage.errorGitHub.getText()).toEqual(expErrorGitHub);
        })

        it('Edit and Save GitHub profile link', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldGitHubLink, inpGitHubLink);
            SettingsLinksPage.saveBtn.click();

            MenuPage.goToProfile();
            let checkLink = ProfilePage.iconGitHub.getAttribute("href");

            expect(checkLink).toEqual(expGitHubLink);   // ?? как здесь проверить еще и на открывающейся сторонней странице (googleDoc, gitHub, codewars...)
        })
    })

    describe('Codewars profile link', () => {

        it('Edit Codewars profile link', () => {
            MenuPage.goToSettingsLinks();

            SettingsLinksPage.edit(SettingsLinksPage.inputFieldCodewarsLink, inpCodewarsLink);
            let checkLink = SettingsLinksPage.inputFieldCodewarsLink.getValue();

            expect(checkLink).toEqual(expCodewarsLink);
            expect(SettingsLinksPage.errorCodewars.isExisting()).toEqual(false);
        })

        it('Edit Codewars profile link - Negative (link does not match)', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldCodewarsLink, inpGDResumeLink);
            SettingsLinksPage.errorCodewars.waitForDisplayed();

            expect(SettingsLinksPage.errorCodewars.getText()).toEqual(expErrorCodewars);
        })

        it('Edit and Save Codewars profile link', () => {
            SettingsLinksPage.edit(SettingsLinksPage.inputFieldCodewarsLink, inpCodewarsLink);
            SettingsLinksPage.saveBtn.click();

            MenuPage.goToProfile();
            let checkLink = ProfilePage.iconCodewars.getAttribute("href");

            expect(checkLink).toEqual(expCodewarsLink);   // ?? как здесь проверить еще и на открывающейся сторонней странице (googleDoc, gitHub, codewars...)
        })
    })


})