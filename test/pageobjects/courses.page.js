import Page from './page';

class CoursesPage extends Page {

    get header1() {
        return $('h1');
    }

}

export default new CoursesPage();