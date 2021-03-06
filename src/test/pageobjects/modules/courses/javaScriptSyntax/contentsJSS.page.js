import Page from '../../../page';

class ContentsJSSPage extends Page {

    get descriptionJSS() {
        return $("//div[contains(text(), 'От простого к сложному')]");
    }

    get alertStartCourse() {
        return $("//div[@class='alert alert-secondary']");
    }

    get startCourseBtn() {
        return $("//span[.='Start course']/..");
    }

    get section_1_1() {
        return $("//a[.='О курсе']");
    }

    get section_1_2() {
        return $("//span[.='Играем в \"песочнице\"']");
    }

}

export default new ContentsJSSPage();