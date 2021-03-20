import Requests from '../../../../utils/apiSyncRequest/requests';
import LoginPage from '../../../pageobjects/login.page';
import MenuPage from '../../../pageobjects/menu.page';
import GroupsPage from '../../../pageobjects/modules/groups/groups.page';
import SettingsProfilePage from "../../../pageobjects/settings/settingsProfile.page";


describe('Comparing groups API and UI', () => {

    before(() => {
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
    })

    it('Should check all groups', function () {
        let countGroupsApi;
        let countGroupsUi;

        const apiResponse = Requests.getAllGroups('https://server-stage.pasv.us/group/list');
        countGroupsApi = apiResponse.payload.length;

        MenuPage.menuGroups.waitForDisplayed();
        MenuPage.menuGroups.click();

        GroupsPage.qa7group.waitForDisplayed(); // пока на странице баг, на секунду появляется не загруженная страница

        countGroupsUi = +GroupsPage.countGroups.getText().replace(/[^0-9]/g, ''); // полный текст "Items 52" => оставляем только цифры, буквы заменяем на пустую строку
        expect(countGroupsUi).toEqual(countGroupsApi);
    });
});


