import { Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { ProductDetailsPageLocators } from "./ProductDetailsPageLocators";
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent";

export class ProductDetailsPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    readonly locators: ProductDetailsPageLocators = new ProductDetailsPageLocators(
        this.page.locator('#wrapper')
    );

    readonly locators1: ProductDetailsPageLocators = new ProductDetailsPageLocators(
        this.page.locator('.modal-content')
    );

    async getProductName(): Promise<string> {
        return (await this.locators.productNameLocator.innerText()).toLowerCase();
    };

    async addToCart(): Promise<void> {
        await this.locators.addToCartButtonLocator.click();
    };

    async proceedToCheckout(): Promise<void> {
        await this.locators1.proceedToCheckoutButtonLocator.waitFor({timeout: 2000});
        await this.locators1.proceedToCheckoutButtonLocator.click();
    };

}
