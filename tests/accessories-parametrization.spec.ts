import { expect } from '@playwright/test';
import { test } from "../fixtures/fixtures";

test.describe("Teststore UI Playwright automation Accessories functionality", () => {

  const productAccessories = [
    { name: "Mug The best is yet to come" },
    { name: "Mug The adventure begins" },
    { name: "Mug Today is a good day" },
    { name: "Customizable mug" }
  ]

  test.beforeEach(async ({ loginPage, mainPage, beforeFixture }) => {

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
});
