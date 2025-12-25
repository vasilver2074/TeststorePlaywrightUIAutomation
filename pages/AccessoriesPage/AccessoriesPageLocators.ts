import { Locator } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class AccessoriesPageLocators extends BasePageLocators {

    readonly homeAccessoriesLocator: Locator = this.baseLocator.locator(
        'span')
        .filter({ hasText: '' })
        .nth(4);

    readonly ceramicLocator: Locator = this.baseLocator.locator(
        'label.facet-label:has(a:has-text("Ceramic")) input'
    );

    readonly countCeramicAccessoriesLocator: Locator = this.baseLocator.locator('#js-product-list .js-product');
}