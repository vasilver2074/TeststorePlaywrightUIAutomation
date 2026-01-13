import { Locator } from '@playwright/test';
import { BasePageLocators } from '../BasePage/BasePageLocators';

export class OrderPageLocators extends BasePageLocators {
  readonly aliasLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Alias',
  });

  readonly companyLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Company',
  });

  readonly addressLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Address',
    exact: true,
  });

  readonly addressComplementLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Address Complement',
  });

  readonly cityLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'City',
  });

  readonly stateLocator: Locator = this.baseLocator.getByLabel('State');
  readonly zipPostalCodeLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Zip/Postal Code',
  });

  readonly phoneLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Phone',
  });

  readonly continueButtonLocator: Locator = this.baseLocator.getByRole('button', {
    name: 'Continue',
  });

  readonly personalInformationLocator: Locator = this.baseLocator.getByRole('heading', {
    name: ' Personal Information',
  });
}
