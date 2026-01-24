import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://teststore.automationtesting.co.uk/index.php');
  await page.getByRole('link', { name: ' Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('vasilver@gmail.com');
  await page.getByRole('textbox', { name: 'Password input' }).click();
  await page.getByRole('textbox', { name: 'Password input' }).fill('123qwe');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Brown bear printed sweater' }).first().click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('link', { name: ' Proceed to checkout' }).click();
  await page.getByRole('link', { name: 'Proceed to checkout' }).click();
  await page.getByRole('link', { name: ' Delete' }).click();
});
