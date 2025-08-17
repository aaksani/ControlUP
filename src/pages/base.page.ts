import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  getCurrentUrl(): string {
    return this.page.url();
  }

  async waitForElement(
    locator: Locator,
    timeout: number = 10000
  ): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async waitForElementToBeHidden(
    locator: Locator,
    timeout: number = 10000
  ): Promise<void> {
    await locator.waitFor({ state: 'hidden', timeout });
  }

  async scrollToElement(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
  }

  async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({
      path: `screenshots/${name}.png`,
      fullPage: true,
    });
  }

  async wait(milliseconds: number): Promise<void> {
    await this.page.waitForTimeout(milliseconds);
  }

  async getTextContent(locator: Locator): Promise<string> {
    return (await locator.textContent()) || '';
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  async isEnabled(locator: Locator): Promise<boolean> {
    return await locator.isEnabled();
  }

  async clearAndType(locator: Locator, text: string): Promise<void> {
    await locator.clear();
    await locator.fill(text);
  }
}
