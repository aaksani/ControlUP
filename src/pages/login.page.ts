import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { SauceDemoTestData } from '../data/test-data';
export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;
  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }
  async navigateToLoginPage(url: string): Promise<void> {
    await this.goto(url);
    await this.waitForPageLoad();
  }
  async loginWithCredentials(user: { username: string; password: string }): Promise<void> {
    await this.usernameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
    await this.waitForPageLoad();
  }
  async login(user: { username: string; password: string }): Promise<void> {
    await this.navigateToLoginPage(SauceDemoTestData.urls.loginPage);
    await this.verifyLoginPageIsLoaded();
    await this.loginWithCredentials(user);
  }
  async getErrorMessage(): Promise<string> {
    await this.waitForElement(this.errorMessage);
    return await this.getTextContent(this.errorMessage);
  }
  async isErrorMessageVisible(): Promise<boolean> {
    return await this.isVisible(this.errorMessage);
  }
  async verifyLoginPageIsLoaded(): Promise<void> {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }
}
