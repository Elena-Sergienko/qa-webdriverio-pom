import Page from '../../page';

class CoursesPage extends Page {

    get header1() {
        return $('h1');
    }

    get listCourses() {
        return $$('h5');
        // return $$('h4');
    }

    get javaScriptSyntax() {
        return $("//a[@href='/course/5c140b2b42f6ea23059cbe8f']");
    }

    get qaBasic() {
        return $("//a[.='QA Basics']");
    }

    get html() {
        return $("//a[.='HTML']");
    }

}

export default new CoursesPage();