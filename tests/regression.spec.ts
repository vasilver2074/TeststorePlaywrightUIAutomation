import { expect } from '@playwright/test';
import { test } from "../fixtures/fixtures";

test.describe("Teststore UI Playwright automation", () => {

  test.beforeEach(async ({ loginPage, mainPage ,beforeFixture }) => {
    
  });

  test('TS-001 has title',
    {
      tag: ["@regression, @positive"]
    },
    async ({ page }) => {
      
      
    });

  test.skip('get started link',
    {
      tag: ["@regression, @positive"]
    },
    async ({ page }) => {
      await page.goto('https://playwright.dev/');

      // Click the get started link.
      await page.getByRole('link', { name: 'Get started' }).click();

      // Expects page to have a heading with the name of Installation.
      await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

      // await page.goto('https://teststore.automationtesting.co.uk/index.php');
      // await page.getByRole('button', { name: 'Next' }).click();
      // await page.getByRole('link', { name: ' Sign in' }).click();
      // await page.getByRole('textbox', { name: 'Email' }).click();
      // await page.getByRole('textbox', { name: 'Email' }).fill('vasilver@gmail.com');
      // await page.getByRole('textbox', { name: 'Password input' }).click();
      // await page.getByRole('textbox', { name: 'Password input' }).fill('123qwe');
      // await page.getByRole('button', { name: 'Sign in' }).click();
    });
});
