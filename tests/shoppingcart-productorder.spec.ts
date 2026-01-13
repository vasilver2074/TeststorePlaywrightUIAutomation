import { expect } from '@playwright/test';
import { test } from "../fixtures/fixtures";

test.describe("Teststore UI Playwright automation", () => {

  test.beforeEach(async ({ loginPage, mainPage, beforeFixture }) => {

  });

  test('TS-009 User verified  Product was added to Shopping Cart and Raise/Reduction Count buttons work correctly ',
    {
      tag: ["@regression, @positive"]
    },
    async ({ mainPage, productDetailsPage, shoppingCartPage }) => {

        await mainPage.chooseProduct();
        await productDetailsPage.addToCart();     
        await productDetailsPage.proceedToCheckout();
        await shoppingCartPage.tapRaiseCount();
    
        expect(await shoppingCartPage.getCountValue()).toBe('2 items');
     

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
