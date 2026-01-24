import { Page } from '@playwright/test';
import { BasePage } from '../BasePage/BasePage';
import { LoginPageLocators } from './LoginPageLocators';
import { step } from '../../../helpers/decorators/step';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  readonly locators: LoginPageLocators = new LoginPageLocators(this.page.locator('#login-form'));

  @step('Fill in Email field')
  async fillEmail(email: string): Promise<void> {
    await this.locators.emailInputLocator.fill(email);
  }

  @step('Fill in Password field')
  async fillPassword(password: string): Promise<void> {
    await this.locators.passwordInputLocator.fill(password);
  }

  @step('Click Login button')
  async clickLogin(): Promise<void> {
    await this.locators.signInButtonLocator.click();
  }

  @step('Perform Login')
  async performLogin(email: string, password: string): Promise<void> {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}
