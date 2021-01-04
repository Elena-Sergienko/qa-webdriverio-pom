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
}

export default new AdminUsersPage();
