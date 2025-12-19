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

  test('TS-002 User Sign in - positive',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage, searchResultPage }) => {
      await test.step('Verify that the sign out button is visible', async () => {
        await mainPage.inputSearchMessage('accessories');
      });

      await test.step('Verify that the sign out button is visible', async () => {
        expect(await searchResultPage.isSearchResultsVisible()).toBe(true);
      });
    });

    test('TS-003 User Sign in - positive',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage, searchResultPage }) => {
      await test.step('Verify that the sign out button is visible', async () => {
        await mainPage.inputSearchMessage('accessories');
      });

      await test.step('Verify that the sign out button is visible', async () => {
        expect(await searchResultPage.getCartItemsCount()).toBe(8);
      });
    });
});
