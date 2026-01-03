import { Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { SearchResultPageLocators } from "./SearchResultPageLocators";
import { step } from "../../helpers/decoracors/step";

export class SearchResultPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    readonly locators: SearchResultPageLocators = new SearchResultPageLocators(
        this.page.locator('#wrapper')
    );

    @step("Check Search Results visibility on Search Result Page")
    async isSearchResultsVisible(): Promise<boolean> {
        return await this.locators.searchResultsLocator.isVisible();
    }

    @step("Get count of search result items on Search Result Page")
    async getSearchResultItemsCount(): Promise<number> {
        const items = await this.locators.countAccessoriesLocator.count();
        return items;
    }

    
}
