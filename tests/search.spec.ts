import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';

test.describe('Teststore UI Playwright automation Search functionality', () => {
  test.beforeEach(async ({ loginPage, mainPage, beforeFixture }) => {});

  test(
    'TS-001 User Sign in',
    {
      tag: ['@regression, @positive'],
    },
    async ({ mainPage }) => {
      //expect(await mainPage.isSignOutVisible()).toBe(true);
      await mainPage.isSignOutVisible();
    }
  );

  test(
    'TS-002 User performed Search with verifying network response',
    {
      tag: ['@regression, @positive'],
    },
    async ({ mainPage, searchResultPage, request }) => {
      await mainPage.inputSearchMessage('accessories');
      await mainPage.runSearch();

      expect(await searchResultPage.isSearchResultsVisible()).toBe(true);

      const response = await request.get(
        'https://teststore.automationtesting.co.uk/index.php?controller=search&s=accessories',
        {
          headers: {
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
            priority: 'u=0, i',
            'sec-ch-ua': '"Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            cookie:
              'PHPSESSID=4ab215bad06be12ba0afdaab6f95dac5; ajs_anonymous_id=74421ec6-722b-46be-b94a-a99eae08b149; PrestaShop-bd73d297b14c5070734013be8110710b=def50200ebd9a16f04a077287f86d7038018848663479b0ead91e2df2c00ea1d04603c712fcc11a8521678cf791bb7d456bb28e940837d226505b63319290628e8c74a5307f3827f2f2dc4fc78b3a90a26b11eed8d848def0c4755dbbd34a9a5cea531e4ae776d4a9d095301d7d8459251b6d1876a3116f12abadd4efeaaa8e797d11a16bee00b1d36cd72348dfe90c1ac849b4b2375b83670e15956d4452f9d5867d2191bc25b4bb2d855e921ff076bdbc21692f18e5a402fa8162841d1094f2890d575d4f56762746d6b3d6d14bffd3ff03ba0d7b4218519ae1a6a918bd99b3a093bf1390e32646d574ae922c83d666e6c7785a35e2e6bf782b48732aa1c10cddc82fc145f24d0d29ddd740386e99027acc4240af0183211908e75c1a1eca064b5dc574e878b323e5568e647d0157a30297f7045fa38706ef4005a3d01ecb9b19e3056990588a629fbc0ad5f53fbe56486935480e1d1fb2f173283b54c255f6cb9aa69152207a2b77b3c35e778d21ca5f8b91b8d465cde7f6a7bb375e8f36d6d04cdd6f023a8ee92b9f2cfae7ddbde4c12727f5b71f261888e83742d2693f437f9565798892519743996730cd1ac6cdc7cee72b7776134df0fe285087b2493b18aea974f7033a9b26a96566fda07d171e1cdbc20d4cd991cc4eafe53f8221c33d927550f4f378ebb64b7fe4e6caa2c8cbfcc166fc2722252e65740174874a2e37800bbbbb513b020b3e8ad94db3682a9e244d30ff8f6da80a72bd40b72caff0ec656aef292dddd4e16',
            Referer: 'https://teststore.automationtesting.co.uk/index.php',
          },
          failOnStatusCode: true,
        }
      );
      //console.log(await response.text());
      //const responseBody = await response.json();
      //const token = responseBody.wishlists[0].token;
      //expect(token).toBeTruthy();

      expect(response.status()).toBe(200);
      expect(await response.text()).toContain('Accessories');
    }
  );

  test(
    'TS-003 User performed Search with verifying search result count',
    {
      tag: ['@regression, @positive'],
    },
    async ({ mainPage, searchResultPage }) => {
      await mainPage.inputSearchMessage('accessories');
      await mainPage.runSearch();

      expect(await searchResultPage.getSearchResultItemsCount()).toBe(8);
    }
  );

  test(
    'TS-004 User verified icon displaying in Search field during search',
    {
      tag: ['@regression, @positive'],
    },
    async ({ mainPage }) => {
      await mainPage.inputSearchMessage('accessories');

      expect(await mainPage.getSearchIconsItemsCount()).toBe(8);
    }
  );
});
