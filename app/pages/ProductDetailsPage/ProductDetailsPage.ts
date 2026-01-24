import { Page } from '@playwright/test';
import { BasePage } from '../BasePage/BasePage';
import { ProductDetailsPageLocators } from './ProductDetailsPageLocators';
import { step } from '../../../helpers/decorators/step';

export class ProductDetailsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  readonly locators: ProductDetailsPageLocators = new ProductDetailsPageLocators(
    this.page.locator('#wrapper')
  );

  @step('Get Product Name')
  async getProductName(): Promise<string> {
    return (await this.locators.productNameLocator.innerText()).toLowerCase();
  }

  @step('Add To Cart')
  async addToCart(): Promise<void> {
    await this.locators.addToCartButtonLocator.click();
  }
}
