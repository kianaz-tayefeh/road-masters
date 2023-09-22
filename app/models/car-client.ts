import { getCars } from "~/apis/car";

export async function getCarListItems(carFilters: any) {
  try {
    const response = await getCars(carFilters);

    return response.data;
  } catch (error) {
    return [];
  }
}
