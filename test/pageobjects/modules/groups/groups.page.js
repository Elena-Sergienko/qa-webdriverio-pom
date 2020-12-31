import Page from '../../page';

class GroupsPage extends Page {

    get header1() {
        return $('h1');
    }

}

export default new GroupsPage();