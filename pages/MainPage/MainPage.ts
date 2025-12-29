import { Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { MainPageLocators } from "./MainPageLocators";
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent";

export class MainPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    readonly headerComponent = new HeaderComponent(this.page.locator('#index')); //#header

    readonly locators: MainPageLocators = new MainPageLocators(
        this.page.locator('#index')
    );

    async navigateToSignInPage(): Promise<void> {
        await this.headerComponent.navigateToSignInPage();
    }

    async isSignOutVisible(): Promise<boolean> {
        return await this.headerComponent.isSignOutVisible();
    }

    async inputSearchMessage(searchMessage: string): Promise<void> {
        await this.headerComponent.inputSearchMessage(searchMessage );
    }

    async runSearch(): Promise<void> {
        await this.headerComponent.runSearch();
    }

    async getSearchIconsItemsCount(): Promise<number> {
        return await this.headerComponent.getSearchIconsItemsCount();

    }

    async navigateToAccessoriesPage(): Promise<void> {
        await this.headerComponent.navigateToAccessoriesPage();
    }

    async chooseProduct(): Promise<void> {
        await this.locators.chooseProductLocator.click();
    }
}
