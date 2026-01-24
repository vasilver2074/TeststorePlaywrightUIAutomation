import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../app/pages/LoginPage/LoginPage';
import { MainPage } from '../app/pages/MainPage/MainPage';
import { SearchResultPage } from '../app/pages/SearchResultPage/SearchResultPage';
import { AccessoriesPage } from '../app/pages/AccessoriesPage/AccessoriesPage';
import { ProductDetailsPage } from '../app/pages/ProductDetailsPage/ProductDetailsPage';
import { ShoppingCartPage } from '../app/pages/ShoppingCartPage/ShoppingCartPage';
import { OrderPage } from '../app/pages/OrderPage/OrderPage';
import { ProceedToCheckoutPage } from '../app/pages/ProceedToCheckoutPage/ProceedToCheckoutPage';
import { Authorization } from '../app/api/Authorization';

type Pages = {
  loginPage: LoginPage;
  mainPage: MainPage;
  searchResultPage: SearchResultPage;
  accessoriesPage: AccessoriesPage;
  productDetailsPage: ProductDetailsPage;
  shoppingCartPage: ShoppingCartPage;
  orderPage: OrderPage;
  proceedToCheckoutPage: ProceedToCheckoutPage;
  beforeFixture: void;
  authApi: Page;
};

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

  proceedToCheckoutPage: async ({ page }, use) => {
    const proceedToCheckoutPage = new ProceedToCheckoutPage(page);
    await use(proceedToCheckoutPage);
  },

  beforeFixture: async ({ mainPage, loginPage, context, page }, use) => {
    await mainPage.navigate(process.env.BASE_URL!);
    await mainPage.navigateToSignInPage();
    await loginPage.performLogin(process.env.EMAIL!, process.env.PASSWORD!);
    await page.waitForTimeout(3000);
    await context.storageState({ path: './storageState.json' });
    await use();
  },

  authApi: async ({ request, browser }, use) => {
    const auth = new Authorization(request);
    const response = await auth.login();
    const state = await request.storageState();
    const context = await browser.newContext({ storageState: state });
    const page = await context.newPage();

    await use(page);
  },
});
