import { Page } from '@playwright/test';
import { BasePage } from '../BasePage/BasePage';
import { ProceedToCheckoutPageLocators } from './ProceedToCheckoutPageLocators';
import { step } from '../../helpers/decorators/step';

export class ProceedToCheckoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  readonly locators: ProceedToCheckoutPageLocators = new ProceedToCheckoutPageLocators(
    this.page.locator('.modal-content')
  );

  @step('Proceed To Checkout')
  async proceedToCheckout(): Promise<void> {
    await this.locators.proceedToCheckoutButtonLocator.waitFor({
      timeout: 10000,
    });
    await this.locators.proceedToCheckoutButtonLocator.click();
  }
}
