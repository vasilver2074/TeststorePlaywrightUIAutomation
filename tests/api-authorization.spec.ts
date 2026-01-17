import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';

test.describe('Teststore API Playwright authorization functionality', () => {
  test(
    'TS-011 API Authorization - User Sign in via stored state',
    {
      tag: ['@regression, @positive'],
    },
    async ({ authApi }) => {
      await authApi.goto(
        'https://teststore.automationtesting.co.uk/index.php?controller=my-account'
      );

      await expect(authApi).toHaveURL(/my-account/);
      await expect(authApi.locator('a.logout')).toBeVisible();
    }
  );
});
