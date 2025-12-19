import { Locator } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class SearchResultPageLocators extends BasePageLocators {

    readonly searchResultsLocator: Locator = this.baseLocator.getByRole(
        'heading',
        { name: 'Search results' }
    );

    readonly countAccessoriesLocator: Locator = this.baseLocator.locator(
        '[class="js-product product col-xs-12 col-sm-6 col-xl-3"]'
    );

    // readonly searchFieldLocator: Locator = this.baseLocator.getByRole(
    //     'textbox', 
    //     { name: 'Search' }
    // );
}