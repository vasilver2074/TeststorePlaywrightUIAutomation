import { test } from '../fixtures/fixtures';

test.describe('Teststore UI Playwright automation filter and hover functionality', () => {
  test.beforeEach(async ({ loginPage, mainPage, beforeFixture }) => {});

  test(
    'TS-005 User verified Ceramic filter in Accessories page',
    {
      tag: ['@regression, @positive'],
    },
    async ({ mainPage, accessoriesPage }) => {
      await mainPage.navigateToAccessoriesPage();
      await accessoriesPage.clickHomeAccessories();
      await accessoriesPage.clickCeramic();

      await accessoriesPage.verifyCeramicAccessoriesCount(4);
    }
  );

  test(
    'TS-007 User verified filters reset works correctly',
    {
      tag: ['@regression, @positive'],
    },
    async ({ mainPage, accessoriesPage }) => {
      await mainPage.navigateToAccessoriesPage();
      await accessoriesPage.clickHomeAccessories();
      await accessoriesPage.clickCeramic();

      await accessoriesPage.verifyCeramicAccessoriesCount(4);

      await accessoriesPage.resetAllFilters();

      await accessoriesPage.verifySearchResultItemsCount(11);
    }
  );

  test(
    'TS-008 User verified hover on Product and Quick view popup works correctly',
    {
      tag: ['@regression, @positive'],
    },
    async ({ mainPage }) => {
      await mainPage.hoverClickProduct();

      await mainPage.isQuickViewModalVisible();

      await mainPage.increaseQuantity();

      await mainPage.verifyCountValue('2');
    }
  );
});
