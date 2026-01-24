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
    async ({ mainPage, productDetailsPage, shoppingCartPage, proceedToCheckoutPage }) => {
      await mainPage.chooseProduct();
      await productDetailsPage.addToCart();
      await proceedToCheckoutPage.proceedToCheckout();
      await shoppingCartPage.tapRaiseCount();

      await shoppingCartPage.verifyCountValue('2 items');
    }
  );

  test(
    'TS-010 User verified Product order was placed successfully',
    {
      tag: ['@regression, @positive'],
    },
    async ({
      mainPage,
      productDetailsPage,
      shoppingCartPage,
      proceedToCheckoutPage,
      orderPage,
      page,
    }) => {
      await mainPage.chooseProduct();
      await productDetailsPage.addToCart();
      await proceedToCheckoutPage.proceedToCheckout();
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

      await expect(page.locator('#checkout-personal-information-step h1')).toContainText(
        'Personal Information'
      );
    }
  );
});
