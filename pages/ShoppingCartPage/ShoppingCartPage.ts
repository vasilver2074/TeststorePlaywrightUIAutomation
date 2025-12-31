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

      // await page.getByRole('button').first().click();
      // await page.getByText('items').click();
      // await page.getByRole('button').nth(1).click();
      // await page.getByText('1 item').click();

    // async getProductName(): Promise<string> {
    //     return (await this.locators.productNameLocator.innerText()).toLowerCase();
    // };

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

    // async proceedToCheckout(): Promise<void> {
    //     await this.locators1.proceedToCheckoutButtonLocator.waitFor({timeout: 2000});
    //     await this.locators1.proceedToCheckoutButtonLocator.click();
    // };

}
