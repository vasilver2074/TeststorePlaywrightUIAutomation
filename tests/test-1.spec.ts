import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://teststore.automationtesting.co.uk/index.php');
  await page.getByRole('link', { name: ' Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('vasilver@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password input' }).fill('123qwe');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: ' Quick view' }).nth(1).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).first().click();
  await page.getByRole('spinbutton', { name: 'Quantity' }).click();
});
