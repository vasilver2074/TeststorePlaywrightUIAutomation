import { test } from "../fixtures/fixtures";

test.describe("Teststore API Playwright authorization functionality", () => {
  test(
    "TS-011 API Authorization - User Sign in via stored state",
    {
      tag: ["@regression, @positive"],
    },
    async ({ authApi, mainPage }) => {

      await authApi.goto("https://teststore.automationtesting.co.uk/index.php");
      await authApi.waitForTimeout(5_000);

      await mainPage.isSignOutVisible();
    }
  );
});
