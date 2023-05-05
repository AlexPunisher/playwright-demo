import { test, expect, ElementHandle } from '@playwright/test';
import { createMainPage } from '../PO/mainPage'; 
import { MainPage } from '../PO/mainPageClass'; 

const expectedTextArray = ["Node.js", "Python", "Java", ".NET",]; 


test('go to Instalation page', async ({ page }) => {
    const mainPage = createMainPage(page);
    const generalPage = new MainPage(page)

    // await mainPage.openMainPage();
    await generalPage.openMainPage();
    await mainPage.getStartedButton.click();
    // const headerText = await mainPage.getHeaderText();
    const headerText = await generalPage.getHeaderText()

    expect(headerText).toEqual("Installation");
});
test('search "safari"', async ({ page }) => {
    const mainPage = createMainPage(page);
    await mainPage.openMainPage();

    await mainPage.searchText("safari");

    const className = await page.getAttribute(".table-of-contents [href='#webkit']", "class");

    expect(className).toContain('--active');
});

test.skip('check all drop down texts', async ({ page }) => {
    const mainPage = createMainPage(page);
    await mainPage.openMainPage();

    await mainPage.programmingLanguageDropDown.hover()
    await mainPage.programmingLanguageDropDown.waitForDropDownOpened();

    const dropDownElements: ElementHandle[] = await mainPage.programmingLanguageDropDown.getAvailableLanguages();

    expect(dropDownElements.length).toEqual(4);

    const dropDownTexts = await Promise.all(dropDownElements.map(

        (dropDownElement: ElementHandle) => {
            const dropDownText = dropDownElement.innerText();
            return dropDownText;
        }

    ));

    expect(dropDownTexts).toMatchObject(expectedTextArray);
    expect(await dropDownElements[0].isVisible()).toEqual(true);
});