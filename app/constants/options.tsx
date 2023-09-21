import {
  Black,
  Blue,
  Green,
  Red,
  White,
  Yellow,
} from "../components/icons/ColorsIcons";

export const PAGINATION_TOTAL_PAGE = 5;
export const PAGINATION_LIMIT = 10;

export type SelectOptionType = {
  value: string;
  label: string;
  icon?: any;
};

export const PRICE_OPTIONS: SelectOptionType[] = [
  { value: "2500", label: "€2.500" },
  { value: "5000", label: "€5000" },
  { value: "7500", label: "€7.500" },
  { value: "10000", label: "€10.000" },
  { value: "12500", label: "€12.500" },
  { value: "15000", label: "€15.000" },
  { value: "20000", label: "€20.000" },
  { value: "25000", label: "€25.000" },
  { value: "50000", label: "€50.000" },
  { value: "75000", label: "€75.000" },
  { value: "100000", label: "€100.000" },
];

export const YEAR_OPTIONS: SelectOptionType[] = [
  { value: "2013", label: "2013" },
  { value: "2014", label: "2014" },
  { value: "2015", label: "2015" },
  { value: "2016", label: "2016" },
  { value: "2017", label: "2017" },
  { value: "2018", label: "2018" },
  { value: "2019", label: "2019" },
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
];

export const MILAGE_OPTIONS: SelectOptionType[] = [
  { value: "2.500", label: "2.500 km" },
  { value: "3.000", label: "3.000 km" },
  { value: "4.000", label: "4.000 km" },
  { value: "5.000", label: "5.000 km" },
  { value: "10.000", label: "10.000 km" },
  { value: "25.000", label: "25.000 km" },
  { value: "50.000", label: "50.000 km" },
  { value: "75.000", label: "75.000 km" },
  { value: "100.000", label: "100.000 km" },
];

export const COLOR_OPTIONS: SelectOptionType[] = [
  { value: "Green", label: "Green", icon: <Green /> },
  { value: "Blue", label: "Blue", icon: <Blue /> },
  { value: "Black", label: "Black", icon: <Black /> },
  { value: "White", label: "White", icon: <White /> },
  { value: "Red", label: "Red", icon: <Red /> },
  { value: "Yellow", label: "Yellow", icon: <Yellow /> },
];

export const MODEL_OPTIONS: SelectOptionType[] = [
  { value: "", label: "Select a model" },
  { value: "i10 Magna 1.2 Kappa2", label: "i10 Magna 1.2 Kappa2" },
  { value: "Glanza G", label: "Glanza G" },
  { value: "Elite i20 Sportz 1.2", label: "Elite i20 Sportz 1.2" },
  { value: "Polo GT TSI", label: "Polo GT TSI" },
  { value: "Baleno Alpha Automatic", label: "Baleno Alpha Automatic" },
  { value: "Wagon R ZXi 1.2 AMT", label: "Wagon R ZXi 1.2 AMT" },
];

export const MAKE_OPTIONS: SelectOptionType[] = [
  { value: "", label: "Select an brand" },
  { value: "Toyota", label: "Toyota" },
  { value: "BMW", label: "BMW" },
  { value: "Maruti Suzuki", label: "Maruti Suzuki" },
  { value: "Volkswagen", label: "Volkswagen" },
  { value: "Tata", label: "Tata" },
  { value: "Renault", label: "Renault" },
  { value: "Hyundai", label: "Hyundai" },
  { value: "Nissan", label: "Nissan" },
  { value: "Skoda", label: "Skoda" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
];
