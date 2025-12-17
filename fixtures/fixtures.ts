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
        await mainPage.navigate(process.env.BASE_URL!);
        await mainPage.navigateToSignInPage();
        await loginPage.fillEmail(process.env.EMAIL!);
        await loginPage.fillPassword(process.env.PASSWORD!);
        await loginPage.clickLogin();
        await use();
    }
})