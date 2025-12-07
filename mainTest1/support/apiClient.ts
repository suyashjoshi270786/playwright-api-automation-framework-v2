import type { APIRequestContext, APIResponse } from "@playwright/test";
export class apiClient {
  private readonly baseUrl!: string;

  constructor(private request: APIRequestContext, baseUrl?: string) {
    this.baseUrl = baseUrl ?? "https://rahulshettyacademy.com";
  }
  private buildUrl(path: string): string {
    if (path.startsWith("http")) return path;
    if (path.startsWith("/")) return `${this.baseUrl}${path}`;
    return `${this.baseUrl}/${path}`;
  }

  async get(path: string, params?: Record<string, any>): Promise<APIResponse> {
    const url = this.buildUrl(path);
    return this.request.get(url, { params });
  }

  async post(
    path: string,
    data?: any,
    params?: Record<string, any>
  ): Promise<APIResponse> {
    const url = this.buildUrl(path);
    return this.request.post(url, {
      data,
      params,
    });
  }

  async put(
    path: string,
    data?: any,
    params?: Record<string, any>
  ): Promise<APIResponse> {
    const url = this.buildUrl(path);
    return this.request.put(url, {
      data,
      params,
    });
  }

  async Delete(
    path: string,
    params?: Record<string, any>
  ): Promise<APIResponse> {
    const url = this.buildUrl(path);
    return this.request.delete(url, {
      params,
    });
  }
}
