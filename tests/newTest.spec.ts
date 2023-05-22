import { test, expect, ElementHandle } from '@playwright/test';
import { createMainPage } from '../PO/mainPage'; 
import { MainPage } from '../PO/mainPageClass'; 

const expectedTextArray = ["Node.js", "Python", "Java", ".NET",]; 
// fetch and checkout
test.only('go to Instalation page', async ({ page }) => {
    const mainPage = createMainPage(page);
    const generalPage = new MainPage(page)

    // await mainPage.openMainPage();
    await generalPage.openMainPage();
    await mainPage.getStartedButton.click();
    // const headerText = await mainPage.getHeaderText();
    const headerText = await generalPage.getHeaderText()

    expect(headerText).toEqual("Installation");
});