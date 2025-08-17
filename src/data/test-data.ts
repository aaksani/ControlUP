export const SauceDemoTestData = {
  credentials: {
    standard_user: {
      username: process.env.SAUCEDEMO_USERNAME!,
      password: process.env.SAUCEDEMO_PASSWORD!,
    },
  },
  urls: {
    loginPage: process.env.SAUCEDEMO_BASE_URL!,
    inventoryPage: `${process.env.SAUCEDEMO_BASE_URL!}/inventory.html`,
  },
  expectedValues: {
    inventoryItemsCount: 6,
  },
} as const;
export const AirportGapTestData = {
  endpoints: {
    airports: `${process.env.AIRPORTGAP_BASE_URL}/airports`,
    distance: `${process.env.AIRPORTGAP_BASE_URL}/airports/distance`,
  },
  expectedValues: {
    airportsCount: 30,
    requiredAirports: [
      'Akureyri Airport',
      'St. Anthony Airport',
      'CFB Bagotville',
    ],
    distanceAirports: {
      from: 'KIX',
      to: 'NRT',
    },
    minimumDistance: 400,
  },
} as const;
