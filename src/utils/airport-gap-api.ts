import { APIRequestContext, expect } from '@playwright/test';
import { ApiClient } from './api-client';
import { AirportGapTestData } from '../data/test-data';

interface AirportAttributes {
  name: string;
  city: string;
  country: string;
  iata: string;
  icao: string;
  latitude: string;
  longitude: string;
  altitude: number;
  timezone: string;
}

interface Airport {
  id: string;
  type: string;
  attributes: AirportAttributes;
}

interface AirportsResponse {
  data: Airport[];
}

interface DistanceAttributes {
  from_airport: AirportAttributes;
  to_airport: AirportAttributes;
  kilometers: number;
  miles: number;
  nautical_miles: number;
}

interface DistanceData {
  id: string;
  type: string;
  attributes: DistanceAttributes;
}

interface DistanceResponse {
  data: DistanceData;
}

interface DistanceVerificationResult {
  distance: number;
  data: DistanceResponse;
}
export class AirportGapApi extends ApiClient {
  constructor(request: APIRequestContext) {
    super(request);
  }
  async getAirports(): Promise<AirportsResponse> {
    const response = await this.get(AirportGapTestData.endpoints.airports);
    await this.verifyResponseStatus(response, 200);
    return await this.getResponseJson(response);
  }
  async getDistanceBetweenAirports(fromAirport: string, toAirport: string): Promise<DistanceResponse> {
    const response = await this.post(AirportGapTestData.endpoints.distance, {
      data: {
        from: fromAirport,
        to: toAirport,
      },
    });
    await this.verifyResponseStatus(response, 200);
    return await this.getResponseJson(response);
  }
  async verifyAirportsCount(expectedCount: number): Promise<AirportsResponse> {
    const airportsData = await this.getAirports();
    const actualCount = airportsData.data.length;
    expect(actualCount).toBe(expectedCount);
    return airportsData;
  }
  async verifySpecificAirportsExist(requiredAirports: readonly string[]): Promise<AirportsResponse> {
    const airportsData = await this.getAirports();
    const airportNames = airportsData.data.map(
      (airport: Airport) => airport.attributes.name
    );
    for (const requiredAirport of requiredAirports) {
      expect(airportNames).toContain(requiredAirport);
    }
    return airportsData;
  }
  async verifyDistanceGreaterThan(
    fromAirport: string,
    toAirport: string,
    minimumDistance: number
  ): Promise<DistanceVerificationResult> {
    const distanceData = await this.getDistanceBetweenAirports(
      fromAirport,
      toAirport
    );
    const actualDistance = distanceData.data.attributes.kilometers;
    expect(actualDistance).toBeGreaterThan(minimumDistance);
    return {
      distance: actualDistance,
      data: distanceData,
    };
  }
}
