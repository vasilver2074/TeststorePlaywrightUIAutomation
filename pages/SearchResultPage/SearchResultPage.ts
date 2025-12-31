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

    async getSearchResultItemsCount(): Promise<number> {
        const items = await this.locators.countAccessoriesLocator.count();
        return items;
    }

    
}
