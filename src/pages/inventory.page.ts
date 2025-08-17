import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';
export class InventoryPage extends BasePage {
  private readonly inventoryContainer: Locator;
  private readonly inventoryItems: Locator;
  private readonly cartBadge: Locator;
  private readonly cartIcon: Locator;
  private readonly addToCartButtons: Locator;
  private readonly removeButtons: Locator;
  private readonly itemNames: Locator;
  constructor(page: Page) {
    super(page);
    this.inventoryContainer = page.locator('[data-test="inventory-container"]');
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    this.addToCartButtons = page.locator('button[data-test^="add-to-cart"]');
    this.removeButtons = page.locator('button[data-test^="remove"]');
    this.itemNames = page.locator('[data-test="inventory-item-name"]');
  }
  async verifyInventoryPageIsLoaded(): Promise<void> {
    await this.waitForElement(this.inventoryContainer);
    await expect(this.inventoryContainer).toBeVisible();
    await expect(this.inventoryItems.first()).toBeVisible();
  }
  async getInventoryItemsCount(): Promise<number> {
    await this.waitForElement(this.inventoryItems.first());
    return await this.inventoryItems.count();
  }
  async verifyInventoryItemsCount(expectedCount: number): Promise<void> {
    const actualCount = await this.getInventoryItemsCount();
    expect(actualCount).toBe(expectedCount);
  }
  async addFirstItemToCart(): Promise<void> {
    await this.waitForElement(this.addToCartButtons.first());
    await this.addToCartButtons.first().click();
  }
  async addItemToCartByIndex(index: number): Promise<void> {
    await this.waitForElement(this.addToCartButtons.nth(index));
    await this.addToCartButtons.nth(index).click();
  }
  async getCartBadgeCount(): Promise<number> {
    const badgeText = await this.cartBadge.textContent();
    return badgeText ? parseInt(badgeText, 10) : 0;
  }
  async verifyCartBadgeCount(expectedCount: number): Promise<void> {
    const actualCount = await this.getCartBadgeCount();
    expect(actualCount).toBe(expectedCount);
  }
  async isCartBadgeVisible(): Promise<boolean> {
    return await this.cartBadge.isVisible();
  }
  async getInventoryItemNames(): Promise<string[]> {
    return await this.itemNames.allTextContents();
  }
  async clickCartIcon(): Promise<void> {
    await this.cartIcon.click();
    await this.waitForPageLoad();
  }
}
