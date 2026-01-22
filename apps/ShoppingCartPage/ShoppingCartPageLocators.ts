import { Locator } from '@playwright/test';
import { BasePageLocators } from '../BasePage/BasePageLocators';

export class ShoppingCartPageLocators extends BasePageLocators {
  readonly raiseCountButtonLocator: Locator = this.baseLocator.getByRole('button').first();

  readonly getCountValueLocator: Locator = this.baseLocator.getByText('items');

  readonly reductionCountButtonLocator: Locator = this.baseLocator.getByRole('button').nth(1);

  readonly proceedToCheckoutButtonLocator: Locator = this.baseLocator.getByRole('link', {
    name: 'Proceed to checkout',
  });

  readonly deleteProductButtonLocator: Locator = this.baseLocator.getByRole('button', {
    name: 'Delete',
  });
}
