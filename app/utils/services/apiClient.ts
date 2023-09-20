import type { AxiosInstance } from "axios";
import axios from "axios";

export default class ApiClient {
  private httpClient: AxiosInstance;

  constructor(baseURL: string) {
    this.httpClient = axios.create({ baseURL });
  }

  get({ endpoint, params, options }: any) {
    return this.httpClient.get(endpoint, {
      params,
      ...options,
    });
  }
}
