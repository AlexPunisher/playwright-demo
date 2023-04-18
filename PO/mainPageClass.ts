import { Page } from "@playwright/test";
import { mainPageSelectors } from "../selectors/mainPageSelectors"

class MainPage {
    page: Page;
    constructor(page1: Page) {
        this.page = page1;
    }
    async openMainPage() {
        await this.page.goto("https://playwright.dev/")
    }
    getHeaderText() {
        return this.page.innerText(mainPageSelectors.HEADER)
    }
    async searchText(textToSearch: string) {
        await this.page.click(mainPageSelectors.SEARCH_BUTTON);
        await this.page.type(mainPageSelectors.SEARCH_INPUT, textToSearch, { "delay": 100 });
        await this.page.keyboard.press("Enter", { "delay": 100 });
    }
}
export { MainPage }