import Page from '../page';

class ShopPage extends Page {

    get header1() {
        return $('h1');
    }

}

export default new ShopPage();