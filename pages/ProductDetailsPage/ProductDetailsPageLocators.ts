import { Locator } from '@playwright/test';
import { BasePageLocators } from '../BasePage/BasePageLocators';

export class ProductDetailsPageLocators extends BasePageLocators {
  readonly blackColorCheckboxLocator: Locator = this.baseLocator.getByRole('radio', {
    name: 'Black',
  });

  readonly whiteColorCheckboxLocator: Locator = this.baseLocator.getByRole('radio', {
    name: 'White',
  });

  readonly addToWishlistButtonLocator: Locator = this.baseLocator.getByRole('button', {
    name: 'favorite_border',
  });

  readonly productNameLocator: Locator = this.baseLocator.locator(
    '#main > .row.product-container.js-product-container > :nth-child(2) > h1'
  );

  readonly addToCartButtonLocator: Locator = this.baseLocator.getByRole('button', {
    name: ' Add to cart',
  });

  readonly proceedToCheckoutButtonLocator: Locator = this.baseLocator.getByRole('link', {
    name: ' Proceed to checkout',
  });
}
