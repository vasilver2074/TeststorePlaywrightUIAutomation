import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class MainPageLocators extends BasePageLocators {

    readonly navigateToSighnInPageLocator: Locator = this.baseLocator.getByRole(
        'link',
        { name: ' Sign in' });
}