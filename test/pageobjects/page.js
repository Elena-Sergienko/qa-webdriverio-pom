/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    get notification() {
        return $('.ant-notification-notice-message')
    };

    clearInput(inputField) {
        inputField.keys(['Control', 'a']);
        inputField.keys(['Backspace']);
    }

    edit(selectedIF, newText) {
        selectedIF.addValue("");
        this.clearInput(selectedIF);
        selectedIF.addValue(newText);
    }

}

export default Page;