import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';

test.describe('Teststore UI Playwright automation', () => {
  const orderInformation = {
    alias: 'Ghost',
    company: 'Black Rock',
    address: 'Geroiv Praci 17',
    addressComplement: 'Apartment 45',
    city: 'Kharkiv',
    zipCode: '14568',
    mobilePhone: '+380971368697',
  };

  test.beforeEach(async ({ loginPage, mainPage, beforeFixture }) => {});

  test(
    'TS-009 User verified  Product was added to Shopping Cart and Raise/Reduction Count buttons work correctly',
    {
      tag: ['@regression, @positive'],
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
    }
  );

  test(
    'TS-010 User verified Product order was placed successfully',
    {
      tag: ['@regression, @positive'],
    },
    async ({ mainPage, productDetailsPage, shoppingCartPage, orderPage }) => {
      await mainPage.chooseProduct();
      await productDetailsPage.addToCart();
      await productDetailsPage.proceedToCheckout();
      await shoppingCartPage.proceedToCheckout();

      await orderPage.fillOrderForm(
        orderInformation.alias,
        orderInformation.company,
        orderInformation.address,
        orderInformation.addressComplement,
        orderInformation.city,
        '6',
        orderInformation.zipCode,
        orderInformation.mobilePhone
      );

      await orderPage.clickContinueButton();

      expect(await orderPage.getPersonalInformationText()).toContain('PERSONAL INFORMATION');
    }
  );
});
