import { DropdownInputGroup } from "./DropdownInputGroup";
import { Dropdown } from "./Dropdown";
import {
  COLOR_OPTIONS,
  MAKE_OPTIONS,
  MILAGE_OPTIONS,
  MODEL_OPTIONS,
  PRICE_OPTIONS,
  YEAR_OPTIONS,
} from "~/constants/options";

export const CarFilter = () => {
  return (
    <div className="border rounded-3 border-1 border-gray bg-white p-4 ms-12 mt-10">
      <div className="mb-2">
        <h5 className="fw-bold fs-4 text-dark ">Filters</h5>
        <hr />
      </div>
      <div className="mb-2">
        <label htmlFor="make" className="form-label">
          Make
        </label>
        <Dropdown
          name="make"
          options={MAKE_OPTIONS}
          placeholder="select a brand"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="model" className="form-label">
          Model
        </label>
        <Dropdown
          name="model"
          options={MODEL_OPTIONS}
          placeholder="select a model"
        />
      </div>
      <div className="mb-2">
        <DropdownInputGroup
          label="Price"
          options={PRICE_OPTIONS}
          primaryPlaceholder="from"
          secondaryPlaceholder="till"
        />
      </div>
      <div className="mb-2">
        <DropdownInputGroup
          label="Year"
          options={YEAR_OPTIONS}
          primaryPlaceholder="from"
          secondaryPlaceholder="till"
        />
      </div>
      <div className="mb-2">
        <DropdownInputGroup
          label="Milage"
          options={MILAGE_OPTIONS}
          primaryPlaceholder="from"
          secondaryPlaceholder="till"
        />
      </div>
      <div>
        <label htmlFor="color" className="form-label">
          Color
        </label>
        <Dropdown options={COLOR_OPTIONS} placeholder="select a color" />
      </div>
    </div>
  );
};
