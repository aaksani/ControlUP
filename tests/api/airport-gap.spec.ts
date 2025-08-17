import { test, expect } from '../../src/fixtures/test-fixtures';
import { AirportGapTestData } from '../../src/data/test-data';
test.describe('Airport Gap API Tests', () => {
  test('Scenario 1: Verify Airport Count - should return exactly 30 airports', async ({
    airportGapApi,
  }) => {
    const airportsData = await airportGapApi.verifyAirportsCount(
      AirportGapTestData.expectedValues.airportsCount
    );
    expect(airportsData).toHaveProperty('data');
    expect(Array.isArray(airportsData.data)).toBe(true);
    expect(airportsData.data.length).toBe(30);
    airportsData.data.forEach((airport: any) => {
      expect(airport).toHaveProperty('attributes');
      expect(airport.attributes).toHaveProperty('name');
      expect(airport.attributes).toHaveProperty('city');
      expect(airport.attributes).toHaveProperty('country');
    });
  });
  test('Scenario 2: Verify Specific Airports - should include required airports', async ({
    airportGapApi,
  }) => {
    const airportsData = await airportGapApi.verifySpecificAirportsExist(
      AirportGapTestData.expectedValues.requiredAirports
    );
    const foundAirports =
      AirportGapTestData.expectedValues.requiredAirports.map(
        (requiredAirport) => {
          const airport = airportsData.data.find(
            (airport: any) => airport.attributes.name === requiredAirport
          );
          return {
            name: requiredAirport,
            found: !!airport,
            details: airport
              ? {
                  city: airport.attributes.city,
                  country: airport.attributes.country,
                  iata: airport.attributes.iata,
                }
              : null,
          };
        }
      );
    foundAirports.forEach((airport) => {
      expect(airport.found).toBe(true);
    });
  });
  test('Scenario 3: Verify Distance Between Airports - should be greater than 400 km', async ({
    airportGapApi,
  }) => {
    const result = await airportGapApi.verifyDistanceGreaterThan(
      AirportGapTestData.expectedValues.distanceAirports.from,
      AirportGapTestData.expectedValues.distanceAirports.to,
      AirportGapTestData.expectedValues.minimumDistance
    );
    expect(result.data).toHaveProperty('data');
    expect(result.data.data).toHaveProperty('attributes');
    expect(result.data.data.attributes).toHaveProperty('kilometers');
    expect(result.data.data.attributes).toHaveProperty('miles');
    expect(result.data.data.attributes).toHaveProperty('from_airport');
    expect(result.data.data.attributes).toHaveProperty('to_airport');
    const miles = result.data.data.attributes.miles;
    expect(miles).toBeGreaterThan(248);
  });
});
