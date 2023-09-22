import React from "react";
import { Dropdown } from "./Dropdown";
import type { SelectOptionType } from "~/constants/options";

type DropdownInputGroupProps = {
  label: string;
  name?: string;
  options: SelectOptionType[];
  primaryPlaceholder: string;
  secondaryPlaceholder: string;
};

export const DropdownInputGroup: React.FC<DropdownInputGroupProps> = ({
  label,
  options,
  primaryPlaceholder,
  secondaryPlaceholder,
}) => {
  return (
    <div>
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <div className="input-group">
        <Dropdown
          options={options}
          placeholder={primaryPlaceholder}
          className="rounded-right"
        />
        <Dropdown
          options={options}
          placeholder={secondaryPlaceholder}
          className="rounded-left"
        />
      </div>
    </div>
  );
};
