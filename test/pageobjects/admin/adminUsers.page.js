import Page from '../page';

class AdminUsersPage extends Page {

    get inputFieldName() {
        return $("//input[@id='name']");
    }

    get inputFieldEmail() {
        return $("//input[@id='email']");
    }

    get inputFieldPhone() {
        return $("//input[@id='phone']");
    }

    get about() {
        return $("//div[@class='col-md-4 small'][1]")
    }

    get goal() {
        return $("//div[@class='col-md-4 small'][2]")
    }

    get country() {
        return $("//div[@class='small text-warning mt-1']/..");
    }

    get tShirtSize() {
        return $("//div[@class='col-md-4 small'][3]/div")
    }

    get phone() {
        return $("//img[@alt='countryName']/..");
    }

    get email() {
        return $("//span[.='admin@gmail.com']");
    }

    get nameOfUser() {
        return $("//div[@class='col-md-3 d-flex flex-column']/a");
    }

    get role() {
        return $("//div[@class='ant-dropdown-trigger']/span");
    }

    get dropdownMenuLastUser() {
        return $("//img[@class='ant-dropdown-trigger']");
    }

    get deleteUser() {
        return $("//li[.='Delete']");
    }

    get somethingWentWrongMessage() {
        return $("//a[@class='ant-notification-notice-close']");
    }
    get lastUserInformation() {
        return $("//div[@class='row']");
    }

    deleteLastUser() {
        this.dropdownMenuLastUser.click();
        this.deleteUser.waitForDisplayed();
        this.deleteUser.click();
    }



}

export default new AdminUsersPage();
