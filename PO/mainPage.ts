import { Page } from "@playwright/test";
import { mainPageSelectors } from "../selectors/mainPageSelectors"

const createMainPage = (page: Page) => {
    const mainPage = {
        getHeaderText: () => page.innerText(mainPageSelectors.HEADER),
        openMainPage: () => page.goto("https://playwright.dev/"),
        getStartedButton: {
            click: () => page.click(mainPageSelectors.GET_STARTED_BUTTON),
            isDisplayed: () => page.isVisible(mainPageSelectors.GET_STARTED_BUTTON)
        },
        searchText: async (textToSearch: string) => {
            await page.click(mainPageSelectors.SEARCH_BUTTON);
            await page.type(mainPageSelectors.SEARCH_INPUT, textToSearch, { "delay": 100 });
            await page.keyboard.press("Enter", { "delay": 100 });
        },
        programmingLanguageDropDown: {
            hover: () => page.hover(mainPageSelectors.PROGRAMMING_LANGUAGE_LABEL),
            waitForDropDownOpened: () => page.waitForSelector(mainPageSelectors.PROGRAMMING_LANGUAGE_DROPDOWN, { "state": "visible" }),
            getAvailableLanguages: () => page.$$(mainPageSelectors.PROGRAMMING_LANGUAGE_ITEM)
        }
    }
    return mainPage;
};

export { createMainPage }