import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class MainPageLocators extends BasePageLocators {

    readonly navigateToSighnInPageLocator: Locator = this.baseLocator.getByRole(
        'link',
        { name: ' Sign in' }
    );

    readonly signOutPageLocator: Locator = this.baseLocator.getByRole(
        'link',
        { name: ' Sign out' }
    );

    readonly searchFieldLocator: Locator = this.baseLocator.getByRole(
        'textbox', 
        { name: 'Search' }
    );
}