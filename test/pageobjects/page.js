/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */

    get credentials () {
        return [
            {
                username: "admin@gmail.com",
                password: "111111"
            },
            {
                username: "new@gmail.com",
                password: "111111"
            },
            {
                username: "learner@gmail.com",
                password: "111111"
            },
            {
                username: "student@gmail.com",
                password: "111111"
            }
        ];
    }

    get notification() {
        // return $('.ant-notification-notice-message')
        return $("//div[@class='ant-notification-notice-message']");
    };

    clearInput(inputField) {
        // inputField.keys(['Control', 'a']);
        // inputField.keys(['Backspace']);

        const textLength = inputField.getValue().length;
        for(let i = 0; i < textLength; i++){
            inputField.keys(['Backspace']);
        }
    }

    edit(selectedIF, newText) {
        selectedIF.addValue("");
        this.clearInput(selectedIF);
        selectedIF.addValue(newText);
    }

}

export default Page;