import Page from './page';

class ChatPage extends Page {

    get chatMenu() {
        return $("//ul[@class='ant-menu ant-menu-light ant-menu-root ant-menu-inline']");
    }

}

export default new ChatPage();