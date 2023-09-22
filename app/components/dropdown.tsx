import React, { useState } from "react";
import type { SelectOptionType } from "~/constants/options";
import { CaretDown } from "./icons/CaretDown";
import { CaretUp } from "./icons/CaretUp";
import { useSubmit } from "@remix-run/react";
import { useOutsideClick } from "~/hooks/useClickOutside";

type DropdownProps = {
  name?: string;
  options: SelectOptionType[];
  placeholder?: string;
  className?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({
  name,
  options,
  placeholder,
  className,
}) => {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useOutsideClick(() => setIsOpen(false));
  const submit = useSubmit();

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (option: SelectOptionType) => {
    setIsOpen(false);
    setSelectedOption(option);

    setTimeout(() => {
      const form = document.getElementById("form") as HTMLFormElement | null;
      if (form) {
        submit(form, { replace: true });
      }
    }, 0);
  };

  return (
    <div className="dropdown">
      <input type="hidden" name={name} value={selectedOption?.value || ""} />

      <button
        className={`dropdown-toggle border border-opacity-25 rounded-2 bg-white w-100 ${
          isOpen ? " rounded-bottom-0" : ""
        } ${className}`}
        id="defaultDropdown"
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        <div>
          {selectedOption ? (
            <div className="d-flex align-items-center justify-content-between py-1 px-3">
              <div>
                {selectedOption.icon}
                <span className="text-black mx-2 ">{selectedOption.label}</span>
              </div>
              {isOpen ? <CaretUp /> : <CaretDown />}
            </div>
          ) : (
            <div className="d-flex align-items-center justify-content-between py-1 px-3">
              <span className=" text-black-50 mx-2">{placeholder}</span>
              {isOpen ? <CaretUp /> : <CaretDown />}
            </div>
          )}
        </div>
      </button>
      <ul
        className={`w-100 dropdown-menu${isOpen ? " show" : ""}`}
        ref={dropDownRef}
      >
        {options.map((option) => (
          <li
            key={option.value}
            className="dropdown-item"
            onClick={() => handleOptionClick(option)}
          >
            <div>
              {option.icon}
              <span className="text-black mx-2 ">{option.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
