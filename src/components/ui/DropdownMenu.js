import React from "react";

const DropdownMenu = ({ options, onSelect }) => {
  return (
    <select className="border p-2 rounded" onChange={(e) => onSelect(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;

