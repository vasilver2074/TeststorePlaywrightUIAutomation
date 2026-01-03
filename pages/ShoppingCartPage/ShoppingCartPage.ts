import { Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { ShoppingCartPageLocators } from "./ShoppingCartPageLocators";
import { step } from "../../helpers/decoracors/step";

export class ShoppingCartPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    readonly locators: ShoppingCartPageLocators = new ShoppingCartPageLocators(
        this.page.locator('#wrapper')
    );

    @step("Tap Raise Count Button")
    async tapRaiseCount(): Promise<void> {
        await this.locators.raiseCountButtonLocator.click();
    };

    @step("Tap Reduction Count Button")
    async tapReductionCount(): Promise<void> {
        await this.locators.reductionCountButtonLocator.click();
    }

    @step("Get Count Value")
    async getCountValue(): Promise<string> {
        await this.page.waitForLoadState('networkidle');
        return await this.locators.getCountValueLocator.innerText();
    }

    @step("Proceed To Checkout")
    async proceedToCheckout(): Promise<void> {
        await this.locators.proceedToCheckoutButtonLocator.click();
    };

}
