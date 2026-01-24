import { test } from '../fixtures/fixtures';

test.describe('Teststore UI Playwright automation Search functionality', () => {
  test.beforeEach(async ({ loginPage, mainPage, beforeFixture }) => {});

  test(
    'TS-001 User Sign in',
    {
      tag: ['@regression, @positive'],
    },
    async ({ mainPage }) => {
      await mainPage.verifySignOutVisibility();
      await mainPage.verifyNavigationLinksVisibility();
    }
  );

  test(
    'TS-002 User performed Search with verifying search results visibility and search result count',
    {
      tag: ['@regression, @positive'],
    },
    async ({ mainPage, searchResultPage }) => {
      await mainPage.performSearch('accessories');

      await searchResultPage.isSearchResultsVisible();
      await searchResultPage.verifySearchResultItemsCount(8);
    }
  );

  test(
    'TS-003 User verified icon displaying in Search field during search',
    {
      tag: ['@regression, @positive'],
    },
    async ({ mainPage }) => {
      await mainPage.inputSearchMessage('accessories');

      await mainPage.verifySearchIconsItemsCount(8);
    }
  );
});
