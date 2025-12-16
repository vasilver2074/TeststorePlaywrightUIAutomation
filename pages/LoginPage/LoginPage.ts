import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { LoginPageLocators } from "./LoginPageLocators";

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    // async login(username: string, password: string): Promise<void> {
    //   await this.locators.userNameInputLocator.fill(username);
    //   await this.locators.passwordInputLocator.fill(password);
    //   await this.locators.loginButtonLocator.click();
    // }

    readonly locators: LoginPageLocators = new LoginPageLocators(
        this.page.locator('#login-form')
    );

    async fillEmail(email: string): Promise<void> {
        await this.locators.emailInputLocator.fill(email);
    }

    async fillPassword(password: string): Promise<void> {
        await this.locators.passwordInputLocator.fill(password);
    }

    async clickLogin(): Promise<void> {
        await this.locators.signInButtonLocator.click();
    }
}