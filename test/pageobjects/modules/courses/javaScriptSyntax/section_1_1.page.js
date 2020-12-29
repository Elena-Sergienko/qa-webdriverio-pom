import Page from '../../../page';

class Section_1_1Page extends Page {

    get playVideo() {
        return $("//iframe[@id='widget2']");
    }

    get pauseBtn() {
        return $("//button[@title='Pause (k)']");
    }

    get quize_1() {
        return $("//a[.='JS Syntax. Тип \"number\" (Число)']");
    }

    get quize_1_Status() {
        return $("//a[.='JS Syntax. Тип \"number\" (Число)']/following-sibling::span");
    }

    get startQuizBtn() {
        return $("//span[.='Start quiz']/..");
    }

    get quize_2() {
        return $("//div[@class='mb-2 h5']/a[.='JS Syntax. О курсе']");
    }

    get quizeOpened() {
        return $("//div[.='Progress:']");
    }


}

export default new Section_1_1Page();