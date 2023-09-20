import React from "react";
import { Dropdown } from "./dropdown";
import type { SelectOptionType } from "~/constants/options";

interface DropdownInputGroupProps {
  label: string;
  name?: string;
  options: SelectOptionType[];
  primaryPlaceholder: string;
  secondaryPlaceholder: string;
}

export const DropdownInputGroup: React.FC<DropdownInputGroupProps> = ({
  label,
  name,
  options,
  primaryPlaceholder,
  secondaryPlaceholder,
}) => {
  return (
    <div>
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <div className="row-cols-2 input-group mb-3">
        <Dropdown options={options} placeholder={primaryPlaceholder} />
        <Dropdown options={options} placeholder={secondaryPlaceholder} />
      </div>
    </div>
  );
};
