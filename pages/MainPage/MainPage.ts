import { Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { MainPageLocators } from "./MainPageLocators";
import { SearchResultPage } from "../SearchResultPage/SearchResultPage";
import { time } from "node:console";

export class MainPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    readonly locators: MainPageLocators = new MainPageLocators(
        this.page.locator('#index')
    );

    async navigateToSignInPage(): Promise<void> {
        await this.locators.navigateToSighnInPageLocator.click();
    }

    async isSignOutVisible(): Promise<boolean> {
        return await this.locators.signOutPageLocator.isVisible();
    }

    async inputSearchMessage(searchMessage: string): Promise<void> {
        await this.locators.searchFieldLocator.fill(searchMessage);
    }

    async runSearch(): Promise<SearchResultPage> {
        await this.locators.searchFieldLocator.press('Enter');
        return new SearchResultPage(this.page);
    }

    async getSearchIconsItemsCount(): Promise<number> {
        await this.page.waitForSelector('[class="ui-menu-item"]', { state: 'visible', timeout: 2000 });
        const items = await this.locators.countSearchIconsItensLocator.count(); //await page.waitForSelector('your-selector', { state: 'visible', timeout: 5000 });
        return items;
    }
}
