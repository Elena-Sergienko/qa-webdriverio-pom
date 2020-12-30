import Page from '../../page';

class DiaryPage extends Page {

    get header1() {
        return $("h1");
    }

    get createDayReportBtn() {
        return $("//span[.='Create day report']/..");
    }

    get verticalMenu() {
        return $("//img[@class='ant-dropdown-trigger']");
    }

    get deleteDayReport() {
        return $("//li[.='Delete']");
    }

}

export default new DiaryPage();