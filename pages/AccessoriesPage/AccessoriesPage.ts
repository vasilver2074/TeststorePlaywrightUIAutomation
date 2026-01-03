import { expect, Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { AccessoriesPageLocators } from "./AccessoriesPageLocators";
import { step } from "../../helpers/decoracors/step";

export class AccessoriesPage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    readonly locators: AccessoriesPageLocators = new AccessoriesPageLocators(
        this.page.locator('#wrapper')
    );

    @step("Click Home Accessories")
    async clickHomeAccessories(): Promise<void> {
        await this.locators.homeAccessoriesLocator.click();
    };

    @step("Click Ceramic")
    async clickCeramic(): Promise<void> {
        await this.locators.ceramicLocator.waitFor({ state: 'attached' });
        await this.locators.ceramicLocator.check();
    };

    @step("Get Ceramic Accessories Count")
    async getCeramicAccessoriesCount(): Promise<number> {
        await expect(this.locators.countCeramicAccessoriesLocator
        ).toHaveCount(4, { timeout: 2000 });

        return this.locators.countCeramicAccessoriesLocator.count();
    };

    @step("Click Product Item")
    async clickProductItem(productName: string): Promise<void> {
        await this.locators.getProductItemsLocator(productName).click();
    };

    @step("Reset All Filters")
    async resetAllFilters(): Promise<void> {
        await this.locators.resetAllFiltersLocator.click();
    };

    @step("Get Search Result Items Count")
    async getSearchResultItemsCount(): Promise<number> {
        await expect(this.locators.countProductItemsLocator
        ).toHaveCount(11, { timeout: 3000 });

        return this.locators.countProductItemsLocator.count();
    };


}
