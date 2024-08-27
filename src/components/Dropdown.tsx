import React from 'react';
import { DropdownProps } from "../interfaces/Dropdown.type";

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, defaultValue, renderOption, getOptions }) => {
    const optionsToDisplay = getOptions ? getOptions() : options;

    if (!optionsToDisplay) {
        return null;
    }

    return (
        <select 
            className="!h-full !w-full rounded-lg p-1 px-8" 
            onChange={(e) => onChange && onChange(e.target.value)} 
            defaultValue=""
        >
            {defaultValue && (
                <option value="" disabled>
                    {defaultValue}
                </option>
            )}
            {optionsToDisplay.map((option, index) => (
                <option key={index} value={option}>
                    {renderOption ? renderOption(option) : option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
