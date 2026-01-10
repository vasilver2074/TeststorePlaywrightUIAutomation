import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures";

test.describe("Teststore API Playwright authorization functionality", () => {
  
  test(
    "TS-011 API Authorization - User Sign in via stored state",
    {
      tag: ["@regression, @positive"],
    },
    async ({ request }) => {
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
              "PHPSESSID=e7e977561e4732e60491f687b0b2c2bc; ajs_anonymous_id=82c98552-640d-4cc7-bcbb-b5f5126d7525; PrestaShop-bd73d297b14c5070734013be8110710b=def502008e2090a9e1f460a41c749aa70db2c2fd5c4789e2961e5b2d60ea41972e852e8d41d0e9b8fd006f861a107234ec46910c18a9043120ed4220fc1ee5e71159d0a00791c2589489aba971906f2d2dde7933815b600b04034236ff211e95f22ae1eaf8735c66eb2aabcbf7da7c2f2d6aed8043bfca8a76b1af3467bd1cce9e7eb0ff2b773d22e8221c0e8373b98469121f8dd86e087135c781e322dae79d9b518f9a32eaf55f6add647f1ed1996ef2372ba03020776a2412c29b2baabc3a4ff89e218120f143dfecc0e4e6dd0dce0e8d90da18001c097e2f264d64a9e919720275ebfa1c1212cef7501862a9485f61297316c38d12f49676a2088c8236d6f9a1125c2653a36a74ea4d4273ebd4298246aee6d33889d5ce4ec4bb013c8adc0424d694be5e65a3f976d10bb4733cbc2a6714eb051c0472d676a7a13f29ba53091bb5e84c3094c8e01b3b1e5225bba180e83484ae8a9341b3322d417b10ab50ad2a73f44078e38a834ec07e8271639b111b12b100425a796676e4f3d86a6a54ef57ab2de32c70c52bcdea96d63c73fc8c2d3487be99b521316b8cae61efae6a9e59c4df6a6b267cd85608c509155b5818315bfecbeb41916c4257b3f77f0502298f2cf76e420bb9d6fc325c14e66e8cd04f6dac25cd24e82be951de06d9c0ebecfb43a4e98189ef49723d065c5fec776682540fe89debb5d475d0f294c68fb9e36adce6bd92c017df00885584484c3ab6199b13b1b8b441f08582e7f51b87fdef06f04a2067522d9f1792d5010afd",
            Referer:
              "https://teststore.automationtesting.co.uk/index.php?controller=search&s=accessories",
          },
          failOnStatusCode: true,
          data: {
            email: process.env.USER_EMAIL,
            password: process.env.USER_PASSWORD,
          },
        }
      );

      //console.log(await response.text());

      const responseBody = await response.json();
      const token = responseBody.wishlists[0].token;

      expect(token).toBeTruthy();

    }
  );
});
