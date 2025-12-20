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

  test('TS-004 User verified icon displaying in during search - positive',
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


});
