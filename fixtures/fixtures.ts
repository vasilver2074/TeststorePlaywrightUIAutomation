import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { MainPage } from '../pages/MainPage/MainPage';
import { SearchResultPage } from '../pages/SearchResultPage/SearchResultPage';
import { AccessoriesPage } from '../pages/AccessoriesPage/AccessoriesPage';

type Pages = {
    loginPage: LoginPage;
    mainPage: MainPage;
    searchResultPage: SearchResultPage;
    accessoriesPage: AccessoriesPage;
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

    searchResultPage: async ({ page }, use) => {
        const searchResultPage = new SearchResultPage(page);
        await use(searchResultPage);
    },

    accessoriesPage: async ({ page }, use) => {
        const accessoriesPage = new AccessoriesPage(page);
        await use(accessoriesPage);
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