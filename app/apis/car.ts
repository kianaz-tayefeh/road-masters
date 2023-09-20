import { CARS_API } from "~/utils/services";

export const getCars = async (params: any) =>
  CARS_API.get({
    endpoint: "cars",
    params,
  });
