import { expect, Locator } from "@playwright/test";
import { BaseComponentsPage } from "../BaseComponentsPage";
import { HeaderComponentLocators } from "./HeaderComponentLocators";
import { LoginPage } from "../../LoginPage/LoginPage";

export class HeaderComponent extends BaseComponentsPage {

    constructor(locator: Locator) {
        super(locator);
    };

    readonly locators: HeaderComponentLocators = new HeaderComponentLocators(this.baseLocator);
    //readonly locators: HeaderComponentLocators = new HeaderComponentLocators(this.page.locator('#login-form'));

    async clickProfileButton(): Promise<void> {
        await this.locators.profileButtonLocator.click();
    };

    async inputSearchMessage(searchMessage: string): Promise<void> {
        await this.locators.searchFieldLocator.fill(searchMessage);
    };

    async runSearch(): Promise<void> {
        await this.locators.searchFieldLocator.press('Enter');
    };

    async getSearchIconsItemsCount(): Promise<number> {
        const page = this.locators.countSearchIconsItemsLocator.page();

        await page.waitForSelector('.ui-menu-item', {
            state: 'visible',
            timeout: 2000,
        });

        return await this.locators.countSearchIconsItemsLocator.count();
    };

    async navigateToAccessoriesPage(): Promise<void> {
        await this.locators.accessoriesLinkLocator.click();
    };

    async navigateToSignInPage(): Promise<void> {
        await this.locators.navigateToSighnInPageLocator.click();
    };

    async isSignOutVisible(): Promise<boolean> {
        return await this.locators.signOutPageLocator.isVisible();
    };
}
