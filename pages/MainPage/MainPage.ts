import { Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { MainPageLocators } from "./MainPageLocators";
import { SearchResultPage } from "../SearchResultPage/SearchResultPage";

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

    async inputSearchMessage(searchMessage: string): Promise<SearchResultPage> {
        await this.locators.searchFieldLocator.fill(searchMessage);
        await this.locators.searchFieldLocator.press('Enter');
        return new SearchResultPage(this.page);
    }
}
