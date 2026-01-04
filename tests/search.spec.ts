import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures";

test.describe("Teststore UI Playwright automation Search functionality", () => {
  test.beforeEach(async ({ loginPage, mainPage, beforeFixture }) => {});

  test(
    "TS-001 User Sign in",
    {
      tag: ["@regression, @positive"],
    },
    async ({ mainPage }) => {
      expect(await mainPage.isSignOutVisible()).toBe(true);
    }
  );

  test(
    "TS-002 User performed Search ",
    {
      tag: ["@regression, @positive"],
    },
    async ({ mainPage, searchResultPage, request }) => {
      await mainPage.inputSearchMessage("accessories");
      await mainPage.runSearch();

      const response = await request.get(
        "https://teststore.automationtesting.co.uk/index.php?action=getAllWishlist&fc=module&module=blockwishlist&controller=action",
        {
          headers: {
            accept: "*/*",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            priority: "u=1, i",
            "sec-ch-ua":
              '"Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            cookie:
              "PHPSESSID=e7e977561e4732e60491f687b0b2c2bc; ajs_anonymous_id=d037128a-5c44-4cb9-bc76-47123095c09c; PrestaShop-bd73d297b14c5070734013be8110710b=def50200b22792c055fdc0d773edc07c683db2de75ca711c047d77427cab7ddaf79bf09eed1b5822cf9d529c72380949f9c97565f4b71440a6a7e9d6b5953900ec3612747cb44a9daba2dd29538ba9b5c3d2098fc674d48f9d6651bb98ae204daf584adff2ea225ac87587421b618d90c2a663c361e4fc469d042674e38c34668492fd91863de6a7bcb1544d2860dad5e8855ced4d5111bb4eb4bccfcbadba2988eeb16b3066bb5c3398e40d6d7704f4916f0b41f6927ace44c5b9ad2fd66daae31bb9aacde8122ef5cffb2b25a5f1c52c5e4c6ff78c45b611c1346763960d512dc6f0b088e9173dc5168a749441d9980a400fe1db89f9eab39ca1fdf9b9340d33dcafd6e05474b8e75b8808c7a86a5535516e8ebbaf0762ce84332736f779008b43cad3ce262d156de33ffb8c6db5e33fcfd85845bb2bf5f653d8470f5c5b863bc4ba16ebc3fb78c4a384ee13d2c5bfaf21d2fe9ab849e32ee5957dd4849a261ef9ffb48325fbee2d02f138ae9709824b11b5cce5076235f6e52b4a4497ef4d33c04082f7634f9e9b087efff15be87b02469dc61bf2423cc177edd054d1bfba2c26135a310d09cba1ece8e3a526f20de1cc1c7f4360dab078e3432b24c2ea06d8488b691afcce51b12e9bfb842fc5053be3ccee4c78637d46032425eaa7af136167eb8d1a1f1101d656fd87ecdedc4451c9669fa3cf23b3197a42c993288ffd2c8f7d398eebb6150c3f20f5e56921532adf7307eff638a15f78a3c3393b9e13465ee50c0b0eda7cce85c7620de469",
            Referer:
              "https://teststore.automationtesting.co.uk/index.php?controller=search&s=accessories",
          },
          failOnStatusCode: true,
        }
      );
      //console.log(await response.text());
      
      const responseBody = await response.json();
      const token = responseBody.wishlists[0].token;

      expect(token).toBeTruthy();

      expect(await searchResultPage.isSearchResultsVisible()).toBe(true);
    }
  );

  test(
    "TS-003 User performed Search with verifying search result count",
    {
      tag: ["@regression, @positive"],
    },
    async ({ mainPage, searchResultPage }) => {
      await mainPage.inputSearchMessage("accessories");
      await mainPage.runSearch();

      expect(await searchResultPage.getSearchResultItemsCount()).toBe(8);
    }
  );

  test(
    "TS-004 User verified icon displaying in Search field during search ",
    {
      tag: ["@regression, @positive"],
    },
    async ({ mainPage }) => {
      await mainPage.inputSearchMessage("accessories");

      expect(await mainPage.getSearchIconsItemsCount()).toBe(8);
    }
  );
});
