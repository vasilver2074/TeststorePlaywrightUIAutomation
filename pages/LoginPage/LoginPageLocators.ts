import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class LoginPageLocators extends BasePageLocators {

    readonly emailInputLocator: Locator = this.baseLocator.getByRole(
        "textbox",
        { name: "Email" });

    readonly passwordInputLocator: Locator = this.baseLocator.getByRole(
        "textbox",
        { name: "Password input" });

    readonly signInButtonLocator: Locator = this.baseLocator.getByRole("button", {
        name: "Sign in",
    });
}