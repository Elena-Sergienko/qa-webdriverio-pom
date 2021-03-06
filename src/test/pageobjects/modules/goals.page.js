import Page from '../page';

class GoalsPage extends Page {

    get header1() {
        return $('h1');
    }

}

export default new GoalsPage();