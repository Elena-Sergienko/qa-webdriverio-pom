import Page from '../page';

class DeleteUserPage extends Page {

    get titleUserDelete() {
        return $("//div[@class='ant-drawer-title']");
    }

    get deleteUserBtn() {
        return $("//button[@type='submit']");
    }

    get cancelBtn() {
        return $("//button[@id='cancel']");
    }

}

export default new DeleteUserPage();
