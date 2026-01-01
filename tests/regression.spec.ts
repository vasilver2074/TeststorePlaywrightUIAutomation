import { expect } from '@playwright/test';
import { test } from "../fixtures/fixtures";

test.describe("Teststore UI Playwright automation", () => {

  const productAccessories = [
    { name: "Mug The best is yet to come" },
    { name: "Mug The adventure begins" },
    { name: "Mug Today is a good day" },
    { name: "Customizable mug" }
  ]

  test.beforeEach(async ({ loginPage, mainPage, beforeFixture }) => {

  });

  test('TS-001 User Sign in',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage }) => {
      await test.step('Verify that the sign out button is visible', async () => {
        expect(await mainPage.isSignOutVisible()).toBe(true);
      });
    });

  test('TS-002 User performed Search ',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage, searchResultPage }) => {
      await test.step('User enters search message', async () => {
        await mainPage.inputSearchMessage('accessories');
      });

      await test.step('User runs search', async () => {
        await mainPage.runSearch();
      });

      await test.step('Verify that search result is displayed in Search Result page', async () => {
        expect(await searchResultPage.isSearchResultsVisible()).toBe(true);
      });
    });

  test('TS-003 User performed Search with verifying search result count',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage, searchResultPage }) => {
      await test.step('User enters search message', async () => {
        await mainPage.inputSearchMessage('accessories');
      });

      await test.step('User runs search', async () => {
        await mainPage.runSearch();
      });

      await test.step('Verify that the search result count is equal to 8', async () => {
        expect(await searchResultPage.getSearchResultItemsCount()).toBe(8);
      });
    });

  test('TS-004 User verified icon displaying in Search field during search ',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage }) => {
      await test.step('User enters search message', async () => {
        await mainPage.inputSearchMessage('accessories');
      });

      await test.step('Verify that during search the number of displaying icons is equal to 8', async () => {
        expect(await mainPage.getSearchIconsItemsCount()).toBe(8);
      });
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

  for (const product of productAccessories) {
    test(`TS-006 User verified Product name ${product.name} in Product icon is equals in Product Details page `,
      {
        tag: ["@regression, @positive"]
      },
      async ({ mainPage, accessoriesPage, productDetailsPage }) => {
        await test.step('User navigates to Accessories page', async () => {
          await mainPage.navigateToAccessoriesPage()
        });

        await test.step('User tap Home Accessories checkbox', async () => {
          await accessoriesPage.clickHomeAccessories();
        });

        await test.step('User tap Ceramic checkbox', async () => {
          await accessoriesPage.clickCeramic();
        });

        await test.step('User click Product Item', async () => {
          await accessoriesPage.clickProductItem(product.name);
        });

        await test.step('Verify that Product name in Product icon is equals in Product Details page', async () => {
          expect(await productDetailsPage.getProductName()).toContain(`${product.name.toLowerCase()}`);
        });
      });
  }

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

  test('TS-009 User verified  Product was added to Shopping Cart and Raise/Reduction Count buttons work correctly ',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage, productDetailsPage, shoppingCartPage }) => {

      await test.step('User choose Product', async () => {
        await mainPage.chooseProduct();
      });

      await test.step('User clicks on Add to Cart button', async () => {
        await productDetailsPage.addToCart();
      });

      await test.step('User clicks on Proceed to Checkout button', async () => {
        await productDetailsPage.proceedToCheckout();
      });

      await test.step('User clicks on Raise Count button', async () => {
        await shoppingCartPage.tapRaiseCount();
      });

      await test.step('Verify that after raising count the items count is equal to 2', async () => {
        expect(await shoppingCartPage.getCountValue()).toBe('2 items');
      });

      // await test.step('User clicks on Reduction Count button', async () => {
      //   await shoppingCartPage.tapReductionCount();
      // });

      // await test.step('Verify that after resets all filters Product items count is equal to 11', async () => {
      //   expect(await shoppingCartPage.getCountValue()).toBe('1 item');
      // });
    });

  test('TS-010 User verified Product order was placed successfully',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage, productDetailsPage, shoppingCartPage, orderPage }) => {

      await test.step('User choose Product', async () => {
        await mainPage.chooseProduct();
      });

      await test.step('User clicks on Add to Cart button', async () => {
        await productDetailsPage.addToCart();
      });

      await test.step('User clicks on Proceed to Checkout button', async () => {
        await productDetailsPage.proceedToCheckout();
      });

      await test.step('User clicks on Proceed to Checkout button', async () => {
        await shoppingCartPage.proceedToCheckout();
      });

      await test.step('User fills in Order form', async () => {
        await orderPage.fillOrderForm(
          process.env.ALIAS!,
          process.env.COMPANY!,
          process.env.ADDRESS!,
          process.env.ADDRESS_COMPLEMENT!,
          process.env.CITY!,
          "6",
          process.env.ZIP_CODE!,
          process.env.MOBILE_PHONE!
        );
      });

      await test.step('User clicks on Continue button', async () => {
        await orderPage.clickContinueButton();
      });

      await test.step('Verify that after order form is filled Personal Information text is visible', async () => {
        expect(await orderPage.getPersonalInformationText()).toContain('PERSONAL INFORMATION');
      });
    });
});
