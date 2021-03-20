import Page from '../../page';

class GroupsPage extends Page {

    get header1() {
        return $('h1');
    }

    get countGroups(){
        return $('.ml-3.h-100.d-flex.small');
    }

    get qa7group(){
        return $("//div[.='QA7']");
    }

}

export default new GroupsPage();