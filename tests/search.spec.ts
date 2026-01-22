import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';

test.describe('Teststore UI Playwright automation Search functionality', () => {
  test.beforeEach(async ({ loginPage, mainPage, beforeFixture }) => {});

  test(
    'TS-001 User Sign in',
    {
      tag: ['@regression, @positive'],
    },
    async ({ mainPage }) => {
      await mainPage.isSignOutVisible();
      await mainPage.isNavigationLinksVisible();
    }
  );

  test(
    'TS-002 User performed Search with verifying search results visibility and search result count',
    {
      tag: ['@regression, @positive'],
    },
    async ({ mainPage, searchResultPage }) => {
      await mainPage.inputSearchMessage('accessories');
      await mainPage.runSearch();

      await searchResultPage.isSearchResultsVisible();
      expect(await searchResultPage.getSearchResultItemsCount()).toBe(8);
    }
  );

  // test(
  //   'TS-003 User performed Search with verifying search result count',
  //   {
  //     tag: ['@regression, @positive'],
  //   },
  //   async ({ mainPage, searchResultPage }) => {
  //     await mainPage.inputSearchMessage('accessories');
  //     await mainPage.runSearch();

  //     expect(await searchResultPage.getSearchResultItemsCount()).toBe(8);
  //   }
  // );

  test(
    'TS-003 User verified icon displaying in Search field during search',
    {
      tag: ['@regression, @positive'],
    },
    async ({ mainPage }) => {
      await mainPage.inputSearchMessage('accessories');

      expect(await mainPage.getSearchIconsItemsCount()).toBe(8);
    }
  );
});
