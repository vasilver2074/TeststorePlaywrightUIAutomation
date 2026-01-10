import { expect, Locator } from "@playwright/test";
import { BaseComponentsPage } from "../BaseComponentsPage";
import { HeaderComponentLocators } from "./HeaderComponentLocators";
import { LoginPage } from "../../LoginPage/LoginPage";
import { step } from "../../../helpers/decorators/step";

export class HeaderComponent extends BaseComponentsPage {
  constructor(locator: Locator) {
    super(locator);
  }

  readonly locators: HeaderComponentLocators = new HeaderComponentLocators(
    this.baseLocator
  );

  @step("Click Profile Button")
  async clickProfileButton(): Promise<void> {
    await this.locators.profileButtonLocator.click();
  }

  @step("Input Search Message")
  async inputSearchMessage(searchMessage: string): Promise<void> {
    await this.locators.searchFieldLocator.fill(searchMessage);
  }

  @step("Run Search")
  async runSearch(): Promise<void> {
    await this.locators.searchFieldLocator.press("Enter");
  }

  @step("Get Search Icons Items Count")
  async getSearchIconsItemsCount(): Promise<number> {
    const page = this.locators.countSearchIconsItemsLocator.page();

    await page.waitForSelector(".ui-menu-item", {
      state: "visible",
      timeout: 3000,
    });

    return this.locators.countSearchIconsItemsLocator.count();
  }

  @step("Navigate to Accessories Page")
  async navigateToAccessoriesPage(): Promise<void> {
    await this.locators.accessoriesLinkLocator.click();
  }

  @step("Navigate to Sign In Page")
  async navigateToSignInPage(): Promise<void> {
    await this.locators.navigateToSighnInPageLocator.click();
  }

  @step("Is Sign Out Visible")
  async isSignOutVisible(): Promise<boolean> {
    return this.locators.signOutPageLocator.isVisible();
  }
}
