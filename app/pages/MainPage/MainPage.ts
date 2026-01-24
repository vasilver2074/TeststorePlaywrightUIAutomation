import { expect, Page } from '@playwright/test';
import { BasePage } from '../BasePage/BasePage';
import { MainPageLocators } from './MainPageLocators';
import { HeaderComponent } from '../components/HeaderComponent/HeaderComponent';
import { step } from '../../../helpers/decorators/step';

export class MainPage extends BasePage {

  readonly headerComponent = new HeaderComponent(this.page.locator('#index'));

  readonly locators: MainPageLocators = new MainPageLocators(this.page.locator('#index'));

  @step('Navigate to Sign In Page from Main Page')
  async navigateToSignInPage(): Promise<void> {
    await this.headerComponent.navigateToSignInPage();
  }

  @step('Check Sign Out visibility in Header Component')
  async verifySignOutVisibility(): Promise<void> {
    await this.headerComponent.verifySignOutVisibility();
  }

  @step('Check Navigation Links visibility in Header Component')
  async verifyNavigationLinksVisibility(): Promise<void> {
    await this.headerComponent.isNavigationLinksVisible();
  }

  @step('Input search message in Header Component')
  async inputSearchMessage(searchMessage: string): Promise<void> {
    await this.headerComponent.inputSearchMessage(searchMessage);
  }

  @step('Run search from Header Component')
  async runSearch(): Promise<void> {
    await this.headerComponent.runSearch();
  }

  @step('Perform serch')
  async performSearch(searchMessage: string): Promise<void> {
    await this.headerComponent.inputSearchMessage(searchMessage);
    await this.headerComponent.runSearch();
  }

  @step('Get count of search icons items from Header Component')
  async verifySearchIconsItemsCount(itemCount: number): Promise<void> {
    await this.headerComponent.verifySearchIconsItemsCount(itemCount);
  }

  @step('Navigate to Accessories Page from Main Page')
  async navigateToAccessoriesPage(): Promise<void> {
    await this.headerComponent.navigateToAccessoriesPage();
  }

  @step('Choose product from Main Page')
  async chooseProduct(): Promise<void> {
    await this.locators.chooseProductLocator.click();
  }

  @step('Hover product and click Quick View from Main Page')
  async hoverClickProduct(): Promise<void> {
    await this.locators.chooseProductLocator.hover();
    await this.locators.chooseQuickViewLocator.waitFor({ timeout: 1000 });
    await this.locators.chooseQuickViewLocator.click();
  }

  @step('Check Quick View modal visibility from Main Page')
  async isQuickViewModalVisible(): Promise<void> {
    await this.locators.quickViewModalLocator.waitFor({ timeout: 3000 });
    await expect(this.locators.quickViewModalLocator).toBeVisible();
  }

  @step('Increase quantity of product from Main Page')
  async increaseQuantity(): Promise<void> {
    await this.locators.quantityIncreaseLocator.click();
  }

  @step('Verify count value from Main Page')
  async verifyCountValue(countValue: string): Promise<void> {
    await this.page.waitForLoadState('networkidle');
    await expect(this.locators.getCountValueLocator).toHaveValue(countValue);
  }
}
