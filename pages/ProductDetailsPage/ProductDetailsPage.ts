import { Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { ProductDetailsPageLocators } from "./ProductDetailsPageLocators";
import { step } from "../../helpers/decoracors/step";

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

    @step("Get Product Name")
    async getProductName(): Promise<string> {
        return (await this.locators.productNameLocator.innerText()).toLowerCase();
    };

    @step("Add To Cart")
    async addToCart(): Promise<void> {
        await this.locators.addToCartButtonLocator.click();
    };

    @step("Proceed To Checkout")
    async proceedToCheckout(): Promise<void> {
        await this.locators1.proceedToCheckoutButtonLocator.waitFor({timeout: 3000});
        await this.locators1.proceedToCheckoutButtonLocator.click();
    };
}
