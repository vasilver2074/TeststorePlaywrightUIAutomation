import { Locator } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class ShoppingCartPageLocators extends BasePageLocators {

    readonly raiseCountButtonLocator: Locator = this.baseLocator.getByRole(
        'button'
    ).first();

    readonly getCountValueLocator: Locator = this.baseLocator.getByText(
        'items'
    );

    readonly reductionCountButtonLocator: Locator = this.baseLocator.getByRole(
        'button'
    ).nth(1);



    // await page.getByRole('button').first().click();
      // await page.getByText('items').click();
      // await page.getByRole('button').nth(1).click();
      // await page.getByText('1 item').click();

    // readonly whiteColorCheckboxLocator: Locator = this.baseLocator.getByRole(
    //     'radio', {
    //     name: 'White'
    // });

    // readonly addToWishlistButtonLocator: Locator = this.baseLocator.getByRole(
    //     'button', {
    //     name: 'favorite_border'
    // });

    // readonly productNameLocator: Locator = this.baseLocator.locator(
    //     '#main > .row.product-container.js-product-container > :nth-child(2) > h1'
    // );

    // readonly addToCartButtonLocator: Locator = this.baseLocator.getByRole(
    //     'button', { 
    //     name: ' Add to cart' 
    // });

    // readonly proceedToCheckoutButtonLocator: Locator = this.baseLocator.getByRole(
    //     'link', { 
    //     name: ' Proceed to checkout' 
    // });
}