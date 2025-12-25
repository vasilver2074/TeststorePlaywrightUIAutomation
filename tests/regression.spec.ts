import { expect } from '@playwright/test';
import { test } from "../fixtures/fixtures";

test.describe("Teststore UI Playwright automation", () => {

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

      test('TS-006 User verified Ceramic filter in Accessories page - positive',
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

          // await page.getByRole('link', { name: 'Hummingbird printed t-shirt' }).first().click();
          // await page.getByRole('radio', { name: 'White' }).check();
          // await page.getByRole('radio', { name: 'Black' }).check();
          // await page.goto('https://teststore.automationtesting.co.uk/index.php?id_product=1&id_product_attribute=2&rewrite=hummingbird-printed-t-shirt&controller=product#/1-size-s/11-color-black');
          // await page.getByRole('button').first().click();
          // await page.getByRole('button').first().click();
          // await page.getByRole('button', { name: 'favorite_border' }).click();
          // await page.getByText('My wishlist', { exact: true }).click();
          // await page.getByRole('button', { name: ' Add to cart' }).click();
          // await page.getByRole('button', { name: 'Close' }).click();
        });
    });
});
