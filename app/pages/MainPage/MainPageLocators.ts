import { Locator } from '@playwright/test';
import { BasePageLocators } from '../BasePage/BasePageLocators';

export class MainPageLocators extends BasePageLocators {
  readonly countSearchIconsItensLocator: Locator =
    this.baseLocator.locator('[class="ui-menu-item"]');

  readonly chooseProductLocator: Locator = this.baseLocator
    .getByRole('link', {
      name: 'Hummingbird printed t-shirt',
    })
    .first();

  readonly chooseQuickViewLocator: Locator = this.baseLocator
    .getByRole('link', {
      name: ' Quick view',
    })
    .first();

  readonly quickViewModalLocator: Locator = this.baseLocator
    .locator('#quickview-modal-1-1')
    .getByRole('heading', {
      name: 'Hummingbird printed t-shirt',
    });
}
