import { expect, Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { AccessoriesPageLocators } from "./AccessoriesPageLocators";

export class AccessoriesPage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    readonly locators: AccessoriesPageLocators = new AccessoriesPageLocators(
        this.page.locator('#wrapper')
    );

    async clickHomeAccessories(): Promise<void> {
        await this.locators.homeAccessoriesLocator.click();
    };

    async clickCeramic(): Promise<void> {
        await this.locators.ceramicLocator.waitFor({ state: 'attached' });
        await this.locators.ceramicLocator.check();
    };

    async getCeramicAccessoriesCount(): Promise<number> {
        await expect( this.locators.countCeramicAccessoriesLocator
        ).toHaveCount(4, { timeout: 2000 });

        return this.locators.countCeramicAccessoriesLocator.count();
    };

    async clickProductAccessories(productName: string): Promise<void> {
        await this.locators.getProductAccessoriesLocator(productName).click();
    };

}
