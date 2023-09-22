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
    <div>
      <div className="border border-1 border-gray rounded-3 bg-white mt-5 p-2 p-lg-4 ms-lg-12 mt-lg-10">
        <div className="mb-lg-2 mb-sm-2 ">
          <h5 className="fw-bold fs-4 text-dark ">Filters</h5>
          <hr />
        </div>
        <div className="mb-2">
          <label htmlFor="make" className="form-label">
            Brand
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
    </div>
  );
};
