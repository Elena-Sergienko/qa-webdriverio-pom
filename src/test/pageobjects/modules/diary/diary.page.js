import Page from '../../page';

class DiaryPage extends Page {

    get header1() {
        return $("h1");
    }

    get createDayReportBtn() {
        return $("//span[.='Create day report']/..");
    }

    get titleDrawer() {
        return $("//div[@class='ant-drawer-title']");
    }

    get marks() {
        return {
            iNeedHelp: $("//input[@value='need_help']"),
            iUnderstood: $("//input[@value='understood_everything']"),
            helpedClassmates: $("//input[@value='help_classmates']"),
            watchedLectures: $("//input[@value='watch_lessons']"),
            readDocumentation: $("//input[@value='read_documentation']"),
            codePractice: $("//input[@value='code_practice']"),
            quizPractice: $("//input[@value='quiz']"),
            interviewPreparation: $("//input[@value='interview_preparation']"),
            recruiterPhoneCall: $("//input[@value='recruiter_phone_call']"),
            interviewScreen: $("//input[@value='interview_screen']"),
            interviewOnsite: $("//input[@value='interview_onsite']"),
            gotJobOffer: $("//input[@value='job_offer']")
        }
    }

    get inputFieldMorale() {
        return $("//input[@id='morale']");
    }

    get editInputFieldMorale() {
        return $("//span[@class='ant-select-selection-item']");
    }

    get morale9() {
        return $("//div[@title='9']");
    }
    get morale8() {
        return $("//div[@title='8']");
    }

    get inputFieldHours() {
        return $("//input[@id='hours']/../..");
    }

    get hours4() {
        return $("//div[@title='4']");
    }

    get inputFieldDescription() {
        return $("//textarea[@id='description']");
    }

    get createBtn() {
        return $("//button[@type='submit']");
    }

    get updateBtn() {
        return $("//button[@type='submit']");
    }

    get notificationDiaryCreated() {
        return $("//div[@class='ant-notification-notice-message']");
    }

    get inputFieldSelectStudentName() {
        return $("//input[@id='userId']");
    }

    get inputFieldKeyword() {
        return $("//input[@id='description']");
    }

    get lastDayReport() {
        return $("//div[@class='small']/..");
    }

    get verticalMenu() {
        return $("//img[@class='ant-dropdown-trigger']");
        // return $("//div[@class='col-md-1']/img");
        // return $("//img[@src='/static/vertical-menu.948670c0.svg']");
        // return $("//div[@class='ant-dropdown ant-dropdown-placement-bottomLeft  ant-dropdown-hidden']");
        // return $("//img[@height='17']");
    }

    get approveDayReport() {
        return $("//li[.='Approve']");
    }

    get editDayReport() {
        return $("//li[.='Edit']");
    }

    get deleteDayReport() {
        return $("//li[.='Delete']");
    }

    get modalConfirmDelete() {
        return $("//span[@class='ant-modal-confirm-title']");
    }

    get modalConfirmDelContent() {
        return $("//div[@class='ant-modal-confirm-content']");
    }

    get deleteOkBtn() {
        return $("//button[@class='ant-btn ant-btn-dangerous']");
    }

}

export default new DiaryPage();