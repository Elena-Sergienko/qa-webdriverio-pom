import Page from '../page';

class CardsPage extends Page {

    get header1() {
        return $('h1');
    }

}

export default new CardsPage();