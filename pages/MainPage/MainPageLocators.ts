import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class MainPageLocators extends BasePageLocators {

    readonly countSearchIconsItensLocator: Locator = this.baseLocator.locator(
        '[class="ui-menu-item"]'
    );
}