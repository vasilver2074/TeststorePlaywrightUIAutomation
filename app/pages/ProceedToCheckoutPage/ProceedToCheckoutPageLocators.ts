import { Locator } from '@playwright/test';
import { BasePageLocators } from '../BasePage/BasePageLocators';

export class ProceedToCheckoutPageLocators extends BasePageLocators {

  readonly proceedToCheckoutButtonLocator: Locator = this.baseLocator.getByRole('link', {
    name: ' Proceed to checkout',
  });
}
