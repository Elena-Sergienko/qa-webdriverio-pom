import Page from '../page';

class ChallengesPage extends Page {

    get header1() {
        return $("//div[contains(@class,'h1\')]");
    }

}

export default new ChallengesPage();