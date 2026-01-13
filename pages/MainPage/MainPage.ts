import { Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { MainPageLocators } from "./MainPageLocators";
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent";
import { step } from "../../helpers/decorators/step";

export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  readonly headerComponent = new HeaderComponent(this.page.locator("#index"));

  readonly locators: MainPageLocators = new MainPageLocators(
    this.page.locator("#index")
  );

  @step("Navigate to Sign In Page from Main Page")
  async navigateToSignInPage(): Promise<void> {
    await this.headerComponent.navigateToSignInPage();
  }

  @step("Check Sign Out visibility in Header Component")
  async isSignOutVisible(): Promise<void> {
    await this.headerComponent.isSignOutVisible();
  }

  @step("Input search message in Header Component")
  async inputSearchMessage(searchMessage: string): Promise<void> {
    await this.headerComponent.inputSearchMessage(searchMessage);
  }

  @step("Run search from Header Component")
  async runSearch(): Promise<void> {
    await this.headerComponent.runSearch();
  }

  @step("Get count of search icons items from Header Component")
  async getSearchIconsItemsCount(): Promise<number> {
    return await this.headerComponent.getSearchIconsItemsCount();
  }

  @step("Navigate to Accessories Page from Main Page")
  async navigateToAccessoriesPage(): Promise<void> {
    await this.headerComponent.navigateToAccessoriesPage();
  }

  @step("Choose product from Main Page")
  async chooseProduct(): Promise<void> {
    await this.locators.chooseProductLocator.click();
  }

  @step("Hover product and click Quick View from Main Page")
  async hoverProduct(): Promise<void> {
    await this.locators.chooseProductLocator.hover();
    await this.locators.chooseQuickViewLocator.waitFor({ timeout: 1000 });
    await this.locators.chooseQuickViewLocator.click();
  }

  @step("Check Quick View modal visibility from Main Page")
  async isQuickViewModalVisible(): Promise<boolean> {
    await this.locators.quickViewModalLocator.waitFor({ timeout: 3000 });
    return await this.locators.quickViewModalLocator.isVisible();
  }
}
