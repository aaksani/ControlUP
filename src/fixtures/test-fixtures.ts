import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { AirportGapApi } from '../utils/airport-gap-api';

type TestFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  airportGapApi: AirportGapApi;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
  airportGapApi: async ({ request }, use) => {
    const airportGapApi = new AirportGapApi(request);
    await use(airportGapApi);
  },
});

export { expect } from '@playwright/test';