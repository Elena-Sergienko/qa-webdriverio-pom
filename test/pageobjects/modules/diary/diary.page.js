import Page from '../../page';

class DiaryPage extends Page {

    get header1() {
        return $("h1");
    }

    get createDayReportBtn() {
        return $("//span[.='Create day report']/..");
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

    get morale9() {
        return $("//div[@title='9']");
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

    get notificationDiaryCreated() {
        return $("//div[@class='ant-notification-notice-message']");
    }

    get inputFieldSelectStudentName() {
        return $("//input[@id='userId']");
    }

    get lastDayReport() {
        return $("//div[@class='small']/..");
    }

    get verticalMenu() {
        return $("//img[@class='ant-dropdown-trigger']");
    }

    get deleteDayReport() {
        return $("//li[.='Delete']");
    }

}

export default new DiaryPage();