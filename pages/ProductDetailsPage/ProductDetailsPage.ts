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

    async getProductName(): Promise<string> {
        return (await this.locators.productNameLocator.innerText()).toLowerCase();
    };
    
}
