import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { MainPage } from '../pages/MainPage/MainPage';

type Pages = {
    loginPage: LoginPage;
    mainPage: MainPage;
    beforeFixture: void;
}

export const test = base.extend<Pages>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await use(mainPage);
    },

    beforeFixture: async ({ mainPage, loginPage }, use) => {
        await mainPage.navigate('https://teststore.automationtesting.co.uk/index.php');
        await mainPage.navigateToSignInPage();
        await loginPage.fillEmail('vasilver@gmail.com');
        await loginPage.fillPassword('123qwe');
        await loginPage.clickLogin();
        await use();
    }
})