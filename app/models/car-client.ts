import { getCars } from "~/apis/car";

export async function getCarListItems(carFilters) {
  try {
    const response = await getCars(carFilters);

    return response.data;
  } catch (error) {
    return [];
  }
}
