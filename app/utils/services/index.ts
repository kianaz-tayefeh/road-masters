import ApiClient from "./apiClient";

if (!process.env.CARS_API_ENDPOINT) {
  throw new Error("CARS_API_ENDPOINT is not defined in process.env");
}

const { CARS_API_ENDPOINT } = process.env;

export const CARS_API = new ApiClient(CARS_API_ENDPOINT);
