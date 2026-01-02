import { expect } from '@playwright/test';
import { test } from "../fixtures/fixtures";

test.describe("Teststore UI Playwright automation filter and hover functionality", () => {

  test.beforeEach(async ({ loginPage, mainPage, beforeFixture }) => {

  });

  test('TS-005 User verified Ceramic filter in Accessories page',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage, accessoriesPage }) => {
      await test.step('User navigates to Accessories page', async () => {
        await mainPage.navigateToAccessoriesPage();
      });

      await test.step('User tap Home Accessories checkbox', async () => {
        await accessoriesPage.clickHomeAccessories();
      });

      await test.step('User tap Ceramic checkbox', async () => {
        await accessoriesPage.clickCeramic();
      });

      await test.step('Verify that filtered items count is equal to 4', async () => {
        expect(await accessoriesPage.getCeramicAccessoriesCount()).toBe(4);
      });
    });

  test('TS-007 User verified filters reset works correctly ',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage, accessoriesPage }) => {
      await test.step('User navigates to Accessories page', async () => {
        await mainPage.navigateToAccessoriesPage()
      });

      await test.step('User tap Home Accessories checkbox', async () => {
        await accessoriesPage.clickHomeAccessories();
      });

      await test.step('User tap Ceramic checkbox', async () => {
        await accessoriesPage.clickCeramic();
      });

      await test.step('Verify that during search the number of displaying icons is equal to 4', async () => {
        expect(await accessoriesPage.getCeramicAccessoriesCount()).toBe(4);
      });

      await test.step('User resets all filters', async () => {
        await accessoriesPage.resetAllFilters();
      });

      await test.step('Verify that after resets all filters Product items count is equal to 11', async () => {
        expect(await accessoriesPage.getSearchResultItemsCount()).toBe(11);
      });
    });

  test('TS-008 User verified hover on Product and Quick view popup works correctly ',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage }) => {

      await test.step('User hovers on product and clicks on Quick View', async () => {
        await mainPage.hoverProduct();
      });

      await test.step('Verify that Quick View modal is visible', async () => {
        expect(await mainPage.isQuickViewModalVisible()).toBe(true);
      });
    });
});
