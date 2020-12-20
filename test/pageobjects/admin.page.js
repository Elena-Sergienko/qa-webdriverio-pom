import Page from './page';

class AdminPage extends Page {

    get dropdownMenu() {
        return $("//ul[@role='menu']");
    }

}

export default new AdminPage();
