"use client";
import React, { useState } from "react";

interface ToggleSwitchProps {
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  initialChecked = false,
  onChange,
  className = "",
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label
      className={`relative flex flex-col justify-center items-center gap-[30px] w-[50px] h-[20px] ${className}`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="opacity-0 w-0 h-0 absolute"
      />
      <span
        className={`box-border rounded-[5px] border-2 border-[#323232] shadow-[4px_4px_#323232] absolute top-0 left-0 right-0 bottom-0 cursor-pointer transition-all duration-300 ${
          isChecked ? "bg-[#f79121]" : "bg-white"
        }`}
      ></span>
      <span
        className={`box-border absolute content-[''] h-[20px] w-[20px] border-2 border-[#323232] rounded-[5px] left-[-2px] bottom-[2px] bg-white shadow-[0_3px_0_#323232] transition-all duration-300 ${
          isChecked ? "translate-x-[30px]" : ""
        }`}
      ></span>
    </label>
  );
};

export default ToggleSwitch;
