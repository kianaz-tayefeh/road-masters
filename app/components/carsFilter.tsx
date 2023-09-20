import { DropdownInputGroup } from "./dropdownInputGroup";
import { Dropdown } from "./dropdown";
import {
  COLOR_OPTIONS,
  MAKE_OPTIONS,
  MILAGE_OPTIONS,
  MODEL_OPTIONS,
  PRICE_OPTIONS,
  YEAR_OPTIONS,
} from "~/constants/options";

export const CarsFilter = () => {
  return (
    <div className=" row-cols-1 border-1 rounded-3 border bg-white border-gray p-3 ms-md-15rem">
      <h5 className="fw-bold">Filters</h5>
      <hr />
      <label htmlFor="color" className="form-label mt-2">
        Make
      </label>
      <Dropdown
        name="make"
        options={MAKE_OPTIONS}
        placeholder="select a color"
      />
      <label htmlFor="color" className="form-label mt-2">
        Model
      </label>
      <Dropdown
        name="model"
        options={MODEL_OPTIONS}
        placeholder="select a color"
      />
      <DropdownInputGroup
        label="Price"
        options={PRICE_OPTIONS}
        primaryPlaceholder="from"
        secondaryPlaceholder="till"
      />
      <DropdownInputGroup
        label="Year"
        options={YEAR_OPTIONS}
        primaryPlaceholder="from"
        secondaryPlaceholder="till"
      />
      <DropdownInputGroup
        label="Milage"
        options={MILAGE_OPTIONS}
        primaryPlaceholder="from"
        secondaryPlaceholder="till"
      />
      <label htmlFor="color" className="form-label">
        Color
      </label>
      <Dropdown options={COLOR_OPTIONS} placeholder="select a color" />
    </div>
  );
};
