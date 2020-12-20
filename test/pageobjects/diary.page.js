import Page from './page';

class DiaryPage extends Page {

    get header1() {
        return $('h1');
    }

}

export default new DiaryPage();