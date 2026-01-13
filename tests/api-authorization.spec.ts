import { test } from "../fixtures/fixtures";

test.describe("Teststore API Playwright authorization functionality", () => {
  test(
    "TS-011 API Authorization - User Sign in via stored state",
    {
      tag: ["@regression, @positive"],
    },
    async ({ page, mainPage }) => {

      await page.goto("https://teststore.automationtesting.co.uk/index.php");
      await page.waitForTimeout(3_000);

      await mainPage.isSignOutVisible();
    }
  );
});
