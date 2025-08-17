import { test, expect } from '../../src/fixtures/test-fixtures';
import { SauceDemoTestData } from '../../src/data/test-data';
test.describe('SauceDemo UI Tests', () => {
  test('Scenario 1: Verify Inventory Items - should display exactly 6 items', async ({
    page,
    loginPage,
    inventoryPage,
  }) => {
    await loginPage.login(SauceDemoTestData.credentials.standard_user);
    await inventoryPage.verifyInventoryPageIsLoaded();
    await inventoryPage.verifyInventoryItemsCount(
      SauceDemoTestData.expectedValues.inventoryItemsCount
    );
    expect(page.url()).toBe(SauceDemoTestData.urls.inventoryPage);
  });
  test('Scenario 2: Add Item to Cart - should correctly update cart badge', async ({
    loginPage,
    inventoryPage,
  }) => {
    await loginPage.login(SauceDemoTestData.credentials.standard_user);
    await inventoryPage.verifyInventoryPageIsLoaded();
    const isCartBadgeVisibleInitially =
      await inventoryPage.isCartBadgeVisible();
    expect(isCartBadgeVisibleInitially).toBe(false);
    await inventoryPage.addFirstItemToCart();
    await inventoryPage.verifyCartBadgeCount(1);
    const isCartBadgeVisibleAfterAdd = await inventoryPage.isCartBadgeVisible();
    expect(isCartBadgeVisibleAfterAdd).toBe(true);
  });
});
