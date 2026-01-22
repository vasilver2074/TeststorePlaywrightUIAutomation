import { Locator } from '@playwright/test';
import { BasePageLocators } from '../BasePage/BasePageLocators';

export class AccessoriesPageLocators extends BasePageLocators {
  readonly homeAccessoriesLocator: Locator = this.baseLocator
    .locator('span')
    .filter({ hasText: '' })
    .nth(4);

  readonly ceramicLocator: Locator = this.baseLocator.locator(
    'label.facet-label:has(a:has-text("Ceramic")) input'
  );

  readonly countCeramicAccessoriesLocator: Locator = this.baseLocator.locator(
    '#js-product-list .js-product'
  );

  getProductItemsLocator(productName: string): Locator {
    return this.baseLocator
      .getByRole('link', {
        name: `${productName}`,
      })
      .first();
  }

  readonly resetAllFiltersLocator: Locator = this.baseLocator.getByRole('button', {
    name: ' Clear all',
  });

  readonly countProductItemsLocator: Locator = this.baseLocator.locator(
    '[class="js-product product col-xs-12 col-sm-6 col-xl-4"]'
  );
}
