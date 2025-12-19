import { Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { SearchResultPageLocators } from "./SearchResultPageLocators";

export class SearchResultPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    readonly locators: SearchResultPageLocators = new SearchResultPageLocators(
        this.page.locator('#wrapper')
    );

    async isSearchResultsVisible(): Promise<boolean> {
        return await this.locators.searchResultsLocator.isVisible();
    }

    async getCartItemsCount(): Promise<number> {
        const items = await this.locators.countAccessoriesLocator.count();
        return items;
    }

    // async navigateToSignInPage(): Promise<void> {   searchResultsLocator
    //     await this.locators.navigateToSighnInPageLocator.click();
    // }

    // async isSignOutVisible(): Promise<boolean> {
    //     return await this.locators.signOutPageLocator.isVisible();
    // }

    // async inputSearchMessage(searchMessage: string): Promise<void> {
    //     await this.locators.searchFieldLocator.fill(searchMessage);
    //     await this.locators.searchFieldLocator.press('Enter');
    // }
}
