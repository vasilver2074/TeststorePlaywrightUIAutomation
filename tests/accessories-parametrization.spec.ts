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
        
          await mainPage.navigateToAccessoriesPage()
          await accessoriesPage.clickHomeAccessories();       
          await accessoriesPage.clickCeramic();      
          await accessoriesPage.clickProductItem(product.name);
       
          expect(await productDetailsPage.getProductName()).toContain(`${product.name.toLowerCase()}`);
        
      });
  }
});
