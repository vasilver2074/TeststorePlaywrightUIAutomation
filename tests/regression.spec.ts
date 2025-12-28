import { expect } from '@playwright/test';
import { test } from "../fixtures/fixtures";

test.describe("Teststore UI Playwright automation", () => {

  const productAccessories = [
    {name: "Mug The best is yet to come"},
    {name: "Mug The adventure begins"},
    {name: "Mug Today is a good day"},
    {name: "Customizable mug"}
  ]

  test.beforeEach(async ({ loginPage, mainPage, beforeFixture }) => {

  });

  test('TS-001 User Sign in - positive',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage }) => {
      await test.step('Verify that the sign out button is visible', async () => {
        expect(await mainPage.isSignOutVisible()).toBe(true);
      });
    });

  test('TS-002 User performed Search - positive',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage, searchResultPage }) => {
      await test.step('Verify that user can enter search message', async () => {
        await mainPage.inputSearchMessage('accessories');
      });

      await test.step('Verify that user can run search', async () => {
        await mainPage.runSearch();
      });

      await test.step('Verify that search result is displayed in Search Result page', async () => {
        expect(await searchResultPage.isSearchResultsVisible()).toBe(true);
      });
    });

  test('TS-003 User performed Search with verifying search result count - positive',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage, searchResultPage }) => {
      await test.step('Verify that user can enter search message', async () => {
        await mainPage.inputSearchMessage('accessories');
      });

      await test.step('Verify that user can run search', async () => {
        await mainPage.runSearch();
      });

      await test.step('Verify that the search result count is equal to 8', async () => {
        expect(await searchResultPage.getCartItemsCount()).toBe(8);
      });
    });

  test('TS-004 User verified icon displaying in Search field during search - positive',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage, searchResultPage }) => {
      await test.step('Verify that the sign out button is visible', async () => {
        await mainPage.inputSearchMessage('accessories');
      });

      await test.step('Verify that during search the number of displaying icons is equal to 8', async () => {
        expect(await mainPage.getSearchIconsItemsCount()).toBe(8);
      });
    });

  test('TS-005 User verified Ceramic filter in Accessories page - positive',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage, accessoriesPage }) => {
      await test.step('Verify that the sign out button is visible', async () => {
        await mainPage.navigateToAccessoriesPage()
      });

      await test.step('Verify that during search the number of displaying icons is equal to 8', async () => {
        await accessoriesPage.clickHomeAccessories();
      });

      await test.step('Verify that during search the number of displaying icons is equal to 8', async () => {
        await accessoriesPage.clickCeramic();
      });

      await test.step('Verify that during search the number of displaying icons is equal to 4', async () => {
        expect(await accessoriesPage.getCeramicAccessoriesCount()).toBe(4);
      });
    });

  for (const product of productAccessories) {
    test(`TS-006 User verified Product page ${product.name} - positive`,
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage, accessoriesPage, productDetailsPage }) => {
      await test.step('Verify that the sign out button is visible', async () => {
        await mainPage.navigateToAccessoriesPage()
      });

      await test.step('Verify that during search the number of displaying icons is equal to 8', async () => {
        await accessoriesPage.clickHomeAccessories();
      });

      await test.step('Verify that during search the number of displaying icons is equal to 8', async () => {
        await accessoriesPage.clickCeramic();
      });

      await test.step('Verify that during search the number of displaying icons is equal to 8', async () => {
        await accessoriesPage.clickProductAccessories(product.name);
      });

      await test.step('Verify that during search the number of displaying icons is equal to 4', async () => {
        expect(await productDetailsPage.getProductName()).toContain(`${product.name.toLowerCase()}`);
      });
    });
  }

  test('TS-007 User verified Ceramic filter in Accessories page - positive',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage, accessoriesPage }) => {
      await test.step('Verify that the sign out button is visible', async () => {
        await mainPage.navigateToAccessoriesPage()
      });

      await test.step('Verify that during search the number of displaying icons is equal to 8', async () => {
        await accessoriesPage.clickHomeAccessories();
      });

      await test.step('Verify that during search the number of displaying icons is equal to 8', async () => {
        await accessoriesPage.clickCeramic();
      });

      await test.step('Verify that during search the number of displaying icons is equal to 4', async () => {
        expect(await accessoriesPage.getCeramicAccessoriesCount()).toBe(4);
      });

      // await page.getByText('Size: M').click();
      // await page.getByLabel('Size').selectOption('1');
      // await page.getByText('Size: S').click();
      // await page.getByRole('radio', { name: 'White' }).check();
      // await page.getByText('Color: White').click();
      // await page.getByRole('radio', { name: 'Black' }).check();
      // await page.getByRole('button').first().click();
      // await page.getByRole('spinbutton', { name: 'Quantity' }).click();
      // await page.getByRole('button', { name: 'favorite_border' }).click();
      // await page.getByRole('button', { name: 'Close' }).click();
      // await page.getByRole('button', { name: ' Add to cart' }).click();
      // await page.getByRole('button', { name: 'Close' }).click();
      // await page.getByRole('button', { name: 'Close' }).click()
    });
});
