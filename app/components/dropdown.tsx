import React from "react";
import type { SelectOptionType } from "~/constants/options";

interface DropdownProps {
  name?: string;
  options: SelectOptionType[];
  placeholder?: string;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  name,
  options,
  placeholder,
}) => {
  return (
    <select name={name} className="form-select" placeholder={placeholder}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
