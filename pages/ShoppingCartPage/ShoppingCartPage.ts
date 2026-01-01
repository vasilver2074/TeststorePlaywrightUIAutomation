import { Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { ShoppingCartPageLocators } from "./ShoppingCartPageLocators";

export class ShoppingCartPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    readonly locators: ShoppingCartPageLocators = new ShoppingCartPageLocators(
        this.page.locator('#wrapper')
    );

    async tapRaiseCount(): Promise<void> {
        await this.locators.raiseCountButtonLocator.click();
    };

    async tapReductionCount(): Promise<void> {
        await this.locators.reductionCountButtonLocator.click();
    }

    async getCountValue(): Promise<string> {
        await this.page.waitForLoadState('networkidle');
        return await this.locators.getCountValueLocator.innerText();
    }

    async proceedToCheckout(): Promise<void> {
        await this.locators.proceedToCheckoutButtonLocator.click();
    };

}
