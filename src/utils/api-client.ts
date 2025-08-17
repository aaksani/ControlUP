import { APIRequestContext, expect } from '@playwright/test';
export class ApiClient {
  private request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }
  async get(url: string, options?: any) {
    return await this.request.get(url, options);
  }
  async post(url: string, options?: any) {
    return await this.request.post(url, options);
  }
  async put(url: string, options?: any) {
    return await this.request.put(url, options);
  }
  async delete(url: string, options?: any) {
    return await this.request.delete(url, options);
  }
  async verifyResponseStatus(response: any, expectedStatus: number) {
    expect(response.status()).toBe(expectedStatus);
  }
  async getResponseJson(response: any) {
    return await response.json();
  }
  async getResponseText(response: any) {
    return await response.text();
  }
}
