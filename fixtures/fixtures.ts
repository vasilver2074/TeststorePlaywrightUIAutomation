import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { MainPage } from '../pages/MainPage/MainPage';
import { SearchResultPage } from '../pages/SearchResultPage/SearchResultPage';
import { AccessoriesPage } from '../pages/AccessoriesPage/AccessoriesPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage/ProductDetailsPage';
import { ShoppingCartPage } from '../pages/ShoppingCartPage/ShoppingCartPage';
import { OrderPage } from '../pages/OrderPage/OrderPage';

type Pages = {
    loginPage: LoginPage;
    mainPage: MainPage;
    searchResultPage: SearchResultPage;
    accessoriesPage: AccessoriesPage;
    productDetailsPage: ProductDetailsPage;
    shoppingCartPage: ShoppingCartPage;
    orderPage: OrderPage;
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

    productDetailsPage: async ({ page }, use) => {
        const productDetailsPage = new ProductDetailsPage(page);
        await use(productDetailsPage);
    },

    shoppingCartPage: async ({ page }, use) => {
        const shoppingCartPage = new ShoppingCartPage(page);
        await use(shoppingCartPage);
    },

    orderPage: async ({ page }, use) => {
        const orderPage = new OrderPage(page);
        await use(orderPage);
    },

    beforeFixture: async ({ mainPage, loginPage, context, page }, use) => {
        await mainPage.navigate(process.env.BASE_URL!);
        await mainPage.navigateToSignInPage();
        await loginPage.fillEmail(process.env.EMAIL!);
        await loginPage.fillPassword(process.env.PASSWORD!);
        await loginPage.clickLogin();
        //await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);
        await context.storageState({ path: './storageState.json' });
        await use();
    }
})